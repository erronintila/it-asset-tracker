<template>
    <div>
        <v-row class="mb-4">
            <v-col class="d-flex justify-start">
                <v-btn icon @click="$router.go(-1)">
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <span class="page-title">Employee Details</span>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" md="4">
                <v-card>
                    <template slot="progress">
                        <v-progress-linear
                            color="deep-purple"
                            height="10"
                            indeterminate
                        ></v-progress-linear>
                    </template>

                    <v-img
                        height="250"
                        src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
                    ></v-img>

                    <v-card-title>
                        Name
                        <v-spacer></v-spacer>
                        <v-chip>Status</v-chip>
                    </v-card-title>

                    <v-card-text>
                        <v-row align="center" class="mx-0">
                            <div class="grey--text">
                                Department
                            </div>
                        </v-row>

                        <div class="my-4 text-subtitle-1">
                            # Employee code
                        </div>

                        <p>
                            Notes: Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Sit, possimus.
                        </p>

                        <p>
                            Last Updated: 2021-01-01 08:00
                        </p>
                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>

                    <!-- <v-card-title>Tonight's availability</v-card-title> -->

                    <!-- <v-card-text>
                        <v-chip-group
                            active-class="deep-purple accent-4 white--text"
                            column
                        >
                            <v-chip>5:30PM</v-chip>

                            <v-chip>7:30PM</v-chip>

                            <v-chip>8:00PM</v-chip>

                            <v-chip>9:00PM</v-chip>
                        </v-chip-group>
                    </v-card-text> -->

                    <v-card-actions>
                        <v-btn icon>
                            <v-icon>mdi-file-document-edit-outline</v-icon>
                        </v-btn>

                        <v-btn icon>
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>

                        <v-btn icon>
                            <v-icon>mdi-file-export-outline</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>mdi-text-box-plus-outline</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="12" md="8">
                <v-card>
                    <v-tabs v-model="tab" show-arrows>
                        <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
                        <v-tab v-for="item in items" :key="item">
                            {{ item }}
                        </v-tab>
                    </v-tabs>
                    <v-tabs-items v-model="tab">
                        <v-tab-item>
                            <v-card flat>
                                <v-card-text>
                                    <div class="page-title my-4">
                                        Assets
                                    </div>

                                    <div class="my-4">
                                        <VueApexCharts
                                            type="donut"
                                            height="300"
                                            :options="options.asset"
                                            :series="series.asset"
                                        ></VueApexCharts>
                                    </div>

                                    <div class="page-title my-4">
                                        Work Orders
                                    </div>

                                    <v-row class="mx-md-8 my-4">
                                        <v-col cols="12" md="6">
                                            <v-hover
                                                v-slot="{ hover }"
                                                open-delay="30"
                                            >
                                                <v-card
                                                    :elevation="hover ? 10 : 3"
                                                    :class="{
                                                        'on-hover': hover
                                                    }"
                                                    class="rounded-lg"
                                                    to="/work_orders"
                                                    max-height="100"
                                                >
                                                    <v-card-text>
                                                        <v-list-item three-line>
                                                            <v-list-item-content>
                                                                <div
                                                                    class="primary--text"
                                                                >
                                                                    Scheduled
                                                                </div>
                                                                <div
                                                                    class="header-body"
                                                                >
                                                                    100
                                                                </div>
                                                                <div
                                                                    class="body-2"
                                                                ></div>
                                                            </v-list-item-content>
                                                        </v-list-item>
                                                    </v-card-text>
                                                </v-card>
                                            </v-hover>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <v-hover
                                                v-slot="{ hover }"
                                                open-delay="30"
                                            >
                                                <v-card
                                                    :elevation="hover ? 10 : 3"
                                                    :class="{
                                                        'on-hover': hover
                                                    }"
                                                    class="rounded-lg"
                                                    to="/work_orders"
                                                    max-height="100"
                                                >
                                                    <v-card-text>
                                                        <v-list-item three-line>
                                                            <v-list-item-content>
                                                                <div
                                                                    class="red--text"
                                                                >
                                                                    Urgent
                                                                </div>
                                                                <div
                                                                    class="header-body"
                                                                >
                                                                    100
                                                                </div>
                                                                <div
                                                                    class="body-2"
                                                                ></div>
                                                            </v-list-item-content>
                                                        </v-list-item>
                                                    </v-card-text>
                                                </v-card>
                                            </v-hover>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <v-hover
                                                v-slot="{ hover }"
                                                open-delay="30"
                                            >
                                                <v-card
                                                    :elevation="hover ? 10 : 3"
                                                    :class="{
                                                        'on-hover': hover
                                                    }"
                                                    class="rounded-lg"
                                                    to="/work_orders"
                                                    max-height="100"
                                                >
                                                    <v-card-text>
                                                        <v-list-item three-line>
                                                            <v-list-item-content>
                                                                <div
                                                                    class="orange--text"
                                                                >
                                                                    On Going
                                                                </div>
                                                                <div
                                                                    class="header-body"
                                                                >
                                                                    100
                                                                </div>
                                                                <div
                                                                    class="body-2"
                                                                ></div>
                                                            </v-list-item-content>
                                                        </v-list-item>
                                                    </v-card-text>
                                                </v-card>
                                            </v-hover>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <v-hover
                                                v-slot="{ hover }"
                                                open-delay="30"
                                            >
                                                <v-card
                                                    :elevation="hover ? 10 : 3"
                                                    :class="{
                                                        'on-hover': hover
                                                    }"
                                                    class="rounded-lg"
                                                    to="/work_orders"
                                                    max-height="100"
                                                >
                                                    <v-card-text>
                                                        <v-list-item three-line>
                                                            <v-list-item-content>
                                                                <div
                                                                    class="green--text"
                                                                >
                                                                    Completed
                                                                </div>
                                                                <div
                                                                    class="header-body"
                                                                >
                                                                    100
                                                                </div>
                                                                <div
                                                                    class="body-2"
                                                                ></div>
                                                            </v-list-item-content>
                                                        </v-list-item>
                                                    </v-card-text>
                                                </v-card>
                                            </v-hover>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-text>
                                    <v-simple-table>
                                        <template v-slot:default>
                                            <thead>
                                                <tr>
                                                    <th class="text-left">
                                                        Name
                                                    </th>
                                                    <th class="text-left">
                                                        Value
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr
                                                    v-for="item in records"
                                                    :key="item.name"
                                                >
                                                    <td>{{ item.name }}</td>
                                                    <td>{{ item.value }}</td>
                                                </tr>
                                            </tbody>
                                        </template>
                                    </v-simple-table>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-text>
                                    <v-simple-table>
                                        <template v-slot:default>
                                            <thead>
                                                <tr>
                                                    <th class="text-left">
                                                        Name
                                                    </th>
                                                    <th class="text-left">
                                                        Value
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr
                                                    v-for="item in records"
                                                    :key="item.name"
                                                >
                                                    <td>{{ item.name }}</td>
                                                    <td>{{ item.value }}</td>
                                                </tr>
                                            </tbody>
                                        </template>
                                    </v-simple-table>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-text>
                                    <v-simple-table>
                                        <template v-slot:default>
                                            <thead>
                                                <tr>
                                                    <th class="text-left">
                                                        Name
                                                    </th>
                                                    <th class="text-left">
                                                        Value
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr
                                                    v-for="item in records"
                                                    :key="item.name"
                                                >
                                                    <td>{{ item.name }}</td>
                                                    <td>{{ item.value }}</td>
                                                </tr>
                                            </tbody>
                                        </template>
                                    </v-simple-table>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-text>
                                    <v-simple-table>
                                        <template v-slot:default>
                                            <thead>
                                                <tr>
                                                    <th class="text-left">
                                                        Name
                                                    </th>
                                                    <th class="text-left">
                                                        Value
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr
                                                    v-for="item in records"
                                                    :key="item.name"
                                                >
                                                    <td>{{ item.name }}</td>
                                                    <td>{{ item.value }}</td>
                                                </tr>
                                            </tbody>
                                        </template>
                                    </v-simple-table>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-text>
                                    <v-simple-table>
                                        <template v-slot:default>
                                            <thead>
                                                <tr>
                                                    <th class="text-left">
                                                        Name
                                                    </th>
                                                    <th class="text-left">
                                                        Value
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr
                                                    v-for="item in records"
                                                    :key="item.name"
                                                >
                                                    <td>{{ item.name }}</td>
                                                    <td>{{ item.value }}</td>
                                                </tr>
                                            </tbody>
                                        </template>
                                    </v-simple-table>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-text>
                                    <v-simple-table>
                                        <template v-slot:default>
                                            <thead>
                                                <tr>
                                                    <th class="text-left">
                                                        Name
                                                    </th>
                                                    <th class="text-left">
                                                        Value
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr
                                                    v-for="item in records"
                                                    :key="item.name"
                                                >
                                                    <td>{{ item.name }}</td>
                                                    <td>{{ item.value }}</td>
                                                </tr>
                                            </tbody>
                                        </template>
                                    </v-simple-table>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-text>
                                    <v-simple-table>
                                        <template v-slot:default>
                                            <thead>
                                                <tr>
                                                    <th class="text-left">
                                                        Name
                                                    </th>
                                                    <th class="text-left">
                                                        Value
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr
                                                    v-for="item in records"
                                                    :key="item.name"
                                                >
                                                    <td>{{ item.name }}</td>
                                                    <td>{{ item.value }}</td>
                                                </tr>
                                            </tbody>
                                        </template>
                                    </v-simple-table>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs-items>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
    components: {
        VueApexCharts
    },
    data() {
        return {
            tab: null,
            items: [
                "overview",
                "details",
                "assets",
                "Work Orders",
                "System Activity Logs"
            ],
            series: {
                asset: [44, 55, 41, 17]
            },
            options: {
                asset: {
                    labels: [
                        "Personal Computers",
                        "Components",
                        "Accessories",
                        "Licenses"
                    ]
                    // legend: {
                    //     show: false
                    // }
                }
            },
            records: [
                {
                    name: "Data 1",
                    value: 159
                },
                {
                    name: "Data 2",
                    value: 237
                },
                {
                    name: "Data 3",
                    value: 262
                },
                {
                    name: "Data 4",
                    value: 305
                },
                {
                    name: "Data 5",
                    value: 356
                },
                {
                    name: "Data 6",
                    value: 375
                },
                {
                    name: "Data 7",
                    value: 392
                },
                {
                    name: "Data 8",
                    value: 408
                },
                {
                    name: "Data 9",
                    value: 452
                },
                {
                    name: "Data 10",
                    value: 518
                }
            ]
        };
    }
};
</script>
