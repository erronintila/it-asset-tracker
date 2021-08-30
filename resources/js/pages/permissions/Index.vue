<template>
    <div>
        <page-header>
            <template slot="leftSideNavigation">
                <EmployeeDialogSelector
                    :selected="!user ? [] : [...user]"
                    @on-select="onSelectEmployee"
                >
                    <template v-slot:openDialog="{ on, attrs }">
                        <v-btn text title="Employee" v-bind="attrs" v-on="on">
                            {{ user ? user.name : "Select Employee" }}
                        </v-btn>
                    </template>
                </EmployeeDialogSelector>
                <v-btn v-if="user" icon @click="onSave">
                    <v-icon>mdi-content-save</v-icon>
                </v-btn>
                <v-btn v-if="user" icon @click="refreshData">
                    <v-icon>mdi-refresh</v-icon>
                </v-btn>
            </template>
            <template slot="rightSideNavigation"> </template>
        </page-header>

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
                v-if="hasFilters"
                close
                label
                outlined
                small
                @click:close="clearFilters"
            >
                Clear All Items
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
                    group-by="category"
                    show-group-by
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
            </v-col>
        </v-row>
        <!-- End of DataTable -->
    </div>
</template>

<script>
import PermissionDataService from "../../services/PermissionDataService";
import EmployeeDialogSelector from "../../components/selectors/EmployeeDialogSelector.vue";

export default {
    components: {
        EmployeeDialogSelector
    },
    data() {
        return {
            user: null,
            filter: {
                status: "Active",
                statuses: ["Active", "Inactive", "Deleted"]
            },
            actions: [
                { text: "Refresh", action: "refresh", icon: "mdi-refresh" },
                { text: "Update", action: "update", icon: "mdi-update" },
                { text: "Delete", action: "delete", icon: "mdi-delete" },
                { text: "Restore", action: "restore", icon: "mdi-restore" }
            ],
            tableOptions: {
                options: {
                    sortBy: ["code"],
                    sortDesc: [false],
                    page: 1,
                    itemsPerPage: 10
                },
                loading: false,
                itemsPerPageOptions: [10, 20, 50, 100],
                serverItemsLength: 0,
                headers: [
                    { text: "Name", value: "name" },
                    { text: "Category", value: "category" }
                ]
            },
            search: "",
            items: [],
            selectedItems: []
        };
    },
    methods: {
        async getPermissions(item) {
            if (item) {
                try {
                    const response = await PermissionDataService.show(item.id);
                    this.selectedItems = response.data.data;
                } catch (error) {
                    console.log(error.response);
                    alert("An error has occurred.");
                }
            }
        },
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
                        status: status,
                        role: ""
                    }
                };

                PermissionDataService.getAll(data)
                    .then(response => {
                        this.items = response.data.data;
                        this.tableOptions.serverItemsLength =
                            response.data.length;
                        this.tableOptions.loading = false;
                        resolve();
                    })
                    .catch(error => {
                        this.tableOptions.loading = false;
                        console.log(error.response);
                        reject();
                    });
            });
        },
        onSelectEmployee(e) {
            if (e == null || e == undefined) {
                this.user = null;
                return;
            }

            this.user = e[0];
            this.getPermissions(e[0]);
        },
        onSave: function() {
            if (!this.selectedItems.length) {
                alert("No data selected.");
                return;
            }

            if (!confirm("Do you want to update permissions?")) {
                return;
            }

            PermissionDataService.update(this.user.id, {
                permissions: this.selectedItems
            })
                .then(response => {
                    alert(response.data.message);
                    this.user = null;
                    this.selectedItems = [];
                    this.getData();
                })
                .catch(error => {
                    console.log(error.response);
                    alert("An error has occurred.");
                });
        },
        refreshData() {
            this.user = null;
            this.clearFilters();
        },
        clearFilters: function() {
            this.filter.status = "Active";
            this.selectedItems = [];
            this.search = "";
            this.tableOptions.options = {
                sortBy: ["code"],
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
                // query: this.search
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
    },
    activated() {
        this.getData();
    }
};
</script>
