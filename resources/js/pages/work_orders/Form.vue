<template>
    <v-form ref="form" v-model="valid">
        <v-row class="d-flex justify-left">
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
                                    hint="Ex. Work Order for Asset"
                                    :error-messages="errors.description[0]"
                                    @input="errors.description = []"
                                ></v-text-field>

                                <XDateRangePicker
                                    ref="dateRangeScheduled"
                                    :dateRange="form.scheduled_date"
                                    @on-change="updateScheduledDate"
                                >
                                    <template
                                        v-slot:openDialog="{
                                            on,
                                            attrs,
                                            dateRangeText
                                        }"
                                    >
                                        <v-text-field
                                            v-model="form.scheduled_date"
                                            :value="dateRangeText"
                                            :error-messages="
                                                errors.scheduled_start_date
                                            "
                                            @input="
                                                errors.scheduled_start_date = []
                                            "
                                            label="Scheduled Date"
                                            readonly
                                            outlined
                                            v-bind="attrs"
                                            v-on="on"
                                            clearable
                                        ></v-text-field>
                                    </template>
                                </XDateRangePicker>

                                <v-dialog
                                    ref="dialogActualStart"
                                    v-model="actualStartModal"
                                    :return-value.sync="
                                        form.transactionable.actual_start_date
                                    "
                                    persistent
                                    width="290px"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                            v-model="
                                                form.transactionable
                                                    .actual_start_date
                                            "
                                            label="Actual Start Date"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                            outlined
                                            hint="Ex. 2000-01-01"
                                            :error-messages="
                                                errors.actual_start_date[0]
                                            "
                                            @input="
                                                errors.actual_start_date = []
                                            "
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="
                                            form.transactionable
                                                .actual_start_date
                                        "
                                        :max="maxDate"
                                        scrollable
                                        @input="errors.actual_start_date = []"
                                    >
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="actualStartModal = false"
                                        >
                                            Cancel
                                        </v-btn>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="
                                                $refs.dialogActualStart.save(
                                                    form.transactionable
                                                        .actual_start_date
                                                )
                                            "
                                        >
                                            OK
                                        </v-btn>
                                    </v-date-picker>
                                </v-dialog>

                                <v-dialog
                                    ref="dialogActualEnd"
                                    v-model="actualEndModal"
                                    :return-value.sync="
                                        form.transactionable.actual_end_date
                                    "
                                    persistent
                                    width="290px"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                            v-model="
                                                form.transactionable
                                                    .actual_end_date
                                            "
                                            label="Actual End Date"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                            outlined
                                            hint="Ex. 2000-01-01"
                                            :error-messages="
                                                errors.actual_end_date[0]
                                            "
                                            @input="errors.actual_end_date = []"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="
                                            form.transactionable.actual_end_date
                                        "
                                        :max="maxDate"
                                        scrollable
                                        @input="errors.actual_end_date = []"
                                    >
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="actualEndModal = false"
                                        >
                                            Cancel
                                        </v-btn>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="
                                                $refs.dialogActualEnd.save(
                                                    form.transactionable
                                                        .actual_end_date
                                                )
                                            "
                                        >
                                            OK
                                        </v-btn>
                                    </v-date-picker>
                                </v-dialog>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" md="4">
                <v-card flat>
                    <v-card-title>
                        Asset Information
                    </v-card-title>
                    <v-card-text>
                        <v-row class="d-flex justify-center">
                            <v-col cols="12">
                                <v-text-field
                                    :value="
                                        form.assigned_user
                                            ? form.assigned_user.full_name
                                            : ''
                                    "
                                    label="Assigned User"
                                    outlined
                                    :error-messages="errors.assigned_user_id[0]"
                                    @input="errors.assigned_user_id = []"
                                    readonly
                                >
                                    <template v-slot:append>
                                        <EmployeeDialogSelector
                                            :selected="
                                                !form.assigned_user
                                                    ? []
                                                    : [...form.assigned_user]
                                            "
                                            @on-select="onSelectUser"
                                        >
                                            <template
                                                v-slot:openDialog="{
                                                    on,
                                                    attrs
                                                }"
                                            >
                                                <v-btn
                                                    v-bind="attrs"
                                                    v-on="on"
                                                    icon
                                                    title="Select Employee"
                                                >
                                                    <v-icon>
                                                        mdi-clipboard-account
                                                    </v-icon>
                                                </v-btn>
                                            </template>
                                        </EmployeeDialogSelector>

                                        <CustomerDialogSelector
                                            :selected="
                                                !form.assigned_user
                                                    ? []
                                                    : [...form.assigned_user]
                                            "
                                            @on-select="onSelectUser"
                                        >
                                            <template
                                                v-slot:openDialog="{
                                                    on,
                                                    attrs
                                                }"
                                            >
                                                <v-btn
                                                    v-bind="attrs"
                                                    v-on="on"
                                                    icon
                                                    title="Select Customer"
                                                >
                                                    <v-icon>
                                                        mdi-card-account-details-outline
                                                    </v-icon>
                                                </v-btn>
                                            </template>
                                        </CustomerDialogSelector>
                                    </template>
                                </v-text-field>
                                <AssetDialogSelector
                                    :selected="
                                        !form.parent_asset
                                            ? []
                                            : [...form.parent_asset]
                                    "
                                    :requestType="'work_order'"
                                    :assignedUserId="
                                        form.assigned_user
                                            ? form.assigned_user.id
                                            : 0
                                    "
                                    @on-select="onSelectAsset"
                                >
                                    <template v-slot:openDialog="{ on, attrs }">
                                        <v-text-field
                                            :disabled="!form.assigned_user"
                                            :value="
                                                form.parent_asset
                                                    ? form.parent_asset
                                                          .description
                                                    : ''
                                            "
                                            label="Asset"
                                            outlined
                                            :error-messages="
                                                errors.parent_asset_id[0]
                                            "
                                            @input="errors.parent_asset_id = []"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                        ></v-text-field>
                                    </template>
                                </AssetDialogSelector>
                                <v-text-field
                                    v-model="form.transactionable.incident"
                                    label="Incident"
                                    outlined
                                    clearable
                                    hint="Ex. Incident for Asset"
                                    :error-messages="errors.incident[0]"
                                    @input="errors.incident = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.transactionable.diagnosis"
                                    label="Diagnosis"
                                    outlined
                                    clearable
                                    hint="Ex. Diagnosis for Asset"
                                    :error-messages="errors.diagnosis[0]"
                                    @input="errors.diagnosis = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.transactionable.action_taken"
                                    label="Action Taken"
                                    outlined
                                    clearable
                                    hint="Ex. Action Taken for Asset"
                                    :error-messages="errors.action_taken[0]"
                                    @input="errors.action_taken = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="
                                        form.transactionable.recommendation
                                    "
                                    label="Recommendation"
                                    outlined
                                    clearable
                                    hint="Ex. Recommendation for Asset"
                                    :error-messages="errors.recommendation[0]"
                                    @input="errors.recommendation = []"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" md="6">
                <v-card flat>
                    <v-card-title class="d-flex justify-space-between">
                        <div>
                            Assigned Employees
                        </div>
                        <div class="d-flex">
                            <v-btn
                                icon
                                fab
                                small
                                to="/employees/create"
                                title="Create new employee"
                            >
                                <v-icon>mdi-plus</v-icon>
                            </v-btn>
                            <EmployeeDialogSelector
                                :selected="
                                    !form.assigned_employees
                                        ? []
                                        : form.assigned_employees
                                "
                                :singleSelect="false"
                                @on-select="onSelectEmployee"
                            >
                                <template v-slot:openDialog="{ on, attrs }">
                                    <v-btn
                                        icon
                                        fab
                                        small
                                        title="Choose employee"
                                        v-bind="attrs"
                                        v-on="on"
                                    >
                                        <v-icon>
                                            mdi-clipboard-plus-outline
                                        </v-icon>
                                    </v-btn>
                                </template>
                            </EmployeeDialogSelector>
                        </div>
                    </v-card-title>
                    <v-card-text>
                        <small
                            class="red--text"
                            v-if="
                                form.assigned_employees.length == 0 &&
                                    errors.assigned_employees.length
                            "
                        >
                            {{ errors.assigned_employees[0] }}
                        </small>
                        <v-data-table
                            :headers="headers.employee"
                            :items="form.assigned_employees"
                            :items-per-page="5"
                        >
                            <template v-slot:[`item.action`]="{ item }">
                                <v-btn icon>
                                    <v-icon @click="removeEmployeeItem(item)">
                                        mdi-delete
                                    </v-icon>
                                </v-btn>
                            </template>
                        </v-data-table>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="6">
                <v-card flat>
                    <v-card-title class="d-flex justify-space-between">
                        <div>
                            Sub-Assets
                        </div>
                        <div class="d-flex">
                            <v-btn
                                icon
                                fab
                                small
                                to="/assets/create"
                                title="Create new asset"
                            >
                                <v-icon>mdi-plus</v-icon>
                            </v-btn>
                            <AssetDialogSelector
                                :selected="!form.assets ? [] : form.assets"
                                :singleSelect="false"
                                :requestType="'maintenance'"
                                :assignedAssetId="
                                    form.parent_asset ? form.parent_asset.id : 0
                                "
                                @on-select="onSelectAsset"
                            >
                                <template v-slot:openDialog="{ on, attrs }">
                                    <v-btn
                                        :disabled="!form.parent_asset"
                                        icon
                                        fab
                                        small
                                        title="Choose asset"
                                        v-bind="attrs"
                                        v-on="on"
                                    >
                                        <v-icon>
                                            mdi-clipboard-plus-outline
                                        </v-icon>
                                    </v-btn>
                                </template>
                            </AssetDialogSelector>
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
                            :headers="headers.asset"
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
    </v-form>
</template>

<script>
import moment from "moment";
import AssetDialogSelector from "../../components/selectors/AssetDialogSelector.vue";
import EmployeeDialogSelector from "../../components/selectors/EmployeeDialogSelector.vue";
import CustomerDialogSelector from "../../components/selectors/CustomerDialogSelector.vue";
import LocationDialogSelector from "../../components/selectors/LocationDialogSelector.vue";
import TransactionTypeDataService from "../../services/TransactionTypeDataService";
import XDateRangePicker from "../../components/X-DateRangePicker.vue";

export default {
    props: {
        workOrderForm: {
            type: Object,
            default: () => {
                return {
                    code: "",
                    reference_no: "",
                    request_date: "",
                    description: "",
                    status: { text: "", color: "", dark: false },
                    transactionable: {
                        incident: "",
                        diagnosis: "",
                        action_taken: "",
                        recommendation: "",
                        scheduled_start_date: "",
                        scheduled_end_date: "",
                        actual_start_date: "",
                        actual_end_date: ""
                    },
                    transaction_type_id: "",
                    user: {},
                    parent_asset_id: "",
                    owner_id: "",
                    assigned_user_id: "",
                    assigned_location_id: "",
                    assigned_asset_id: "",
                    assets: [],
                    assigned_employees: [],
                    assigned_location: null,
                    actual_date_performed: [],
                    scheduled_date: [],
                    assigned_user: null,
                    parent_asset: null
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
                    incident: [],
                    diagnosis: [],
                    action_taken: [],
                    recommendation: [],
                    scheduled_start_date: [],
                    scheduled_end_date: [],
                    actual_start_date: [],
                    actual_end_date: [],
                    transactionable: [],
                    transaction_type_id: [],
                    user_id: [],
                    parent_asset_id: [],
                    owner_id: [],
                    assigned_user_id: [],
                    assigned_location_id: [],
                    assigned_asset_id: [],
                    assets: [],
                    assigned_employees: []
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
                    incident: [],
                    diagnosis: [],
                    action_taken: [],
                    recommendation: [],
                    scheduled_start_date: [],
                    scheduled_end_date: [],
                    actual_start_date: [],
                    actual_end_date: [],
                    transactionable: [],
                    transaction_type_id: [],
                    user_id: [],
                    parent_asset_id: [],
                    owner_id: [],
                    assigned_user_id: [],
                    assigned_location_id: [],
                    assigned_asset_id: [],
                    assets: [],
                    assigned_employees: []
                };
            }
        }
    },
    components: {
        AssetDialogSelector,
        LocationDialogSelector,
        EmployeeDialogSelector,
        XDateRangePicker,
        CustomerDialogSelector
    },
    data() {
        return {
            valid: false,
            requestDateModal: false,
            actualStartModal: false,
            actualEndModal: false,
            headers: {
                employee: [
                    { text: "Code", value: "profile.code" },
                    { text: "Fullname", value: "full_name" },
                    { text: "Job Title", value: "profile.job_title" },
                    { text: "Action", value: "action" }
                ],
                asset: [
                    { text: "Code", value: "code" },
                    { text: "Serial No.", value: "serial_no" },
                    { text: "Description", value: "description" },
                    { text: "Action", value: "action" }
                ]
            },
            transaction_types: [],
            form: {
                code: "",
                reference_no: "",
                request_date: "",
                description: "",
                status: { text: "", color: "", dark: false },
                transactionable: {
                    incident: "",
                    diagnosis: "",
                    action_taken: "",
                    recommendation: "",
                    scheduled_start_date: "",
                    scheduled_end_date: "",
                    actual_start_date: "",
                    actual_end_date: ""
                },
                transaction_type_id: "",
                user: {},
                parent_asset_id: "",
                owner_id: "",
                assigned_user_id: "",
                assigned_location_id: "",
                assigned_asset_id: "",
                assets: [],
                assigned_employees: [],
                assigned_location: null,
                actual_date_performed: [],
                scheduled_date: [],
                assigned_user: null,
                parent_asset: null
            }
        };
    },
    methods: {
        async getTransactionTypes() {
            try {
                TransactionTypeDataService.getAll({
                    params: {
                        itemsPerPage: 100,
                        action_types: ["maintenance"]
                    }
                }).then(response => {
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

            let newForm = {
                ...this.form.transactionable,
                ...this.form,
                ...{ incident: this.form.transactionable.incident },
                ...{ diagnosis: this.form.transactionable.diagnosis },
                ...{
                    action_taken: this.form.transactionable.action_taken
                },
                ...{
                    recommendation: this.form.transactionable.recommendation
                },
                ...{
                    scheduled_start_date: this.form.transactionable
                        .scheduled_start_date
                },
                ...{
                    scheduled_end_date: this.form.transactionable
                        .scheduled_end_date
                },
                ...{
                    actual_start_date: this.form.transactionable
                        .actual_start_date
                },
                ...{
                    actual_end_date: this.form.transactionable.actual_end_date
                },
                ...{
                    assigned_user_id: this.form.assigned_user
                        ? this.form.assigned_user.id
                        : null
                },
                ...{
                    parent_asset_id: this.form.parent_asset
                        ? this.form.parent_asset.id
                        : null
                },
                ...{
                    transaction_type_id: this.form.transaction_type
                        ? this.form.transaction_type.id
                        : null
                }
            };

            if (!newForm.is_active) {
                newForm.is_active = false;
            }

            newForm.scheduled_start_date = newForm.scheduled_date
                ? newForm.scheduled_date[0]
                : null;
            newForm.scheduled_end_date = newForm.scheduled_date
                ? newForm.scheduled_date[1]
                : null;

            this.$emit("on-save", newForm);
        },
        onSelectAsset(e) {
            this.errors.assets = [];

            if (e == null || e == undefined) {
                this.form.assets = [];
                return;
            }

            this.form.assets = e;
        },
        onSelectEmployee(e) {
            this.errors.assigned_employees = [];

            if (e == null || e == undefined) {
                this.form.assigned_employees = [];
                return;
            }

            this.form.assigned_employees = e;
        },
        onSelectLocation(e) {
            this.errors.assigned_location_id = [];

            if (e == null || e == undefined) {
                this.form.assigned_location = null;
                return;
            }

            this.form.assigned_location = e[0];
        },
        removeItem(item) {
            if (confirm("Remove this item?")) {
                this.editedIndex = this.form.assets.indexOf(item);
                this.form.assets.splice(this.editedIndex, 1);
            }
        },
        removeEmployeeItem(item) {
            if (confirm("Remove this item?")) {
                this.editedIndex = this.form.assigned_employees.indexOf(item);
                this.form.assigned_employees.splice(this.editedIndex, 1);
            }
        },
        updateActualDate(e) {
            this.form.actual_date_performed = e;
        },
        updateScheduledDate(e) {
            this.form.scheduled_date = e;
        },
        onSelectUser(e) {
            this.errors.assigned_user_id = [];

            if (e == null || e == undefined) {
                this.form.assigned_user = null;
                return;
            }

            this.form.assigned_user = e[0];
        },
        onSelectAsset(e) {
            this.errors.parent_asset_id = [];

            if (e == null || e == undefined) {
                this.form.parent_asset = null;
                return;
            }

            this.form.parent_asset = e[0];
        }
    },
    computed: {
        maxDate() {
            return moment().format("YYYY-MM-DD");
        }
    },
    watch: {
        workOrderForm: {
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
