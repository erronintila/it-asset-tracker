<template>
    <div>
        <page-header
            class="mb-4"
            :title="'Employee Details'"
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
                                    '/employees/' + $route.params.id + '/edit'
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
                                                    <td>First Name</td>
                                                    <td>
                                                        {{
                                                            form.profile
                                                                .first_name
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Middle Name</td>
                                                    <td>
                                                        {{
                                                            form.profile
                                                                .middle_name
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Last Name</td>
                                                    <td>
                                                        {{
                                                            form.profile
                                                                .last_name
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Suffix</td>
                                                    <td>
                                                        {{
                                                            form.profile.suffix
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Gender</td>
                                                    <td>
                                                        {{
                                                            form.profile.gender
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Birthdate</td>
                                                    <td>
                                                        {{
                                                            form.profile
                                                                .birthdate
                                                                | moment("LL")
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Business Phone No.</td>
                                                    <td>
                                                        {{
                                                            form.profile
                                                                .business_phone
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Home Phone No.</td>
                                                    <td>
                                                        {{
                                                            form.profile
                                                                .home_phone
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Mobile Phone No.</td>
                                                    <td>
                                                        {{
                                                            form.profile
                                                                .mobile_phone
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Email Address</td>
                                                    <td>{{ form.email }}</td>
                                                </tr>
                                                <tr>
                                                    <td>Username</td>
                                                    <td>{{ form.username }}</td>
                                                </tr>
                                                <tr>
                                                    <td>Job Title</td>
                                                    <td>
                                                        {{
                                                            form.profile
                                                                .job_title
                                                        }}
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
                                                    <td>Image</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>Department</td>
                                                    <td>
                                                        {{
                                                            form.profile
                                                                .department.name
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
import CardSummary from "../../components/pages/CardSummary.vue";
import EmployeeDataService from "../../services/EmployeeDataService";
import Assets from "./Assets.vue";

export default {
    components: {
        CardSummary,
        Assets
    },
    data() {
        return {
            tab: null,
            items: ["details", "assets", "System Activity Logs"],
            records: [],
            form: {
                username: "",
                email: "",
                is_active: true,
                notes: "",
                profile: {
                    code: "",
                    slug: "",
                    first_name: "",
                    middle_name: "",
                    last_name: "",
                    suffix: "",
                    gender: "",
                    birthdate: "",
                    business_phone: "",
                    home_phone: "",
                    mobile_phone: "",
                    job_title: "",
                    address: "",
                    street: "",
                    district: "",
                    city: "",
                    province: "",
                    country: "",
                    postal_code: "",
                    latitude: "",
                    longitude: "",
                    location_id: "",
                    department_id: "",
                    image: "",
                    location: {
                        name: "",
                        address: "",
                        street: "",
                        district: "",
                        city: "",
                        province: "",
                        country: "",
                        postal_code: ""
                    },
                    department: {
                        name: ""
                    }
                }
            }
        };
    },
    methods: {
        getData() {
            let data = {};

            EmployeeDataService.show(this.$route.params.id, data)
                .then(response => {
                    this.form = { ...this.form, ...response.data.data };
                })
                .catch(error => {
                    console.log(error);
                    alert("An error has occurred.");
                    this.$router.push({ name: "employees.index" }, () => {});
                });
        },
        onDelete() {
            if (!confirm("WARNING: Do you want to delete this record?")) {
                return;
            }

            EmployeeDataService.delete(this.$route.params.id, {})
                .then(response => {
                    alert(response.data.message);
                    this.$router.push({ name: "employees.index" });
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
