<template>
    <div>
        <v-row class="mb-4">
            <v-col class="d-flex justify-start">
                <v-btn icon @click="$router.go(-1)">
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <span class="page-title">Asset Details</span>
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
                        Description
                        <v-spacer></v-spacer>
                        <v-chip>Status</v-chip>
                    </v-card-title>

                    <v-card-text>
                        <v-row align="center" class="mx-0">
                            <v-rating
                                :value="4.5"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="14"
                            ></v-rating>

                            <div class="grey--text ms-4">
                                4.5 (413)
                            </div>
                        </v-row>

                        <div class="my-4 text-subtitle-1">
                            # 32412431234
                        </div>

                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Sit, possimus.
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
                        <v-btn icon title="Update">
                            <v-icon>mdi-file-document-edit-outline</v-icon>
                        </v-btn>

                        <v-btn icon title="Dispose">
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>

                        <v-btn icon title="Checkout">
                            <v-icon>mdi-file-export-outline</v-icon>
                        </v-btn>
                        <v-btn icon title="Create Work Order">
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
                                    <!-- Overview -->
                                    <VueApexCharts
                                        type="donut"
                                        height="300"
                                        :options="options.asset"
                                        :series="series.asset"
                                    ></VueApexCharts>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-text>
                                    <!-- Details -->
                                    <XDataTable
                                        :showSelect="false"
                                        :headers="[
                                            {
                                                text: 'Field',
                                                value: 'text'
                                            },
                                            { text: 'Value', value: 'text' }
                                        ]"
                                        :items="records"
                                    />
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-text>
                                    <!-- Sub-Assets -->
                                    <v-row>
                                        <v-spacer></v-spacer>
                                        <v-col class="d-flex justify-end">
                                            <v-btn icon title="Add New">
                                                <v-icon>mdi-plus</v-icon>
                                            </v-btn>
                                            <v-btn icon title="Update">
                                                <v-icon
                                                    >mdi-square-edit-outline</v-icon
                                                >
                                            </v-btn>
                                            <v-btn icon title="Delete">
                                                <v-icon
                                                    >mdi-delete-outline</v-icon
                                                >
                                            </v-btn>
                                            <v-btn icon title="View Data">
                                                <v-icon>mdi-eye</v-icon>
                                            </v-btn>
                                            <v-menu bottom left>
                                                <template
                                                    v-slot:activator="{
                                                        on,
                                                        attrs
                                                    }"
                                                >
                                                    <v-btn
                                                        icon
                                                        v-bind="attrs"
                                                        v-on="on"
                                                    >
                                                        <v-icon>
                                                            mdi-dots-vertical
                                                        </v-icon>
                                                    </v-btn>
                                                </template>
                                                <v-list>
                                                    <v-list-item
                                                        link
                                                        to="/checkin_requests/create"
                                                    >
                                                        <v-list-item-title>
                                                            Checkin
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item
                                                        link
                                                        to="/checkout_requests/create"
                                                    >
                                                        <v-list-item-title>
                                                            Checkout
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item
                                                        link
                                                        @click="
                                                            dialogCategory = true
                                                        "
                                                    >
                                                        <v-list-item-title>
                                                            Category Filter
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item
                                                        link
                                                        @click="
                                                            dialogStatus = true
                                                        "
                                                    >
                                                        <v-list-item-title>
                                                            Status Filter
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item
                                                        link
                                                        @click="
                                                            dialogManufacturer = true
                                                        "
                                                    >
                                                        <v-list-item-title>
                                                            Manufacturer Filter
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                </v-list>
                                            </v-menu>
                                        </v-col>
                                    </v-row>
                                    <XDataTable
                                        :showSelect="true"
                                        :headers="[
                                            {
                                                text: 'Description',
                                                value: 'text'
                                            },
                                            { text: 'Rating', value: 'number' },
                                            { text: 'Category', value: 'text' }
                                        ]"
                                        :items="records"
                                    />
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-text>
                                    <!-- Licenses -->
                                    <v-row>
                                        <v-spacer></v-spacer>
                                        <v-col class="d-flex justify-end">
                                            <v-btn icon title="Add New">
                                                <v-icon>mdi-plus</v-icon>
                                            </v-btn>
                                            <v-btn icon title="Update">
                                                <v-icon
                                                    >mdi-square-edit-outline</v-icon
                                                >
                                            </v-btn>
                                            <v-btn icon title="Delete">
                                                <v-icon
                                                    >mdi-delete-outline</v-icon
                                                >
                                            </v-btn>
                                            <v-btn icon title="View Data">
                                                <v-icon>mdi-eye</v-icon>
                                            </v-btn>
                                            <v-menu bottom left>
                                                <template
                                                    v-slot:activator="{
                                                        on,
                                                        attrs
                                                    }"
                                                >
                                                    <v-btn
                                                        icon
                                                        v-bind="attrs"
                                                        v-on="on"
                                                    >
                                                        <v-icon>
                                                            mdi-dots-vertical
                                                        </v-icon>
                                                    </v-btn>
                                                </template>
                                                <v-list>
                                                    <v-list-item
                                                        link
                                                        @click="
                                                            dialogCategory = true
                                                        "
                                                    >
                                                        <v-list-item-title>
                                                            Category Filter
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item
                                                        link
                                                        @click="
                                                            dialogManufacturer = true
                                                        "
                                                    >
                                                        <v-list-item-title>
                                                            Manufacturer Filter
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                </v-list>
                                            </v-menu>
                                        </v-col>
                                    </v-row>
                                    <XDataTable
                                        :showSelect="true"
                                        :headers="[
                                            {
                                                text: 'Description',
                                                value: 'text'
                                            },
                                            {
                                                text: 'Valid Until',
                                                value: 'date'
                                            },
                                            { text: 'Category', value: 'text' }
                                        ]"
                                        :items="records"
                                    />
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-text>
                                    <!-- Work Orders -->
                                    <v-row>
                                        <v-spacer></v-spacer>
                                        <v-col class="d-flex justify-end">
                                            <v-btn icon title="Add New">
                                                <v-icon>mdi-plus</v-icon>
                                            </v-btn>
                                            <v-btn icon title="Update">
                                                <v-icon
                                                    >mdi-square-edit-outline</v-icon
                                                >
                                            </v-btn>
                                            <v-btn icon title="Delete">
                                                <v-icon
                                                    >mdi-delete-outline</v-icon
                                                >
                                            </v-btn>
                                            <v-btn icon title="View Data">
                                                <v-icon>mdi-eye</v-icon>
                                            </v-btn>
                                            <v-menu bottom left>
                                                <template
                                                    v-slot:activator="{
                                                        on,
                                                        attrs
                                                    }"
                                                >
                                                    <v-btn
                                                        icon
                                                        v-bind="attrs"
                                                        v-on="on"
                                                    >
                                                        <v-icon>
                                                            mdi-dots-vertical
                                                        </v-icon>
                                                    </v-btn>
                                                </template>
                                                <v-list>
                                                    <v-list-item
                                                        link
                                                        @click="
                                                            dialogType = true
                                                        "
                                                    >
                                                        <v-list-item-title>
                                                            Type Filter
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item
                                                        link
                                                        @click="
                                                            dialogStatus = true
                                                        "
                                                    >
                                                        <v-list-item-title>
                                                            Status Filter
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                </v-list>
                                            </v-menu>
                                        </v-col>
                                    </v-row>
                                    <XDataTable
                                        :showSelect="true"
                                        :headers="[
                                            {
                                                text: 'Date',
                                                value: 'date'
                                            },
                                            {
                                                text: 'Work Order No.',
                                                value: 'number'
                                            },
                                            { text: 'Type', value: 'text' },
                                            { text: 'Status', value: 'text' }
                                        ]"
                                        :items="records"
                                    />
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-text>
                                    <!-- Evaluation -->
                                    <v-row>
                                        <v-spacer></v-spacer>
                                        <v-col class="d-flex justify-end">
                                            <v-btn icon title="Add New">
                                                <v-icon>mdi-plus</v-icon>
                                            </v-btn>
                                            <v-btn icon title="Update">
                                                <v-icon
                                                    >mdi-square-edit-outline</v-icon
                                                >
                                            </v-btn>
                                            <v-btn icon title="Delete">
                                                <v-icon
                                                    >mdi-delete-outline</v-icon
                                                >
                                            </v-btn>
                                            <v-btn icon title="View Data">
                                                <v-icon>mdi-eye</v-icon>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                    <XDataTable
                                        :showSelect="true"
                                        :headers="[
                                            {
                                                text: 'Description',
                                                value: 'text'
                                            },
                                            {
                                                text: 'Rating',
                                                value: 'number'
                                            }
                                        ]"
                                        :items="records"
                                    />
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-text>
                                    <!-- System Activity Logs -->
                                    <XDataTable
                                        :showSelect="true"
                                        :headers="[
                                            {
                                                text: 'Date',
                                                value: 'date'
                                            },
                                            {
                                                text: 'Activity',
                                                value: 'text'
                                            }
                                        ]"
                                        :items="records"
                                    />
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-text>
                                    <!-- Attachments -->
                                    <v-row>
                                        <v-spacer></v-spacer>
                                        <v-col class="d-flex justify-end">
                                            <v-btn icon title="Add New">
                                                <v-icon>mdi-plus</v-icon>
                                            </v-btn>
                                            <v-btn icon title="Update">
                                                <v-icon
                                                    >mdi-square-edit-outline</v-icon
                                                >
                                            </v-btn>
                                            <v-btn icon title="Delete">
                                                <v-icon
                                                    >mdi-delete-outline</v-icon
                                                >
                                            </v-btn>
                                            <v-btn icon title="View Data">
                                                <v-icon>mdi-eye</v-icon>
                                            </v-btn>
                                            <v-menu bottom left>
                                                <template
                                                    v-slot:activator="{
                                                        on,
                                                        attrs
                                                    }"
                                                >
                                                    <v-btn
                                                        icon
                                                        v-bind="attrs"
                                                        v-on="on"
                                                    >
                                                        <v-icon>
                                                            mdi-dots-vertical
                                                        </v-icon>
                                                    </v-btn>
                                                </template>
                                                <v-list>
                                                    <v-list-item
                                                        link
                                                        @click="
                                                            dialogCategory = true
                                                        "
                                                    >
                                                        <v-list-item-title>
                                                            Category Filter
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                </v-list>
                                            </v-menu>
                                        </v-col>
                                    </v-row>
                                    <XDataTable
                                        :showSelect="true"
                                        :headers="[
                                            {
                                                text: 'Description',
                                                value: 'text'
                                            },
                                            {
                                                text: 'File Type',
                                                value: 'text'
                                            }
                                        ]"
                                        :items="records"
                                    />
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs-items>
                </v-card>
            </v-col>
        </v-row>

        <XDialog
            :dialog="dialogCategory"
            :title="'Category'"
            @close-dialog="dialogCategory = false"
        />

        <XDialog
            :dialog="dialogStatus"
            :title="'Status'"
            @close-dialog="dialogStatus = false"
        />

        <XDialog
            :dialog="dialogType"
            :title="'Type'"
            @close-dialog="dialogType = false"
        />

        <XDialog
            :dialog="dialogManufacturer"
            :title="'Manufacturer'"
            @close-dialog="dialogManufacturer = false"
        />
    </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import XDataTable from "../../components/X-DataTable.vue";
import XDialog from "../../components/X-Dialog.vue";

export default {
    components: {
        VueApexCharts,
        XDataTable,
        XDialog
    },
    data() {
        return {
            dialogCategory: false,
            dialogStatus: false,
            dialogType: false,
            dialogManufacturer: false,
            tab: null,
            series: {
                asset: [44, 55, 41, 17]
            },
            options: {
                asset: {
                    labels: [
                        "Repair",
                        "Preventive Maintenance",
                        "Corrective Maintenance",
                        "Others"
                    ]
                }
            },
            items: [
                "overview",
                "details",
                "sub-assets",
                "licenses",
                // "consumables",
                "work orders",
                "evaluation",
                "system activity logs",
                "attachments"
            ],
            records: [
                {
                    id: 1,
                    text: "Data 1",
                    number: 159,
                    date: "2021-12-31",
                    boolean: "true"
                },
                {
                    id: 2,
                    text: "Data 1",
                    number: 159,
                    date: "2021-12-31",
                    boolean: "true"
                },
                {
                    id: 3,
                    text: "Data 1",
                    number: 159,
                    date: "2021-12-31",
                    boolean: "true"
                },
                {
                    id: 4,
                    text: "Data 1",
                    number: 159,
                    date: "2021-12-31",
                    boolean: "true"
                },
                {
                    id: 5,
                    text: "Data 1",
                    number: 159,
                    date: "2021-12-31",
                    boolean: "true"
                }
            ]
        };
    }
};
</script>
