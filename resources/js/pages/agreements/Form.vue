<template>
    <v-form ref="form" v-model="valid">
        <v-row class="d-flex justify-center">
            <v-col cols="12" md="6">
                <v-card flat>
                    <v-card-title>
                        General Information
                    </v-card-title>
                    <v-card-text>
                        <v-row class="d-flex justify-center">
                            <v-col cols="12">
                                <v-select
                                    v-model="form.type"
                                    :items="['contract', 'warranty']"
                                    label="Type"
                                    outlined
                                    :error-messages="errors.type[0]"
                                    @input="errors.type = []"
                                ></v-select>
                                <v-text-field
                                    v-model="form.reference_no"
                                    label="Reference No"
                                    outlined
                                    clearable
                                    hint="Ex. #00000234"
                                    :error-messages="errors.reference_no[0]"
                                    @input="errors.reference_no = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.description"
                                    label="Description"
                                    outlined
                                    clearable
                                    hint="Ex. Warranty Agreement"
                                    :error-messages="errors.description[0]"
                                    @input="errors.description = []"
                                ></v-text-field>
                                <XDateRangePicker
                                    ref="dateRangePicker"
                                    :dateRange="form.date_range"
                                    @on-change="updateDates"
                                >
                                    <template
                                        v-slot:openDialog="{
                                            on,
                                            attrs,
                                            dateRangeText
                                        }"
                                    >
                                        <v-text-field
                                            v-model="form.date_range"
                                            :value="dateRangeText"
                                            :error-messages="errors.start_date"
                                            @input="errors.start_date = []"
                                            label="Date"
                                            readonly
                                            outlined
                                            v-bind="attrs"
                                            v-on="on"
                                            clearable
                                        ></v-text-field>
                                    </template>
                                </XDateRangePicker>
                                <CustomerDialogSelector
                                    :selected="
                                        !form.customer ? [] : [...form.customer]
                                    "
                                    @on-select="onSelectUser"
                                >
                                    <template
                                        v-slot:openDialog="{
                                            on,
                                            attrs
                                        }"
                                    >
                                        <v-text-field
                                            :value="
                                                form.customer
                                                    ? form.customer.full_name
                                                    : ''
                                            "
                                            label="Customer"
                                            outlined
                                            :error-messages="
                                                errors.customer_id[0]
                                            "
                                            @input="errors.customer_id = []"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                        ></v-text-field>
                                    </template>
                                </CustomerDialogSelector>
                                <AssetDialogSelector
                                    :selected="
                                        !form.asset ? null : [...form.asset]
                                    "
                                    @on-select="onSelectAsset"
                                >
                                    <template v-slot:openDialog="{ on, attrs }">
                                        <v-text-field
                                            :value="
                                                form.asset
                                                    ? form.asset.description
                                                    : ''
                                            "
                                            label="Asset"
                                            outlined
                                            :error-messages="errors.asset_id[0]"
                                            @input="errors.asset_id = []"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                        ></v-text-field>
                                    </template>
                                </AssetDialogSelector>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" md="6">
                <v-card flat>
                    <v-card-title>
                        Other Information
                    </v-card-title>
                    <v-card-text>
                        <v-row class="d-flex justify-center">
                            <v-col cols="12">
                                <v-textarea
                                    v-model="form.remarks"
                                    label="Remarks"
                                    outlined
                                    clearable
                                    rows="3"
                                    :error-messages="errors.remarks[0]"
                                    @input="errors.remarks = []"
                                ></v-textarea>
                            </v-col>
                        </v-row>
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
import XDateRangePicker from "../../components/X-DateRangePicker.vue";
import AssetDialogSelector from "../../components/selectors/AssetDialogSelector.vue";
import CustomerDialogSelector from "../../components/selectors/CustomerDialogSelector.vue";

export default {
    props: {
        agreementForm: {
            type: Object,
            default: () => {
                return {
                    code: "",
                    slug: "",
                    reference_no: "",
                    description: "",
                    type: "",
                    start_date: "",
                    end_date: "",
                    remarks: "",
                    asset: [],
                    customer: null,
                    date_range: []
                };
            }
        },
        rules: {
            type: Object,
            default: () => {
                return {
                    code: [],
                    slug: [],
                    reference_no: [],
                    description: [],
                    type: [],
                    start_date: [],
                    end_date: [],
                    remarks: [],
                    asset_id: [],
                    customer_id: []
                };
            }
        },
        errors: {
            type: Object,
            default: () => {
                return {
                    code: [],
                    slug: [],
                    reference_no: [],
                    description: [],
                    type: [],
                    start_date: [],
                    end_date: [],
                    remarks: [],
                    asset_id: [],
                    customer_id: []
                };
            }
        }
    },
    components: {
        XDateRangePicker,
        AssetDialogSelector,
        CustomerDialogSelector
    },
    data() {
        return {
            valid: false,
            form: {
                code: "",
                slug: "",
                reference_no: "",
                description: "",
                type: "",
                start_date: "",
                end_date: "",
                remarks: "",
                asset: [],
                customer: null,
                date_range: []
            }
        };
    },
    methods: {
        onSave() {
            if (!confirm("Do you want to save?")) {
                return;
            }

            if (!this.$refs.form.validate()) {
                alert("An error has occurred.");
                return;
            }

            let newForm = {
                ...this.form,
                ...{
                    customer_id: this.form.customer
                        ? this.form.customer.id
                        : null
                },
                ...{
                    asset_id: this.form.asset ? this.form.asset.id : null
                }
            };

            console.log(newForm);

            newForm.start_date = newForm.date_range
                ? newForm.date_range[0]
                : null;
            newForm.end_date = newForm.date_range
                ? newForm.date_range[1]
                : null;

            this.$emit("on-save", newForm);
        },
        updateDates(e) {
            this.form.date_range = e;
        },
        onSelectAsset(e) {
            this.errors.asset_id = [];

            if (e == null || e == undefined) {
                this.form.asset = [];
                return;
            }

            this.form.asset = e[0];
        },
        onSelectUser(e) {
            this.errors.customer_id = [];

            if (e == null || e == undefined) {
                this.form.customer = null;
                return;
            }

            this.form.customer = e[0];
        }
    },
    watch: {
        agreementForm: {
            immediate: true,
            handler(newValue, oldValue) {
                this.form = newValue;
            }
        }
    }
};
</script>
