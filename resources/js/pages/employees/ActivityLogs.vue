<template>
    <div>
        <!-- DataTable -->
        <v-row>
            <v-col cols="12">
                <v-data-table
                    item-key="id"
                    :headers="tableOptions.headers"
                    :items="items"
                    :loading="tableOptions.loading"
                    :options.sync="tableOptions.options"
                    :server-items-length="tableOptions.serverItemsLength"
                    :footer-props="{
                        itemsPerPageOptions: tableOptions.itemsPerPageOptions,
                        showFirstLastPage: true,
                        firstIcon: 'mdi-page-first',
                        lastIcon: 'mdi-page-last',
                        prevIcon: 'mdi-chevron-left',
                        nextIcon: 'mdi-chevron-right'
                    }"
                >
                    <template v-slot:[`item.created_at`]="{ item }">
                        {{ mixin_formatDate(item.created_at, "LLL") }}
                    </template>
                    <template v-slot:[`item.causer`]="{ item }">
                        {{ item.causer ? item.causer.name : "Default" }}
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
        <!-- End of DataTable -->
    </div>
</template>

<script>
import ActivityLogDataService from "../../services/ActivityLogDataService";

export default {
    props: {
        model_id: {
            type: Number,
            default: null
        }
    },
    data() {
        return {
            tableOptions: {
                options: {
                    sortBy: ["created_at"],
                    sortDesc: [true],
                    page: 1,
                    itemsPerPage: 10
                },
                loading: false,
                itemsPerPageOptions: [10, 20, 50, 100],
                serverItemsLength: 0,
                headers: [
                    { text: "Date", value: "created_at" },
                    { text: "User", value: "causer" },
                    { text: "Description", value: "description" }
                ]
            },
            items: []
        };
    },
    methods: {
        async getData() {
            this.tableOptions.loading = true;
            const {
                sortBy,
                sortDesc,
                page,
                itemsPerPage
            } = this.tableOptions.options;

            let data = {
                params: {
                    sortBy: sortBy[0],
                    sortType: sortDesc[0] ? "desc" : "asc",
                    page: page,
                    itemsPerPage: itemsPerPage,
                    subject_type: "App\\Models\\Employee",
                    subject_id: this.model_id ?? null
                }
            };

            try {
                const response = await ActivityLogDataService.getAll(data);
                console.log(response);
                this.items = response.data.data.data;
                this.tableOptions.serverItemsLength = response.data.data.total;
                this.tableOptions.loading = false;
            } catch (error) {
                this.tableOptions.loading = false;
                console.log(error.response);
            }
        }
    },
    computed: {
        params(nv) {
            return {
                ...this.tableOptions.options
            };
        }
    },
    watch: {
        params: {
            immediate: true,
            deep: true,
            handler() {
                this.getData();
            }
        }
    },
    activated() {
        this.getData();
    }
};
</script>
