<template>
    <div>
        <page-header
            class="mb-4"
            :title="'License Details'"
            :backButton="true"
        ></page-header>

        <v-row>
            <v-col cols="12" md="4">
                <CardSummary
                    :title="form.description"
                    :subtitle="'# ' + form.code"
                >
                    <template v-slot:body>
                        <p>Serial No.: {{ form.serial_no }}</p>
                        <p>Manufacturer: {{ form.manufacturer.name }}</p>
                    </template>
                    <template v-slot:actions>
                        <v-btn
                            icon
                            @click="
                                $router.push(
                                    '/licenses/' + $route.params.id + '/edit'
                                )
                            "
                        >
                            <v-icon>
                                mdi-file-document-edit-outline
                            </v-icon>
                        </v-btn>
                        <v-btn icon @click="onDelete">
                            <v-icon>
                                mdi-delete
                            </v-icon>
                        </v-btn>
                    </template>
                </CardSummary>
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
                                        License Name
                                    </div>

                                    <div class="my-4">
                                        <VueApexCharts
                                            type="donut"
                                            height="300"
                                            :options="options.license"
                                            :series="series.license"
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
                                                    v-for="(value,
                                                    name,
                                                    index) in form"
                                                    :key="index"
                                                >
                                                    <td>{{ name }}</td>
                                                    <td>{{ value }}</td>
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
import CardSummary from "../../components/pages/CardSummary.vue";
import LicenseDataService from "../../services/LicenseDataService";

export default {
    components: {
        VueApexCharts,
        CardSummary
    },
    data() {
        return {
            tab: null,
            items: ["overview", "details", "licenses", "System Activity Logs"],
            series: {
                license: [44, 55, 41, 17]
            },
            options: {
                license: {
                    labels: [
                        "In Storage",
                        "In Use",
                        "In Maintenance",
                        "Disposed"
                    ]
                }
            },
            records: [],
            form: {
                code: "",
                slug: "",
                reference_no: "",
                license_tag: "",
                serial_no: "",
                description: "",
                purchased_date: "",
                purchased_cost: "",
                warranty_start_date: "",
                warranty_end_date: "",
                sku: "",
                quantity: "",
                notes: "",
                asset_model_id: "",
                supplier_id: "",
                manufacturer_id: "",
                asset_category_id: "",
                assigned_user_id: "",
                assigned_location_id: "",
                assigned_asset_id: ""
            }
        };
    },
    methods: {
        getData() {
            let data = {};

            LicenseDataService.show(this.$route.params.id, data)
                .then(response => {
                    this.form = { ...this.form, ...response.data.data };
                })
                .catch(error => {
                    console.log(error);
                    alert("An error has occurred.");
                    this.$router.push({ name: "licenses.index" }, () => {});
                });
        },
        onDelete() {
            if (!confirm("WARNING: Do you want to delete this record?")) {
                return;
            }

            LicenseDataService.delete(this.$route.params.id, {})
                .then(response => {
                    alert(response.data.message);
                    this.$router.push({ name: "licenses.index" });
                })
                .catch(error => {
                    console.log(error);
                    alert("An error has occurred.");
                });
        }
    },
    created() {
        this.getData();
    }
};
</script>
