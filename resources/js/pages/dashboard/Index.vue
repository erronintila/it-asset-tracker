<template>
    <div>
        <loading-screen></loading-screen>
        <v-row>
            <v-col class="d-flex align-center">
                <div class="page-title d-inline">
                    Dashboard
                </div>
            </v-col>
            <v-spacer></v-spacer>
            <!-- <v-col class="d-flex align-center justify-end">
                <v-btn icon title="Clear Filters">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-menu bottom left>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on" title="Filter">
                            <v-icon>mdi-clipboard-search-outline</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item link @click="dialogAccount = true">
                            <v-list-item-title>
                                Account
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item link>
                            <v-list-item-title>
                                Date Range
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-col> -->
        </v-row>

        <v-row class="hidden-sm-and-down mb-2">
            <v-col class="d-flex align-center">
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
                        <small class="text--secondary" v-bind="attrs" v-on="on">
                            {{ dateRangeText }}
                        </small>
                        <!-- <v-text-field
                            v-model="filter.date_range"
                            :value="dateRangeText"
                            label="Request Date"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field> -->
                    </template>
                </XDateRangePicker>

                <small class="mx-4">|</small>

                <small class="text--secondary">
                    {{
                        form.assigned_user
                            ? form.assigned_user.full_name
                            : "All Accounts"
                    }}
                </small>

                <v-btn icon title="Refresh" @click="onRefresh">
                    <v-icon>
                        mdi-refresh
                    </v-icon>
                </v-btn>

                <EmployeeDialogSelector
                    :selected="
                        !form.assigned_user ? [] : [...form.assigned_user]
                    "
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

                <CustomerDialogSelector
                    :selected="
                        !form.assigned_user ? [] : [...form.assigned_user]
                    "
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
                            title="Select Customer"
                        >
                            <v-icon>
                                mdi-card-account-details-outline
                            </v-icon>
                        </v-btn>
                    </template>
                </CustomerDialogSelector>
            </v-col>
        </v-row>

        <!-- <XDialog
            :dialog="dialogCategory"
            :title="'Category'"
            @close-dialog="dialogCategory = false"
        ></XDialog> -->

        <!-- <XDialog
            :dialog="dialogAccount"
            :title="'Account'"
            @close-dialog="dialogAccount = false"
        ></XDialog> -->

        <!-- <XDialog
            :dialog="dialogManufacturer"
            :title="'Manufacturer'"
            @close-dialog="dialogManufacturer = false"
        ></XDialog> -->

        <v-row>
            <v-col cols="12" md="3">
                <v-hover v-slot="{ hover }" open-delay="30">
                    <v-card
                        :elevation="hover ? 10 : 3"
                        :class="{ 'on-hover': hover }"
                        class="rounded-lg"
                    >
                        <v-list-item three-line to="/assets">
                            <v-list-item-content>
                                <div :class="'header-title'">
                                    Total Active Assets
                                </div>
                                <div :class="'header-body'">
                                    {{ assets.total }}
                                </div>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </v-hover>
            </v-col>

            <v-col cols="12" md="3">
                <v-hover v-slot="{ hover }" open-delay="30">
                    <v-card
                        :elevation="hover ? 10 : 3"
                        :class="{ 'on-hover': hover }"
                        class="rounded-lg"
                    >
                        <v-list-item three-line to="/work_orders">
                            <v-list-item-content>
                                <div :class="'header-title'">
                                    Completed Work Orders
                                </div>
                                <div :class="'header-body'">
                                    {{ work_orders.completed }}
                                </div>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </v-hover>
            </v-col>

            <v-col cols="12" md="3">
                <v-hover v-slot="{ hover }" open-delay="30">
                    <v-card
                        :elevation="hover ? 10 : 3"
                        :class="{ 'on-hover': hover }"
                        class="rounded-lg"
                    >
                        <v-list-item three-line to="/work_orders">
                            <v-list-item-content>
                                <div :class="'header-title'">
                                    Pending Work Orders
                                </div>
                                <div :class="'header-body'">
                                    {{ work_orders.pending }}
                                </div>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </v-hover>
            </v-col>

            <v-col cols="12" md="3">
                <v-hover v-slot="{ hover }" open-delay="30">
                    <v-card
                        :elevation="hover ? 10 : 3"
                        :class="{ 'on-hover': hover }"
                        class="rounded-lg"
                    >
                        <v-list-item three-line to="/schedules">
                            <v-list-item-content>
                                <div :class="'header-title'">
                                    Scheduled Work Orders
                                </div>
                                <div :class="'header-body'">
                                    {{ work_orders.scheduled }}
                                </div>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" md="4">
                <v-hover v-slot="{ hover }" open-delay="30">
                    <v-card
                        :elevation="hover ? 10 : 3"
                        :class="{ 'on-hover': hover }"
                        class="rounded-lg"
                        height="25rem"
                    >
                        <v-card-title class="d-flex justify-space-between">
                            <div class="page-title">
                                Assets by Status
                            </div>
                            <!-- <v-menu bottom left>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn icon v-bind="attrs" v-on="on">
                                        <v-icon>
                                            mdi-dots-vertical
                                        </v-icon>
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item
                                        link
                                        @click="dialogCategory = true"
                                    >
                                        <v-list-item-title>
                                            Category
                                        </v-list-item-title>
                                    </v-list-item>
                                    <v-list-item
                                        link
                                        @click="dialogManufacturer = true"
                                    >
                                        <v-list-item-title>
                                            Manufacturer
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu> -->
                        </v-card-title>
                        <v-card-text>
                            <div>
                                <VueApexCharts
                                    ref="assetChart"
                                    type="donut"
                                    height="300"
                                    :options="options.asset"
                                    :series="series.asset"
                                ></VueApexCharts>
                            </div>

                            <!-- <div class="mt-2">
                                <small>All Categories</small>
                                <small>|</small>
                                <small>All Manufacturers</small>
                            </div> -->
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-col>
            <v-col cols="12" md="8">
                <v-hover v-slot="{ hover }" open-delay="30">
                    <v-card
                        :elevation="hover ? 10 : 3"
                        :class="{ 'on-hover': hover }"
                        class="rounded-lg"
                        height="25rem"
                    >
                        <v-card-title>
                            <div class="page-title">
                                Work Order History
                            </div>
                        </v-card-title>
                        <v-card-text>
                            <div>
                                <VueApexCharts
                                    ref="workOrderChart"
                                    type="bar"
                                    height="300"
                                    :options="options.work_order"
                                    :series="work_order_series"
                                ></VueApexCharts>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-hover v-slot="{ hover }" open-delay="30">
                    <v-card
                        :elevation="hover ? 10 : 3"
                        :class="{ 'on-hover': hover }"
                        class="rounded-lg"
                    >
                        <v-card-title class="d-flex justify-space-between">
                            <div class="page-title">
                                Recent Activity
                            </div>
                            <div>
                                <v-menu bottom left>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn icon v-bind="attrs" v-on="on">
                                            <v-icon>mdi-dots-vertical</v-icon>
                                        </v-btn>
                                    </template>

                                    <v-list>
                                        <v-list-item
                                            link
                                            @click="
                                                $router.push({
                                                    name:
                                                        'reports.activity_logs.index'
                                                })
                                            "
                                        >
                                            <v-list-item-title>
                                                View All
                                            </v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </div>
                        </v-card-title>
                        <v-card-text>
                            <v-data-table
                                :headers="headers.activity"
                                :items="activities"
                                :loading="activityTableOptions.loading"
                                :options.sync="activityTableOptions.options"
                                :server-items-length="
                                    activityTableOptions.serverItemsLength
                                "
                                :footer-props="{
                                    itemsPerPageOptions:
                                        activityTableOptions.itemsPerPageOptions
                                }"
                            >
                                <template v-slot:[`item.action`]="{ item }">
                                    <router-link
                                        :to="`/${item.properties.custom.link}`"
                                    >
                                        View Details
                                    </router-link>
                                </template>
                                <template v-slot:[`item.created_at`]="{ item }">
                                    {{ item.created_at | moment("LLLL") }}
                                </template>
                            </v-data-table>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";
import VueApexCharts from "vue-apexcharts";
import XDialog from "../../components/X-Dialog.vue";
import DashboardDataService from "../../services/DashboardDataService";
import ActivityLogDataService from "../../services/ActivityLogDataService";
import XDateRangePicker from "../../components/X-DateRangePicker.vue";
import CustomerDialogSelector from "../../components/selectors/CustomerDialogSelector.vue";
import EmployeeDialogSelector from "../../components/selectors/EmployeeDialogSelector.vue";

export default {
    name: "dashboard",
    components: {
        VueApexCharts,
        XDialog,
        XDateRangePicker,
        CustomerDialogSelector,
        EmployeeDialogSelector
    },
    data() {
        return {
            dialogAccount: false,
            dialogCategory: false,
            dialogManufacturer: false,
            tableSelected: [],
            form: {
                assigned_user: null
            },
            filter: {
                date_range: [
                    moment()
                        .startOf("year")
                        .format("YYYY-MM-DD"),
                    moment()
                        .endOf("year")
                        .format("YYYY-MM-DD")
                ]
            },
            assets: {
                total: 0,
                status: {
                    pending: 0,
                    in_storage: 0,
                    in_maintenance: 0,
                    in_use: 0
                }
            },
            work_orders: {
                categories: [4, 4, 4, 4],
                completed: 0,
                pending: 0,
                scheduled: 0
            },
            options: {
                asset: {
                    labels: [
                        "Pending",
                        "In Use",
                        "In Storage",
                        "In Maintenance"
                    ],
                    legend: {
                        show: false
                    }
                },
                work_order: {
                    chart: {
                        type: "bar",
                        toolbar: {
                            show: false
                        }
                    },
                    colors: [
                        "#2E93fA",
                        "#546E7A",
                        "#66DA26",
                        "#E91E63",
                        "#FF9800"
                    ],
                    plotOptions: {
                        bar: {
                            borderRadius: 8,
                            horizontal: true
                        }
                    },
                    xaxis: {
                        categories: []
                    }
                }
            },
            headers: {
                activity: [
                    { text: "Date", value: "created_at" },
                    { text: "Description", value: "description" },
                    { text: "Action", value: "action" }
                ]
            },

            activityTableOptions: {
                options: {
                    sortBy: ["created_at"],
                    sortDesc: [false],
                    page: 1,
                    itemsPerPage: 5
                },
                loading: false,
                itemsPerPageOptions: [5, 10],
                serverItemsLength: 0,
                headers: [
                    { text: "Date", value: "created_at" },
                    { text: "Description", value: "description" },
                    { text: "Action", value: "action" }
                ]
            },
            activities: [],
            work_order_series: [
                {
                    data: []
                }
            ]
        };
    },
    methods: {
        onSelectUser(e) {
            if (e == null || e == undefined) {
                this.form.assigned_user = null;
                return;
            }

            this.form.assigned_user = e[0];
            this.getData();
        },
        updateDateRange(e) {
            this.filter.date_range = e;
            this.getData();
        },
        onRefresh() {
            this.form.assigned_user = null;
            this.getData();
        },
        async getData() {
            try {
                let data = {
                    params: {
                        user_id: this.form.assigned_user?.id,
                        start_date: this.filter.date_range[0],
                        end_date: this.filter.date_range[1]
                    }
                };

                await DashboardDataService.getAll(data).then(response => {
                    const { assets, work_orders } = response.data.data;
                    console.log(response);

                    this.assets = { ...assets };
                    this.work_orders = { ...work_orders };

                    this.series.asset = Object.values(assets.status);

                    this.options.work_order = {
                        ...this.options.work_order,
                        ...{
                            xaxis: {
                                categories: work_orders.categories.map(
                                    item => item.name
                                )
                            }
                        }
                    };

                    // console.log(work_orders.categories.map(item => item.total));

                    this.$refs.workOrderChart.updateSeries(
                        [
                            {
                                data: work_orders.categories.map(
                                    item => item.total
                                )
                            }
                        ],
                        false,
                        true
                    );
                });
            } catch (error) {
                console.log(error);
                console.log("error");
                // console.log(error.response);
            }
        },
        async getActivityLogs() {
            this.activityTableOptions.loading = true;
            const {
                sortBy,
                sortDesc,
                page,
                itemsPerPage
            } = this.activityTableOptions.options;

            let data = {
                params: {
                    sortBy: sortBy[0],
                    sortType: sortDesc[0] ? "desc" : "asc",
                    page: page,
                    itemsPerPage: itemsPerPage
                }
            };

            try {
                await ActivityLogDataService.getAll(data).then(response => {
                    this.activities = response.data.data.data;
                    this.activityTableOptions.serverItemsLength =
                        response.data.data.total;
                    this.activityTableOptions.loading = false;
                });
            } catch (error) {
                // console.log(error);
                console.log(error.response);
            }
        }
    },
    computed: {
        ...mapGetters({
            user: "auth/user"
        }),
        params(nv) {
            return {
                ...this.activityTableOptions.options,
                query: this.form.assigned_user,
                query: this.filter.date_range
            };
        },
        dateRangeText() {
            return this.dates.join(" ~ ");
        },
        assetSummary() {
            return this.assets.total;
            return {
                total: this.assets ? this.assets.total : 0
            };
        },
        series() {
            return {
                asset: this.assets
                    ? Object.values(this.assets.status)
                    : [0, 0, 0, 0]
            };
        }
    },
    watch: {
        params: {
            immediate: true,
            deep: true,
            handler() {
                this.getActivityLogs();
            }
        }
    },
    mounted() {
        this.getData();
        this.getActivityLogs();
    }
};
</script>

<style scoped>
.header-title {
    font-size: 1rem;
    font-weight: 100;
}

.header-body {
    font-size: 2rem;
    font-weight: 100;
}

a {
    text-decoration: none;
}
</style>
