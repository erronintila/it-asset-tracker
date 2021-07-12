<template>
    <div>
        <page-header
            class="mb-4"
            :title="'Location Details'"
            :backButton="true"
        ></page-header>

        <v-row>
            <v-col cols="12">
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
                                        Location Name
                                    </div>

                                    <div class="my-4">
                                        <VueApexCharts
                                            type="donut"
                                            height="300"
                                            :options="options.asset"
                                            :series="series.asset"
                                        ></VueApexCharts>
                                    </div>
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
            items: ["overview", "details", "assets", "System Activity Logs"],
            series: {
                asset: [44, 55, 41, 17]
            },
            options: {
                asset: {
                    labels: [
                        "In Storage",
                        "In Use",
                        "In Maintenance",
                        "Disposed"
                    ]
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
