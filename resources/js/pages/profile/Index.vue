<template>
    <div>
        <page-header class="mb-4" :title="'Profile'"></page-header>

        <v-row>
            <v-col cols="12" md="4">
                <CardSummary
                    v-if="user"
                    :title="user.full_name"
                    :subtitle="user.profile ? '# ' + user.profile.code : ''"
                >
                    <template v-slot:body>
                        <p>
                            Phone:
                            {{
                                user.profile
                                    ? user.profile.business_phone ||
                                      user.profile.home_phone ||
                                      user.profile.mobile_phone
                                    : ""
                            }}
                        </p>
                        <p v-if="user.email">Email: {{ user.email }}</p>
                        <p v-if="user.profile">
                            Address: {{ user.profile.address }},
                            {{ user.profile.city }},
                            {{ user.profile.province }},
                            {{ user.profile.postal_code }},
                            {{ user.profile.country }}
                        </p>

                        <p>
                            Last Updated: {{ user.updated_at | moment("LLLL") }}
                        </p>
                    </template>
                    <template v-slot:actions>
                        <div v-if="user.type == 'employee'">
                            <v-btn
                                icon
                                title="Edit Information"
                                :to="`/employees/${user.id}/edit`"
                            >
                                <v-icon>mdi-file-document-edit-outline</v-icon>
                            </v-btn>

                            <ChangePassword>
                                <template
                                    v-slot:openDialog="{
                                        attrs,
                                        on
                                    }"
                                >
                                    <v-btn
                                        icon
                                        title="Change Password"
                                        v-bind="attrs"
                                        v-on="on"
                                    >
                                        <v-icon>mdi-lock-reset</v-icon>
                                    </v-btn>
                                </template>
                            </ChangePassword>

                            <v-btn
                                icon
                                title="Create Work Order"
                                to="/work_orders/create"
                            >
                                <v-icon>mdi-text-box-plus-outline</v-icon>
                            </v-btn>
                        </div>

                        <div v-else>
                            <ChangePassword>
                                <template
                                    v-slot:openDialog="{
                                        attrs,
                                        on
                                    }"
                                >
                                    <v-btn
                                        icon
                                        title="Change Password"
                                        v-bind="attrs"
                                        v-on="on"
                                    >
                                        <v-icon>mdi-lock-reset</v-icon>
                                    </v-btn>
                                </template>
                            </ChangePassword>

                            <v-btn
                                icon
                                title="Create Work Order"
                                to="/work_orders/create"
                            >
                                <v-icon>mdi-text-box-plus-outline</v-icon>
                            </v-btn>
                        </div>
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
                                                <!-- <tr
                                                    v-for="(value,
                                                    name,
                                                    index) in form"
                                                    :key="index"
                                                >
                                                    <td>{{ name }}</td>
                                                    <td>{{ value }}</td>
                                                </tr> -->
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
import ChangePassword from "./ChangePassword.vue";
import { mapGetters } from "vuex";

export default {
    name: "profile.index",
    components: {
        VueApexCharts,
        CardSummary,
        ChangePassword
    },
    data() {
        return {
            tab: null,
            items: [
                "overview",
                "details",
                "assets",
                "work orders",
                "system activity logs"
            ],
            records: [],
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
            }
        };
    },
    computed: {
        ...mapGetters({
            user: "auth/user" ?? { profile: null },
            authenticated: "auth/authenticated" ?? null
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
