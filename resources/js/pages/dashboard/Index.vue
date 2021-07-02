<template>
    <div>
        <div class="page-title mb-4">Dashboard</div>

        <v-row>
            <v-col
                cols="12"
                md="3"
                v-for="(item, index) in dashboard.headers"
                :key="index"
            >
                <v-hover v-slot="{ hover }" open-delay="30">
                    <v-card
                        :elevation="hover ? 10 : 3"
                        :class="{ 'on-hover': hover }"
                        class="rounded-lg"
                        :color="item.color"
                        :dark="item.dark"
                    >
                        <v-list-item three-line>
                            <v-list-item-content>
                                <div :class="'header-title ' + item.text_color">
                                    {{ item.title }}
                                </div>
                                <div :class="'header-body ' + item.text_color">
                                    {{ item.body }}
                                </div>
                                <div :class="'body-2 ' + item.text_color">
                                    {{ item.subtitle }}
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
                        <v-card-title>
                            <div class="page-title">
                                Assets by Status
                            </div>
                        </v-card-title>
                        <v-card-text>
                            <div>
                                <VueApexCharts
                                    type="donut"
                                    :options="options.asset"
                                    :series="series.asset"
                                ></VueApexCharts>
                            </div>
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
                                    type="bar"
                                    height="300"
                                    :options="options.work_order"
                                    :series="series.work_order"
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
                                        <v-list-item link>
                                            <v-list-item-title>
                                                Today
                                            </v-list-item-title>
                                        </v-list-item>
                                        <v-list-item link>
                                            <v-list-item-title>
                                                Yesterday
                                            </v-list-item-title>
                                        </v-list-item>
                                        <v-list-item link>
                                            <v-list-item-title>
                                                This Week
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
                                :items-per-page="5"
                                :footer-props="{
                                    itemsPerPageOptions: [5],
                                    showFirstLastPage: true,
                                    firstIcon: 'mdi-page-first',
                                    lastIcon: 'mdi-page-last',
                                    prevIcon: 'mdi-chevron-left',
                                    nextIcon: 'mdi-chevron-right'
                                }"
                            >
                                <template v-slot:[`item.actions`]="{ item }">
                                    <router-link
                                        :to="{
                                            name: '',
                                            params: { id: item.id }
                                        }"
                                    >
                                        More
                                    </router-link>
                                </template>
                            </v-data-table>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>

        <!-- <v-row>
            <v-col>
                <v-hover v-slot="{ hover }" open-delay="30">
                    <v-card
                        :elevation="hover ? 10 : 3"
                        :class="{ 'on-hover': hover }"
                        class="rounded-lg"
                        height="25rem"
                    >
                        <v-list-item three-line>
                            <v-list-item-content>
                                <div class="header-title">
                                    Line Chart
                                </div>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row> -->
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import VueApexCharts from "vue-apexcharts";

export default {
    name: "dashboard",
    components: {
        VueApexCharts
    },
    data() {
        return {
            dashboard: {
                headers: [
                    {
                        title: "Total Assets",
                        subtitle: "",
                        body: "1,000,000.00",
                        color: "white",
                        dark: false,
                        text_color: "black--text"
                    },
                    {
                        title: "Total Work Orders",
                        subtitle: "",
                        body: "100",
                        color: "white",
                        dark: false,
                        text_color: "black--text"
                    },
                    {
                        title: "Pending Work Orders",
                        subtitle: "",
                        body: "100",
                        color: "white",
                        dark: true,
                        text_color: "black--text"
                    },
                    {
                        title: "Scheduled Work Orders",
                        subtitle: "",
                        body: "100",
                        color: "white",
                        dark: false,
                        text_color: "black--text"
                    }
                ]
            },
            series: {
                asset: [44, 55, 41, 17],
                work_order: [
                    {
                        data: [1380, 430, 540, 1100]
                    }
                ]
            },
            options: {
                asset: {
                    labels: [
                        "In Storage",
                        "In Use",
                        "In Maintenance",
                        "Disposed"
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
                        "#66DA26",
                        "#546E7A",
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
                        categories: [
                            "Installation",
                            "Preventive Maintenance",
                            "Corrective Maintenance",
                            "Repair"
                        ]
                    }
                }
            },
            headers: {
                activity: [
                    {
                        text: "Date",
                        align: "start",
                        value: "date"
                    },
                    { text: "User", value: "user" },
                    { text: "Activity", value: "activity" },
                    { text: "", value: "actions" }
                ]
            },
            activities: [
                {
                    id: 1,
                    date: "2021-01-01 11:30",
                    user: "Erron Intila",
                    activity: "Cancelled work order #00201"
                },
                {
                    id: 2,
                    date: "2021-01-01 10:30",
                    user: "Erron Intila",
                    activity: "Created work order #00201"
                },
                {
                    id: 3,
                    date: "2021-01-01 10:00",
                    user: "Erron Intila",
                    activity: "Updated account"
                },
                {
                    id: 4,
                    date: "2021-01-01 09:30",
                    user: "Erron Intila",
                    activity: "Deleted asset"
                },
                {
                    id: 5,
                    date: "2021-01-01 08:30",
                    user: "Erron Intila",
                    activity: "Created Asset"
                }
            ]
        };
    },
    computed: {
        ...mapGetters({
            user: "auth/user"
        })
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
