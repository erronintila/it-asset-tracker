<template>
    <div>
        <!-- DataTable -->
        <v-row>
            <v-col cols="12">
                <v-data-table
                    v-model="selectedItems"
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
                    <template v-slot:[`item.asset_tag`]="{ item }">
                        <router-link
                            :to="{
                                name: 'assets.show',
                                params: { id: item.id }
                            }"
                        >
                            {{ item.asset_tag }}
                        </router-link>
                    </template>
                    <template v-slot:[`item.status`]="{ item }">
                        <v-chip
                            small
                            :color="item.status.color"
                            :dark="item.status.dark"
                        >
                            {{ item.status.status }}
                        </v-chip>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
        <!-- End of DataTable -->
    </div>
</template>

<script>
import AssetDataService from "../../services/AssetDataService";

export default {
    props: {
        model_id: {
            type: Number,
            default: null
        }
    },
    data() {
        return {
            filter: {
                status: "Active",
                statuses: [
                    "Active",
                    "Deleted",
                    "Disposed",
                    "In Maintenance",
                    "In Use",
                    "In Storage",
                    "Pending"
                ]
            },
            tableOptions: {
                options: {
                    sortBy: ["description"],
                    sortDesc: [false],
                    page: 1,
                    itemsPerPage: 10
                },
                loading: false,
                itemsPerPageOptions: [10, 20, 50, 100],
                serverItemsLength: 0,
                headers: [
                    { text: "Asset Tag", value: "asset_tag" },
                    { text: "Serial", value: "serial_no" },
                    { text: "Description", value: "description" },
                    { text: "Category", value: "asset_category.name" },
                    { text: "Manufacturer", value: "manufacturer.name" },
                    // { text: "Assigned To", value: "assigned_user.name" },
                    { text: "Status", value: "status", sortable: false }
                ]
            },
            search: "",
            items: [],
            selectedItems: []
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
                    assigned_user_id: this.model_id
                }
            };

            try {
                const response = await AssetDataService.getAll(data);
                this.items = response.data.data.data;
                this.tableOptions.serverItemsLength = response.data.data.total;
                this.tableOptions.loading = false;
            } catch (error) {
                this.tableOptions.loading = false;
                console.log(error);
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
    }
};
</script>
