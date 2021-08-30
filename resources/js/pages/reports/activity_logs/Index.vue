<template>
    <div>
        <page-header :title="'Activity Logs'">
            <template slot="leftSideNavigation">
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
                <small class="text--secondary">
                    {{ form.user ? form.user.full_name : "All Accounts" }}
                </small>
                <EmployeeDialogSelector
                    :selected="!form.user ? [] : [...form.user]"
                    @on-select="onSelectUser"
                >
                    <template
                        v-slot:openDialog="{
                            on,
                            attrs
                        }"
                    >
                        <v-btn
                            v-bind="attrs"
                            v-on="on"
                            icon
                            title="Select Employee"
                        >
                            <v-icon>
                                mdi-clipboard-account
                            </v-icon>
                        </v-btn>
                    </template>
                </EmployeeDialogSelector>
            </template>
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
                v-if="form.user"
                close
                label
                outlined
                small
                @click:close="form.user = null"
            >
                {{ form.user ? form.user.name : "" }}
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
                    <template v-slot:[`item.created_at`]="{ item }">
                        {{ item.created_at | moment("LLLL") }}
                    </template>
                    <template v-slot:[`item.causer`]="{ item }">
                        {{ item.causer ? item.causer.name : "Default" }}
                    </template>
                    <template v-slot:[`item.action`]="{ item }">
                        <router-link :to="`/${item.properties.custom.link}`">
                            View Details
                        </router-link>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
        <!-- End of DataTable -->
    </div>
</template>

<script>
import ActivityLogDataService from "../../../services/ActivityLogDataService";
import EmployeeDialogSelector from "../../../components/selectors/EmployeeDialogSelector.vue";

export default {
    components: {
        EmployeeDialogSelector
    },
    data() {
        return {
            actions: [
                { text: "Refresh", action: "refresh", icon: "mdi-refresh" },
                { text: "Export", action: "export", icon: "mdi-export" }
            ],
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
                    { text: "Description", value: "description" },
                    { text: "Action", value: "action" }
                ]
            },
            form: {
                user: null
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
                let user_id = this.form.user ? this.form.user.id : null;
                // let status = this.status;

                let data = {
                    params: {
                        sortBy: sortBy[0],
                        sortType: sortDesc[0] ? "desc" : "asc",
                        page: page,
                        itemsPerPage: itemsPerPage,
                        user_id: user_id
                        // status: status
                    }
                };

                ActivityLogDataService.getAll(data)
                    .then(response => {
                        this.items = response.data.data.data;
                        this.tableOptions.serverItemsLength =
                            response.data.data.total;
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
                    this.$router.push(
                        "/activity_logs/" + this.selectedItems[0].id + "/edit"
                    );
                    break;
                case "delete":
                    this.onDelete();
                    break;
                case "restore":
                    break;
                case "export":
                    break;
                default:
                    alert("Error: Action not identified");
                    break;
            }
        },
        clearFilters: function() {
            this.selectedItems = [];
            this.form.user = null;
            this.tableOptions.options = {
                sortBy: ["created_at"],
                sortDesc: [true],
                page: 1,
                itemsPerPage: 10
            };
        },
        onSelectUser(e) {
            if (e == null || e == undefined) {
                this.form.user = null;
                return;
            }

            this.form.user = e[0];
            this.getData();
        }
    },
    computed: {
        params(nv) {
            return {
                ...this.tableOptions.options,
                query: this.form.user
                // query: this.status
            };
        },
        hasFilters() {
            return this.form.user || this.selectedItems.length;
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

<style scoped>
a {
    text-decoration: none;
}
</style>
