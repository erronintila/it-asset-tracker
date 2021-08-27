<template>
    <div>
        <page-header
            class="mb-4"
            :title="'Manufacturer Details'"
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
                                    '/manufacturers/' +
                                        $route.params.id +
                                        '/edit'
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
                    </v-tabs-items>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import CardSummary from "../../components/pages/CardSummary.vue";
import ManufacturerDataService from "../../services/ManufacturerDataService";
import AssetDataService from "../../services/AssetDataService";
import Assets from "./Assets.vue";

export default {
    components: {
        CardSummary,
        Assets
    },
    data() {
        return {
            tab: null,
            items: ["details", "assets", "licenses", "System Activity Logs"],
            records: [],
            assets: [],
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
            },
            tableAssetOptions: {
                options: {
                    sortBy: ["description"],
                    sortDesc: [false],
                    page: 1,
                    itemsPerPage: 10
                },
                loading: false,
                itemsPerPageOptions: [10, 20, 50, 100],
                serverItemsLength: 0,
                headers: [
                    { text: "Asset Tag", value: "asset_tag" },
                    { text: "Description", value: "description" },
                    { text: "Category", value: "asset_category.name" },
                    { text: "Assigned To", value: "assigned_user.name" },
                    { text: "Status", value: "status", sortable: false }
                ]
            }
        };
    },
    methods: {
        async getData() {
            let data = {};

            try {
                await ManufacturerDataService.show(
                    this.$route.params.id,
                    data
                ).then(response => {
                    this.form = { ...this.form, ...response.data.data };
                });
            } catch (error) {
                console.log(error);
                alert("An error has occurred.");
                this.$router.push({ name: "manufacturers.index" }, () => {});
            }
        },
        getAssetData() {
            this.tableAssetOptions.loading = true;
            return new Promise((resolve, reject) => {
                const {
                    sortBy,
                    sortDesc,
                    page,
                    itemsPerPage
                } = this.tableAssetOptions.options;

                let data = {
                    params: {
                        sortBy: sortBy[0],
                        sortType: sortDesc[0] ? "desc" : "asc",
                        page: page,
                        itemsPerPage: itemsPerPage,
                        manufacturer_id: this.$route.params.id
                    }
                };

                AssetDataService.getAll(data)
                    .then(response => {
                        this.assets = response.data.data.data;
                        this.tableAssetOptions.serverItemsLength =
                            response.data.data.total;
                        this.tableAssetOptions.loading = false;
                        resolve();
                    })
                    .catch(error => {
                        this.tableAssetOptions.loading = false;
                        console.log(error);
                        reject();
                    });
            });
        },
        onDelete() {
            if (!confirm("WARNING: Do you want to delete this record?")) {
                return;
            }

            ManufacturerDataService.delete(this.$route.params.id, {})
                .then(response => {
                    alert(response.data.message);
                    this.$router.push({ name: "manufacturers.index" });
                })
                .catch(error => {
                    console.log(error);
                    alert("An error has occurred.");
                });
        }
    },
    computed: {
        params(nv) {
            return {
                ...this.tableAssetOptions.options
            };
        }
    },
    watch: {
        params: {
            immediate: true,
            deep: true,
            handler() {
                this.getAssetData();
            }
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
