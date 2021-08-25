<template>
    <div>
        <page-header>
            <template slot="leftSideNavigation">
                <v-btn
                    text
                    title="Add new work order type"
                    @click="dialogTransactionTypeCreate = true"
                >
                    Create New
                </v-btn>
                <v-menu rounded offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            icon
                            v-bind="attrs"
                            v-on="on"
                            title="More action"
                        >
                            <v-icon>
                                mdi-dots-vertical
                            </v-icon>
                        </v-btn>
                    </template>

                    <v-list dense>
                        <template v-for="(item, index) in actions">
                            <v-list-item
                                link
                                :key="index"
                                @click="filterAction(item.action)"
                            >
                                <v-list-item-icon>
                                    <v-icon>{{ item.icon }}</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>
                                    <div class="mr-3">
                                        {{ item.text }}
                                    </div>
                                </v-list-item-title>
                            </v-list-item>
                        </template>
                    </v-list>
                </v-menu>
            </template>
            <template slot="rightSideNavigation">
                <v-text-field
                    v-model="search"
                    class="hidden-sm-and-down mt-5 p-0"
                    label="Search"
                    clearable
                    @keyup.enter="getData"
                ></v-text-field>
                <v-menu
                    :close-on-content-click="false"
                    :nudge-width="200"
                    offset-y
                    left
                    bottom
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on">
                            <v-icon>mdi-clipboard-search-outline</v-icon>
                        </v-btn>
                    </template>

                    <v-card>
                        <v-list>
                            <v-list-item>
                                <v-select
                                    v-model="filter.status"
                                    :items="filter.statuses"
                                    label="Status"
                                ></v-select>
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-menu>
            </template>
        </page-header>

        <!-- Search bar on small screen size -->
        <v-row class="hidden-sm-and-up mx-1">
            <v-col>
                <v-text-field
                    class="mt-5 p-0"
                    label="Search"
                    clearable
                    append-icon="mdi-clipboard-search-outline"
                ></v-text-field>
            </v-col>
        </v-row>
        <!-- End of Search bar -->

        <!-- Search results info -->
        <div class="my-3">
            <v-chip
                v-if="selectedItems.length"
                close
                label
                outlined
                small
                @click:close="selectedItems = []"
            >
                {{ selectedItems.length }} item(s) selected
            </v-chip>
            <v-chip
                v-if="search"
                close
                label
                outlined
                small
                @click:close="search = ''"
            >
                {{ search }}
            </v-chip>
            <v-chip
                v-if="filter.status != 'Active'"
                close
                label
                outlined
                small
                @click:close="filter.status = 'Active'"
            >
                {{ filter.status }}
            </v-chip>
            <v-chip
                v-if="hasFilters"
                close
                label
                outlined
                small
                @click:close="clearFilters"
            >
                Clear All Filters
            </v-chip>
        </div>
        <!-- End of Search results info -->

        <!-- DataTable -->
        <v-row>
            <v-col cols="12">
                <v-data-table
                    v-model="selectedItems"
                    show-select
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
                    <template v-slot:[`item.code`]="{ item }">
                        <router-link
                            :to="{
                                name: 'request_types.show',
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
            </v-col>
        </v-row>
        <!-- End of DataTable -->

        <!-- Dialogs -->
        <TransactionTypeCreate
            :dialogCreate="dialogTransactionTypeCreate"
            @close-dialog="dialogTransactionTypeCreate = false"
            @save-dialog="
                () => {
                    getData();
                    dialogTransactionTypeCreate = false;
                }
            "
        ></TransactionTypeCreate>

        <TransactionTypeEdit
            :transaction_type="selectedItems[0]"
            :dialogEdit="dialogTransactionTypeEdit"
            @close-dialog="dialogTransactionTypeEdit = false"
            @save-dialog="
                () => {
                    getData();
                    dialogTransactionTypeEdit = false;
                }
            "
        ></TransactionTypeEdit>
        <!-- End of Dialogs -->
    </div>
</template>

<script>
import TransactionTypeDataService from "../../services/TransactionTypeDataService";
import TransactionTypeCreate from "./Create.vue";
import TransactionTypeEdit from "./Edit.vue";

export default {
    name: "work-order-types-index",
    components: {
        TransactionTypeCreate,
        TransactionTypeEdit
    },
    data() {
        return {
            dialogTransactionTypeCreate: false,
            dialogTransactionTypeEdit: false,
            filter: {
                status: "Active",
                statuses: ["Active", "Inactive", "Deleted"]
            },
            actions: [
                { text: "Refresh", action: "refresh", icon: "mdi-refresh" },
                { text: "Update", action: "update", icon: "mdi-update" },
                { text: "Delete", action: "delete", icon: "mdi-delete" },
                { text: "Restore", action: "restore", icon: "mdi-restore" },
                {
                    text: "Activate",
                    action: "activate",
                    icon: "mdi-checkbox-marked-circle"
                },
                {
                    text: "Deactivate",
                    action: "deactivate",
                    icon: "mdi-close-circle"
                }
            ],
            tableOptions: {
                options: {
                    sortBy: ["name"],
                    sortDesc: [false],
                    page: 1,
                    itemsPerPage: 10
                },
                loading: false,
                itemsPerPageOptions: [10, 20, 50, 100],
                serverItemsLength: 0,
                headers: [
                    { text: "Code", value: "code" },
                    { text: "Action Type", value: "action_type" },
                    { text: "Name", value: "name" }
                ]
            },
            search: "",
            items: [],
            selectedItems: []
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
                let search = this.search;
                let status = this.filter.status;

                let data = {
                    params: {
                        sortBy: sortBy[0],
                        sortType: sortDesc[0] ? "desc" : "asc",
                        page: page,
                        itemsPerPage: itemsPerPage,
                        search: search,
                        action_types: ["checkin", "checkout", "disposal"],
                        status: status
                    }
                };

                TransactionTypeDataService.getAll(data)
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
        },
        filterAction: function(action) {
            switch (action) {
                case "refresh":
                    this.getData();
                    break;
                case "update":
                    if (!this.selectedItems.length) {
                        alert("No data selected.");
                        return;
                    }
                    this.dialogTransactionTypeEdit = true;
                    break;
                case "delete":
                    this.onDelete();
                    break;
                case "restore":
                    this.onRestore();
                    break;
                case "activate":
                    this.onActivation(true);
                    break;
                case "deactivate":
                    this.onActivation(false);
                    break;
                case "export":
                    break;
                default:
                    alert("Error: Action not identified");
                    break;
            }
        },
        onActivation(is_active) {
            if (!this.selectedItems.length) {
                alert("No data selected.");
                return;
            }

            if (
                !confirm(
                    `WARNING: Do you want to ${
                        is_active ? "activate" : "deactivate"
                    } selected items?`
                )
            ) {
                return;
            }

            let data = {
                // params: {
                ids: this.selectedItems.map(item => item.id),
                is_active: is_active
                // }
            };

            TransactionTypeDataService.activate(data)
                .then(response => {
                    this.getData();
                    this.selectedItems = [];
                })
                .catch(error => {
                    console.log(error);
                    alert("An error has occurred.");
                });
        },
        onDelete: function() {
            if (!this.selectedItems.length) {
                alert("No data selected.");
                return;
            }

            if (!confirm("WARNING: Do you want to delete selected items?")) {
                return;
            }

            let data = {
                params: {
                    ids: this.selectedItems.map(item => item.id)
                }
            };

            TransactionTypeDataService.deleteMany(data)
                .then(response => {
                    this.getData();
                    this.selectedItems = [];
                })
                .catch(error => {
                    console.log(error);
                    alert("An error has occurred.");
                });
        },
        onRestore: function() {
            if (!this.selectedItems.length) {
                alert("No data selected.");
                return;
            }

            if (!confirm("WARNING: Do you want to restore selected items?")) {
                return;
            }

            let data = {
                ids: this.selectedItems.map(item => item.id)
            };

            TransactionTypeDataService.restore(data)
                .then(response => {
                    this.getData();
                    this.selectedItems = [];
                })
                .catch(error => {
                    console.log(error);
                    alert("An error has occurred.");
                });
        },
        clearFilters: function() {
            this.filter.status = "Active";
            this.selectedItems = [];
            this.search = "";
            this.tableOptions.options = {
                sortBy: ["name"],
                sortDesc: [false],
                page: 1,
                itemsPerPage: 10
            };
        }
    },
    computed: {
        params(nv) {
            return {
                ...this.tableOptions.options,
                // query: this.search,
                query: this.filter.status
            };
        },
        hasFilters() {
            if (this.filter.status != "Active") {
                return true;
            }

            if (this.search || this.selectedItems.length) {
                return true;
            }

            return false;
        }
    },
    watch: {
        search() {
            if (!this.search) {
                this.getData();
            }
        },
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

<style scoped>
a {
    text-decoration: none;
}
</style>
