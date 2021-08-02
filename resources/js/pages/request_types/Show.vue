<template>
    <div>
        <page-header
            class="mb-4"
            :title="'Request Type Details'"
            :backButton="true"
        ></page-header>

        <v-row>
            <v-col cols="12" md="4">
                <CardSummary :title="form.name" :subtitle="'# ' + form.code">
                    <template v-slot:body>
                        <p>Action Type: {{ form.action_type }}</p>
                        <p>
                            Last Updated:
                            {{ form.updated_at | moment("LLLL") }}
                        </p>
                    </template>
                    <template v-slot:actions>
                        <v-btn icon @click="dialogTransactionTypeEdit = true">
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
                                                    <td>Action Type</td>
                                                    <td>
                                                        {{ form.action_type }}
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
                    </v-tabs-items>
                </v-card>
            </v-col>
        </v-row>

        <TransactionTypeEdit
            :transaction_type="form"
            :dialogEdit="dialogTransactionTypeEdit"
            @close-dialog="dialogTransactionTypeEdit = false"
            @save-dialog="
                () => {
                    getData();
                    dialogTransactionTypeEdit = false;
                }
            "
        ></TransactionTypeEdit>
    </div>
</template>

<script>
import CardSummary from "../../components/pages/CardSummary.vue";
import TransactionTypeDataService from "../../services/TransactionTypeDataService";
import TransactionTypeEdit from "./Edit.vue";

export default {
    components: {
        CardSummary,
        TransactionTypeEdit
    },
    data() {
        return {
            tab: null,
            items: ["details"],
            dialogTransactionTypeEdit: false,
            records: [],
            form: {
                code: "",
                slug: "",
                name: "",
                is_active: true,
                action_type: ""
            }
        };
    },
    methods: {
        getData() {
            let data = {};

            TransactionTypeDataService.show(this.$route.params.id, data)
                .then(response => {
                    console.log(response.data);
                    this.form = { ...this.form, ...response.data.data };
                })
                .catch(error => {
                    console.log(error.response);
                    alert("An error has occurred.");
                    this.$router.push(
                        { name: "transaction_types.index" },
                        () => {}
                    );
                });
        },
        onDelete() {
            if (!confirm("WARNING: Do you want to delete this record?")) {
                return;
            }

            TransactionTypeDataService.delete(this.$route.params.id, {})
                .then(response => {
                    console.log(response.data);
                    alert(response.data.message);
                    this.$router.push({ name: "transaction_types.index" });
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
