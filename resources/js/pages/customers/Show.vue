<template>
    <div>
        <page-header
            class="mb-4"
            :title="'Customer Details'"
            :backButton="true"
        ></page-header>

        <v-row>
            <v-col cols="12" md="4">
                <CardSummary
                    :title="form.name"
                    :subtitle="'# ' + form.profile.code"
                >
                    <template v-slot:body>
                        <p>Phone: {{ form.profile.business_phone }}</p>
                        <p v-if="form.email">Email: {{ form.email }}</p>
                        <p>
                            Address: {{ form.profile.address }},
                            {{ form.profile.city }},
                            {{ form.profile.province }},
                            {{ form.profile.postal_code }},
                            {{ form.profile.country }}
                        </p>
                    </template>
                    <template v-slot:actions>
                        <v-btn
                            icon
                            @click="
                                $router.push(
                                    '/customers/' + $route.params.id + '/edit'
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
                                                <tr>
                                                    <td>Code</td>
                                                    <td>
                                                        {{ form.profile.code }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Name</td>
                                                    <td>
                                                        {{ form.profile.name }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Contact Person</td>
                                                    <td>
                                                        {{
                                                            form.profile
                                                                .contact_person
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Phone No.</td>
                                                    <td>
                                                        {{
                                                            form.profile.phone1
                                                        }}
                                                        {{
                                                            form.profile.phone2
                                                                ? "; " +
                                                                  form.profile
                                                                      .phone2
                                                                : ""
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Email Address</td>
                                                    <td>{{ form.email }}</td>
                                                </tr>
                                                <tr>
                                                    <td>Website</td>
                                                    <td>
                                                        {{
                                                            form.profile.website
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Fax</td>
                                                    <td>
                                                        {{ form.profile.fax }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Address</td>
                                                    <td>
                                                        {{
                                                            form.profile.address
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Street</td>
                                                    <td>
                                                        {{
                                                            form.profile.street
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>District</td>
                                                    <td>
                                                        {{
                                                            form.profile
                                                                .district
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>City</td>
                                                    <td>
                                                        {{ form.profile.city }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Province</td>
                                                    <td>
                                                        {{
                                                            form.profile
                                                                .province
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Country</td>
                                                    <td>
                                                        {{
                                                            form.profile.country
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Postal Code</td>
                                                    <td>
                                                        {{
                                                            form.profile
                                                                .postal_code
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Latitude</td>
                                                    <td>
                                                        {{
                                                            form.profile
                                                                .latitude
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Longitude</td>
                                                    <td>
                                                        {{
                                                            form.profile
                                                                .longitude
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Location</td>
                                                    <td>
                                                        {{
                                                            `${form.profile.location.name} : ${form.profile.location.address}, ${form.profile.location.street}, ${form.profile.location.district}, ${form.profile.location.city}, ${form.profile.location.province}, ${form.profile.location.country}, ${form.profile.location.postal_code}`
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Organization Type</td>
                                                    <td>
                                                        {{
                                                            form.profile
                                                                .organization_type
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Company</td>
                                                    <td>
                                                        {{
                                                            form.profile
                                                                .is_company
                                                                ? "Yes"
                                                                : "No"
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Active</td>
                                                    <td>
                                                        {{
                                                            form.is_active
                                                                ? "Yes"
                                                                : "No"
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Created</td>
                                                    <td>
                                                        {{
                                                            form.created_at
                                                                | moment("LLLL")
                                                        }}
                                                    </td>
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
                                    <Assets :model_id="form.id"></Assets>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-text> </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-text>
                                    <ActivityLogs
                                        :model_id="form.profile.id"
                                    ></ActivityLogs>
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
import CardSummary from "../../components/pages/CardSummary.vue";
import CustomerDataService from "../../services/CustomerDataService";
import Assets from "./Assets.vue";
import ActivityLogs from "./ActivityLogs.vue";

export default {
    components: {
        CardSummary,
        Assets,
        ActivityLogs
    },
    data() {
        return {
            tab: null,
            items: ["details", "assets", "licenses", "System Activity Logs"],
            records: [],
            form: {
                email: "",
                is_active: true,
                notes: "",
                profile: {
                    code: "",
                    slug: "",
                    name: "",
                    contact_person: "",
                    phone1: "",
                    phone2: "",
                    website: "",
                    fax: "",
                    address: "",
                    street: "",
                    district: "",
                    city: "",
                    province: "",
                    country: "",
                    postal_code: "",
                    latitude: "",
                    longitude: "",
                    organization_type: "",
                    is_company: false,
                    location_id: "",
                    location: {
                        name: "",
                        address: "",
                        street: "",
                        district: "",
                        city: "",
                        province: "",
                        country: "",
                        postal_code: ""
                    }
                }
            }
        };
    },
    methods: {
        getData() {
            let data = {};

            CustomerDataService.show(this.$route.params.id, data)
                .then(response => {
                    this.form = { ...this.form, ...response.data.data };
                })
                .catch(error => {
                    console.log(error.response);
                    alert("An error has occurred.");
                    this.$router.push({ name: "customers.index" }, () => {});
                });
        },
        onDelete() {
            if (!confirm("WARNING: Do you want to delete this record?")) {
                return;
            }

            CustomerDataService.delete(this.$route.params.id, {})
                .then(response => {
                    alert(response.data.message);
                    this.$router.push({ name: "customers.index" });
                })
                .catch(error => {
                    console.log(error.response);
                    alert("An error has occurred.");
                });
        }
    },
    created() {
        this.getData();
    },
    activated() {
        this.getData();
    }
};
</script>
