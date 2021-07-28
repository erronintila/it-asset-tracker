<template>
    <v-form ref="form" v-model="valid">
        <v-row class="d-flex justify-center">
            <v-col cols="12" md="4">
                <v-card flat>
                    <v-card-title>
                        General Information
                    </v-card-title>
                    <v-card-text>
                        <v-row class="d-flex justify-center">
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form.reference_no"
                                    label="Reference No."
                                    outlined
                                    clearable
                                    hint="Ex. 00001"
                                    :error-messages="errors.reference_no[0]"
                                    @input="errors.reference_no = []"
                                ></v-text-field>
                                <v-select
                                    v-model="form.transaction_type"
                                    :error-messages="
                                        errors.transaction_type_id[0]
                                    "
                                    @input="errors.transaction_type_id = []"
                                    return-object
                                    item-text="name"
                                    label="Request Type"
                                    outlined
                                    clearable
                                    :items="transaction_types"
                                ></v-select>
                                <v-dialog
                                    ref="dialogRequestDate"
                                    v-model="requestDateModal"
                                    :return-value.sync="form.request_date"
                                    persistent
                                    width="290px"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                            v-model="form.request_date"
                                            label="Request Date"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                            outlined
                                            hint="Ex. 2000-01-01"
                                            :error-messages="
                                                errors.request_date[0]
                                            "
                                            @input="errors.request_date = []"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="form.request_date"
                                        :max="maxDate"
                                        scrollable
                                        @input="errors.request_date = []"
                                    >
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="requestDateModal = false"
                                        >
                                            Cancel
                                        </v-btn>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="
                                                $refs.dialogRequestDate.save(
                                                    form.request_date
                                                )
                                            "
                                        >
                                            OK
                                        </v-btn>
                                    </v-date-picker>
                                </v-dialog>
                                <v-text-field
                                    v-model="form.description"
                                    label="Description"
                                    outlined
                                    clearable
                                    hint="Ex. Checkin Request for Asset"
                                    :error-messages="errors.description[0]"
                                    @input="errors.description = []"
                                ></v-text-field>
                                <v-text-field
                                    :value="
                                        form.location ? form.location.name : ''
                                    "
                                    :error-messages="
                                        errors.assigned_location_id
                                    "
                                    @input="errors.assigned_location_id = []"
                                    label="Location"
                                    readonly
                                    outlined
                                    class="d-flex justify-center align-center"
                                >
                                    <template v-slot:append>
                                        <LocationDialogSelector
                                            :selected="
                                                !form.location
                                                    ? []
                                                    : [...form.location]
                                            "
                                            :dialogLocation="dialogLocation"
                                            @close-dialog="
                                                dialogLocation = false
                                            "
                                            @on-select="onSelectLocation"
                                        >
                                            <template v-slot:openDialog>
                                                <v-btn
                                                    color="primary"
                                                    icon
                                                    @click="
                                                        dialogLocation = true
                                                    "
                                                >
                                                    <v-icon dark>
                                                        mdi-magnify
                                                    </v-icon>
                                                </v-btn>
                                            </template>
                                        </LocationDialogSelector>
                                    </template>
                                </v-text-field>
                                <!-- <v-text-field
                                    v-model="form.notes"
                                    label="Notes"
                                    outlined
                                    clearable
                                    :error-messages="errors.notes[0]"
                                    @input="errors.notes = []"
                                ></v-text-field> -->
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="8">
                <v-card flat>
                    <v-card-title class="d-flex justify-space-between">
                        <div>
                            Assets
                        </div>
                        <div>
                            <v-btn
                                icon
                                fab
                                small
                                to="/assets/create"
                                title="Create new asset"
                            >
                                <v-icon>mdi-plus</v-icon>
                            </v-btn>
                            <v-btn
                                icon
                                fab
                                small
                                title="Choose asset"
                                @click="dialogAsset = true"
                            >
                                <v-icon>mdi-clipboard-plus-outline</v-icon>
                            </v-btn>
                        </div>
                    </v-card-title>
                    <v-card-text>
                        <small
                            class="red--text"
                            v-if="
                                form.assets.length == 0 && errors.assets.length
                            "
                        >
                            {{ errors.assets[0] }}
                        </small>
                        <v-data-table
                            :headers="headers"
                            :items="form.assets"
                            :items-per-page="5"
                        >
                            <template v-slot:[`item.action`]="{ item }">
                                <v-btn icon>
                                    <v-icon @click="removeItem(item)">
                                        mdi-delete
                                    </v-icon>
                                </v-btn>
                            </template>
                        </v-data-table>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            @click="onSave"
                            class="mr-2"
                            large
                        >
                            Save
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

        <AssetDialogSelector
            :selected="!form.assets ? [] : form.assets"
            :dialogAsset="dialogAsset"
            :singleSelect="false"
            @close-dialog="dialogAsset = false"
            @on-select="onSelectAsset"
        >
        </AssetDialogSelector>
    </v-form>
</template>

<script>
import moment from "moment";
import AssetDialogSelector from "../../components/selectors/AssetDialogSelector.vue";
import LocationDialogSelector from "../../components/selectors/LocationDialogSelector.vue";
import TransactionTypeDataService from "../../services/TransactionTypeDataService";

export default {
    props: {
        locationForm: {
            type: Object,
            default: () => {
                return {
                    code: "",
                    reference_no: "",
                    request_date: "",
                    description: "",
                    status: { text: "", color: "", dark: false },
                    transactionable: "",
                    transaction_type_id: "",
                    user: "",
                    parent_asset_id: "",
                    owner_id: "",
                    assigned_user_id: "",
                    assigned_location_id: "",
                    assigned_asset_id: "",
                    assets: [],
                    location: null
                };
            }
        },
        rules: {
            type: Object,
            default: () => {
                return {
                    code: [],
                    reference_no: [],
                    request_date: [],
                    description: [],
                    transactionable: [],
                    transaction_type_id: [],
                    user_id: [],
                    parent_asset_id: [],
                    owner_id: [],
                    assigned_user_id: [],
                    assigned_location_id: [],
                    assigned_asset_id: [],
                    assets: []
                };
            }
        },
        errors: {
            type: Object,
            default: () => {
                return {
                    code: [],
                    reference_no: [],
                    request_date: [],
                    description: [],
                    transactionable: [],
                    transaction_type_id: [],
                    user_id: [],
                    parent_asset_id: [],
                    owner_id: [],
                    assigned_user_id: [],
                    assigned_location_id: [],
                    assigned_asset_id: [],
                    assets: []
                };
            }
        }
    },
    components: {
        AssetDialogSelector,
        LocationDialogSelector
    },
    data() {
        return {
            valid: false,
            dialogAsset: false,
            requestDateModal: false,
            dialogLocation: false,
            headers: [
                { text: "Code", value: "code" },
                { text: "Serial No.", value: "serial_no" },
                { text: "Description", value: "description" },
                { text: "Action", value: "action" }
            ],
            transaction_types: [],
            form: {
                code: "",
                reference_no: "",
                request_date: "",
                description: "",
                status: { text: "", color: "", dark: false },
                transactionable: {},
                transaction_type_id: "",
                user: {},
                parent_asset_id: "",
                owner_id: "",
                assigned_user_id: "",
                assigned_location_id: "",
                assigned_asset_id: "",
                assets: [],
                location: null,
                transaction_type: null
            }
        };
    },
    methods: {
        async getTransactionTypes() {
            try {
                TransactionTypeDataService.getAll({
                    params: {
                        itemsPerPage: 100
                    }
                }).then(response => {
                    console.log(response.data);
                    this.transaction_types = response.data.data.data;
                });
            } catch (error) {
                console.log(error);
            }
        },
        onSave() {
            if (!confirm("Do you want to save?")) {
                return;
            }

            if (!this.$refs.form.validate()) {
                alert("An error has occurred.");
                return;
            }

            let newform = {
                ...this.form,
                ...{
                    assigned_location_id: this.form.location
                        ? this.form.location.id
                        : null
                },
                ...{
                    transaction_type_id: this.form.transaction_type
                        ? this.form.transaction_type.id
                        : null
                }
            };

            console.log(newform);

            if (!newform.is_active) {
                newform.is_active = false;
            }

            this.$emit("on-save", newform);
        },
        onSelectAsset(e) {
            this.dialogAsset = false;
            this.errors.assets = [];

            if (e == null || e == undefined) {
                this.form.assets = [];
                return;
            }

            this.form.assets = e;
            this.dialogAsset = false;
        },
        onSelectLocation(e) {
            this.dialogLocation = false;
            this.errors.assigned_location_id = [];

            if (e == null || e == undefined) {
                this.form.location = null;
                return;
            }

            this.form.location = e[0];
            this.dialogLocation = false;
        },
        removeItem(item) {
            if (confirm("Remove this item?")) {
                this.editedIndex = this.form.assets.indexOf(item);
                this.form.assets.splice(this.editedIndex, 1);
            }
        }
    },
    computed: {
        maxDate() {
            return moment().format("YYYY-MM-DD");
        }
    },
    watch: {
        locationForm: {
            immediate: true,
            handler(newValue, oldValue) {
                this.form = newValue;
            }
        }
    },
    mounted() {
        this.getTransactionTypes();
    }
};
</script>
