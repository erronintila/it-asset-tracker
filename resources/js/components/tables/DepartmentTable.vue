<template>
    <v-data-table
        v-model="selectedItems"
        :show-select="showSelect"
        item-key="id"
        :headers="headers"
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
        <template v-slot:[`item.code`]="{ item }">
            <router-link
                :to="{
                    name: 'departments.show',
                    params: { id: item.id }
                }"
            >
                {{ item.code }}
            </router-link>
        </template>
        <template v-slot:[`item.status`]="{ item }">
            <v-chip
                small
                :color="item.status.color"
                :text-color="item.status.text_color"
            >
                {{ item.status.text }}
            </v-chip>
        </template>
    </v-data-table>
</template>

<script>
import DepartmentDataService from "../../services/DepartmentDataService";

export default {
    name: "department-table",
    props: {
        showSelect: {
            type: Boolean,
            default: true
        },
        selected: {
            type: Array,
            default: () => []
        },
        search: {
            type: String,
            default: ""
        },
        headers: {
            type: Array,
            default: () => [
                { text: "Code", value: "code" },
                { text: "Name", value: "name" },
                { text: "Manager", value: "manager.full_name" },
                { text: "Assets", value: "quantity" }
            ]
        }
    },
    data() {
        return {
            selectedItems: [],
            items: [],
            tableOptions: {
                options: {
                    sortBy: ["name"],
                    sortDesc: [false],
                    page: 1,
                    itemsPerPage: 10
                },
                loading: false,
                itemsPerPageOptions: [10, 20, 50, 100],
                serverItemsLength: 0
            }
        };
    },
    methods: {
        getData() {
            this.tableOptions.loading = true;
            return new Promise((resolve, reject) => {
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
                        search: this.search
                    }
                };

                DepartmentDataService.getAll(data)
                    .then(response => {
                        this.items = response.data.data.data;
                        this.tableOptions.serverItemsLength =
                            response.data.data.total;
                        this.tableOptions.loading = false;
                        resolve();
                    })
                    .catch(error => {
                        this.tableOptions.loading = false;
                        console.log(error);
                        reject();
                    });
            });
        }
    },
    computed: {
        params() {
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
        },
        selected: {
            immediate: true,
            deep: true,
            handler(newValue) {
                this.selectedItems = newValue;
            }
        },
        selectedItems() {
            this.$emit("selected-items", this.selectedItems);
        }
    }
};
</script>
