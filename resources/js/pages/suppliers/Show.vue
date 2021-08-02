<template>
    <div>
        <page-header
            class="mb-4"
            :title="'Supplier Details'"
            :backButton="true"
        ></page-header>

        <v-row>
            <v-col cols="12" md="4">
                <CardSummary :title="form.name" :subtitle="'# ' + form.code">
                    <template v-slot:body>
                        <p>Phone: {{ form.phone1 }}</p>
                        <p v-if="form.email">Email: {{ form.email }}</p>
                        <p>
                            Address: {{ form.address }}, {{ form.city }},
                            {{ form.province }}, {{ form.postal_code }},
                            {{ form.country }}
                        </p>
                    </template>
                    <template v-slot:actions>
                        <v-btn
                            icon
                            @click="
                                $router.push(
                                    '/suppliers/' + $route.params.id + '/edit'
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
                                                    <td>{{ form.code }}</td>
                                                </tr>
                                                <tr>
                                                    <td>Name</td>
                                                    <td>{{ form.name }}</td>
                                                </tr>
                                                <tr>
                                                    <td>Contact Person</td>
                                                    <td>
                                                        {{
                                                            form.contact_person
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Phone No.</td>
                                                    <td>
                                                        {{ form.phone1 }}
                                                        {{
                                                            form.phone2
                                                                ? "; " +
                                                                  form.phone2
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
                                                    <td>{{ form.website }}</td>
                                                </tr>
                                                <tr>
                                                    <td>Fax</td>
                                                    <td>{{ form.fax }}</td>
                                                </tr>
                                                <tr>
                                                    <td>Address</td>
                                                    <td>{{ form.address }}</td>
                                                </tr>
                                                <tr>
                                                    <td>Street</td>
                                                    <td>{{ form.street }}</td>
                                                </tr>
                                                <tr>
                                                    <td>District</td>
                                                    <td>{{ form.district }}</td>
                                                </tr>
                                                <tr>
                                                    <td>City</td>
                                                    <td>{{ form.city }}</td>
                                                </tr>
                                                <tr>
                                                    <td>Province</td>
                                                    <td>{{ form.province }}</td>
                                                </tr>
                                                <tr>
                                                    <td>Country</td>
                                                    <td>{{ form.country }}</td>
                                                </tr>
                                                <tr>
                                                    <td>Postal Code</td>
                                                    <td>
                                                        {{ form.postal_code }}
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
import SupplierDataService from "../../services/SupplierDataService";

export default {
    components: {
        CardSummary
    },
    data() {
        return {
            tab: null,
            items: ["details", "assets", "licenses", "System Activity Logs"],
            records: [],
            form: {
                code: "",
                slug: "",
                name: "",
                contact_person: "",
                phone1: "",
                phone2: "",
                email: "",
                website: "",
                fax: "",
                address: "",
                street: "",
                district: "",
                city: "",
                province: "",
                country: "",
                postal_code: "",
                is_active: true,
                notes: ""
            }
        };
    },
    methods: {
        getData() {
            let data = {};

            SupplierDataService.show(this.$route.params.id, data)
                .then(response => {
                    console.log(response.data);
                    this.form = { ...this.form, ...response.data.data };
                })
                .catch(error => {
                    console.log(error.response);
                    alert("An error has occurred.");
                    this.$router.push({ name: "suppliers.index" }, () => {});
                });
        },
        onDelete() {
            if (!confirm("WARNING: Do you want to delete this record?")) {
                return;
            }

            SupplierDataService.delete(this.$route.params.id, {})
                .then(response => {
                    console.log(response.data);
                    alert(response.data.message);
                    this.$router.push({ name: "suppliers.index" });
                })
                .catch(error => {
                    console.log(error.response);
                    alert("An error has occurred.");
                });
        }
    },
    created() {
        this.getData();
    }
};
</script>
