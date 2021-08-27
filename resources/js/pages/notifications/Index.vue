<template>
    <div>
        <page-header :title="'Notifications'">
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
                            <v-list-item>
                                <XDateRangePicker
                                    ref="dateRange"
                                    :dateRange="filter.date_range"
                                    @on-change="updateDateRange"
                                >
                                    <template
                                        v-slot:openDialog="{
                                            on,
                                            attrs,
                                            dateRangeText
                                        }"
                                    >
                                        <v-text-field
                                            v-model="filter.date_range"
                                            :value="dateRangeText"
                                            label="Request Date"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                        ></v-text-field>
                                    </template>
                                </XDateRangePicker>
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-menu>
            </template>
        </page-header>

        <!-- Search results info -->
        <div class="my-3">
            <v-chip
                v-if="filter.date_range"
                label
                close
                outlined
                small
                close-icon="mdi-update"
                @click:close="resetDates"
            >
                {{ `${filter.date_range[0]} ~ ${filter.date_range[1]}` }}
            </v-chip>
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
                v-if="filter.status != 'Unread'"
                close
                label
                outlined
                small
                @click:close="filter.status = 'Unread'"
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
                    <template v-slot:[`item.status`]="{ item }">
                        <v-chip
                            small
                            :color="item.read_at ? 'green' : 'red'"
                            :text-color="'white'"
                        >
                            {{ item.read_at ? "Read" : "Unread" }}
                        </v-chip>
                    </template>
                    <template v-slot:[`item.action`]="{ item }">
                        <v-btn text @click="onShow(item)">View</v-btn>
                        <!-- <router-link
                            :to="
                                `/${item.data.data.model}/${item.data.data.id}`
                            "
                        >
                            View Details
                        </router-link> -->
                    </template>
                    <template v-slot:[`item.created_at`]="{ item }">
                        {{
                            item.created_at | moment("MMMM DD, YYYY hh:mm:ss A")
                        }}
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
        <!-- End of DataTable -->
    </div>
</template>

<script>
import moment from "moment";
import NotificationDataService from "../../services/NotificationDataService";
import XDateRangePicker from "../../components/X-DateRangePicker.vue";

export default {
    components: {
        XDateRangePicker
    },
    data() {
        return {
            actions: [
                { text: "Refresh", action: "refresh", icon: "mdi-refresh" },
                {
                    text: "Mark All as Read",
                    action: "mark_all_read",
                    icon: "mdi-restore"
                },
                {
                    text: "Mark as Read",
                    action: "mark_read",
                    icon: "mdi-restore"
                },
                {
                    text: "Mark as Unread",
                    action: "mark_unread",
                    icon: "mdi-restore"
                }
            ],
            filter: {
                status: "Unread",
                statuses: ["Unread", "Read", "All"],
                date_range: [
                    moment()
                        .startOf("month")
                        .format("YYYY-MM-DD"),
                    moment()
                        .endOf("month")
                        .format("YYYY-MM-DD")
                ]
            },

            tableOptions: {
                options: {
                    sortBy: ["created_at"],
                    sortDesc: [false],
                    page: 1,
                    itemsPerPage: 10
                },
                loading: false,
                itemsPerPageOptions: [10, 20, 50, 100],
                serverItemsLength: 0,
                headers: [
                    { text: "Date", value: "created_at" },
                    { text: "User", value: "data.data.user.name" },
                    { text: "Description", value: "data.data.description" },
                    { text: "Code", value: "data.data.code" },
                    { text: "Status", value: "status", sortable: false },
                    { text: "Action", value: "action", sortable: false }
                ]
            },
            items: [],
            selectedItems: []
        };
    },
    methods: {
        updateDateRange(e) {
            this.filter.date_range = e;
        },
        resetDates() {
            this.filter.date_range = [
                moment()
                    .startOf("month")
                    .format("YYYY-MM-DD"),
                moment()
                    .endOf("month")
                    .format("YYYY-MM-DD")
            ];
        },
        async onShow(item) {
            if (!item.read_at) {
                await NotificationDataService.mark_read({ ids: [item.id] });
            }

            this.$router.push(`/${item.data.data.model}/${item.data.data.id}`);
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
                let status = this.filter.status;
                let date_range = this.filter.date_range;

                let data = {
                    params: {
                        sortBy: sortBy[0],
                        sortType: sortDesc[0] ? "desc" : "asc",
                        page: page,
                        itemsPerPage: itemsPerPage,
                        status: status,
                        start_date: date_range[0],
                        end_date: date_range[1]
                    }
                };

                NotificationDataService.getAll(data)
                    .then(response => {
                        this.items = response.data.data;
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
                    this.selectedItems = [];
                    this.getData();
                    break;
                case "mark_read":
                    this.onMarkRead();
                    break;
                case "mark_unread":
                    this.onMarkUnread();
                    break;
                case "mark_all_read":
                    this.onMarkAllRead();
                    break;
                default:
                    alert("Error: Action not identified");
                    break;
            }
        },
        onMarkRead() {
            if (!this.selectedItems.length) {
                alert("No data selected.");
                return;
            }

            if (!confirm("WARNING: Do you want to mark read selected items?")) {
                return;
            }

            let data = {
                // params: {
                ids: this.selectedItems.map(item => item.id)
                // }
            };

            NotificationDataService.mark_read(data)
                .then(response => {
                    this.getData();
                    this.selectedItems = [];
                })
                .catch(error => {
                    console.log(error);
                    alert("An error has occurred.");
                });
        },
        onMarkUnread: function() {
            if (!this.selectedItems.length) {
                alert("No data selected.");
                return;
            }

            if (
                !confirm("WARNING: Do you want to mark unread selected items?")
            ) {
                return;
            }

            let data = {
                // params: {
                ids: this.selectedItems.map(item => item.id)
                // }
            };

            NotificationDataService.mark_unread(data)
                .then(response => {
                    this.getData();
                    this.selectedItems = [];
                })
                .catch(error => {
                    console.log(error);
                    alert("An error has occurred.");
                });
        },
        onMarkAllRead: function() {
            if (!confirm("WARNING: Do you want to mark all as read?")) {
                return;
            }

            let data = {
                ids: this.selectedItems.map(item => item.id),
                type: "all"
            };

            NotificationDataService.mark_read(data)
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
            this.selectedItems = [];
            this.filter.status = "Unread";
            this.tableOptions.options = {
                sortBy: ["created_at"],
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
                query: this.filter.date_range,
                query: this.filter.status
            };
        },
        hasFilters() {
            if (this.filter.status != "Unread") {
                return true;
            }

            if (this.selectedItems.length) {
                return true;
            }

            return false;
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

<style scoped>
a {
    text-decoration: none;
}
</style>
