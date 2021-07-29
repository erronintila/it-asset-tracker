<template>
    <v-form ref="form" v-model="valid">
        <v-row class="d-flex justify-center">
            <v-col cols="12" sm="6">
                <v-card flat>
                    <v-card-title>
                        General Information
                    </v-card-title>
                    <v-card-text>
                        <v-row class="d-flex justify-center">
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form.reference_no"
                                    :error-messages="errors.reference_no[0]"
                                    @input="errors.reference_no = []"
                                    hint="Ex. 000011"
                                    label="Reference No."
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.serial_no"
                                    :error-messages="errors.serial_no[0]"
                                    @input="errors.serial_no = []"
                                    hint="Ex. 000011"
                                    label="Serial No."
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.description"
                                    :error-messages="errors.description[0]"
                                    @input="errors.description = []"
                                    hint="Ex. 000011"
                                    label="Description"
                                    outlined
                                    clearable
                                ></v-text-field>

                                <AssetCategoryDialogSelector
                                    :selected="
                                        !form.asset_category
                                            ? []
                                            : [...form.asset_category]
                                    "
                                    :dialogAssetCategory="dialogAssetCategory"
                                    @close-dialog="dialogAssetCategory = false"
                                    @on-select="onSelectAssetCategory"
                                >
                                    <template v-slot:openDialog="{ on, attrs }">
                                        <v-text-field
                                            :value="
                                                form.asset_category
                                                    ? form.asset_category.name
                                                    : ''
                                            "
                                            :error-messages="
                                                errors.asset_category_id
                                            "
                                            @input="
                                                errors.asset_category_id = []
                                            "
                                            label="Asset Category"
                                            readonly
                                            outlined
                                            class="d-flex justify-center align-center"
                                            v-bind="attrs"
                                            v-on="on"
                                        ></v-text-field>
                                    </template>
                                </AssetCategoryDialogSelector>

                                <ManufacturerDialogSelector
                                    :selected="
                                        !form.manufacturer
                                            ? []
                                            : [...form.manufacturer]
                                    "
                                    :dialogManufacturer="dialogManufacturer"
                                    @close-dialog="dialogManufacturer = false"
                                    @on-select="onSelectManufacturer"
                                >
                                    <template v-slot:openDialog="{ on, attrs }">
                                        <v-text-field
                                            :value="
                                                form.manufacturer
                                                    ? form.manufacturer.name
                                                    : ''
                                            "
                                            :error-messages="
                                                errors.manufacturer_id
                                            "
                                            @input="errors.manufacturer_id = []"
                                            label="Manufacturer"
                                            readonly
                                            outlined
                                            class="d-flex justify-center align-center"
                                            v-bind="attrs"
                                            v-on="on"
                                        ></v-text-field>
                                    </template>
                                </ManufacturerDialogSelector>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6">
                <v-card flat>
                    <v-card-title>
                        Purchase Information
                    </v-card-title>
                    <v-card-text>
                        <v-row class="d-flex justify-center">
                            <v-col cols="12">
                                <SupplierDialogSelector
                                    :selected="
                                        !form.supplier ? [] : [...form.supplier]
                                    "
                                    :dialogSupplier="dialogSupplier"
                                    @close-dialog="dialogSupplier = false"
                                    @on-select="onSelectSupplier"
                                >
                                    <template v-slot:openDialog="{ on, attrs }">
                                        <v-text-field
                                            :value="
                                                form.supplier
                                                    ? form.supplier.name
                                                    : ''
                                            "
                                            :error-messages="errors.supplier_id"
                                            @input="errors.supplier_id = []"
                                            label="Supplier"
                                            readonly
                                            outlined
                                            class="d-flex justify-center align-center"
                                            v-bind="attrs"
                                            v-on="on"
                                        ></v-text-field>
                                    </template>
                                </SupplierDialogSelector>
                                <!-- <v-text-field
                                    v-model="form.purchased_date"
                                    :error-messages="errors.purchased_date[0]"
                                    @input="errors.purchased_date = []"
                                    hint="Ex. 000011"
                                    label="Purchase Date"
                                    outlined
                                    clearable
                                ></v-text-field> -->
                                <v-dialog
                                    ref="dialog"
                                    v-model="purchased_dateModal"
                                    :return-value.sync="form.purchased_date"
                                    persistent
                                    width="290px"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                            v-model="form.purchased_date"
                                            label="Purchased Date"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                            outlined
                                            hint="Ex. 2000-01-01"
                                            :error-messages="
                                                errors.purchased_date[0]
                                            "
                                            @input="errors.purchased_date = []"
                                            clearable
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="form.purchased_date"
                                        :max="maxDate"
                                        scrollable
                                        @input="errors.purchased_date = []"
                                    >
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="purchased_dateModal = false"
                                        >
                                            Cancel
                                        </v-btn>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="
                                                $refs.dialog.save(
                                                    form.purchased_date
                                                )
                                            "
                                        >
                                            OK
                                        </v-btn>
                                    </v-date-picker>
                                </v-dialog>
                                <v-text-field
                                    v-model="form.purchased_cost"
                                    :error-messages="errors.purchased_cost[0]"
                                    @input="errors.purchased_cost = []"
                                    hint="Ex. 000011"
                                    label="Purchase Cost"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <!-- <v-text-field
                                    v-model="form.warranty_date"
                                    :error-messages="
                                        errors.warranty_start_date[0]
                                    "
                                    @input="errors.warranty_start_date = []"
                                    hint="Ex. 000011"
                                    label="Warranty Date"
                                    outlined
                                    clearable
                                ></v-text-field> -->
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
                                            :error-messages="
                                                errors.warranty_start_date
                                            "
                                            @input="
                                                errors.warranty_start_date = []
                                            "
                                            label="Warranty"
                                            readonly
                                            outlined
                                            v-bind="attrs"
                                            v-on="on"
                                            clearable
                                        ></v-text-field>
                                    </template>
                                </XDateRangePicker>
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
import moment from "moment";
import AssetCategoryDialogSelector from "../../components/selectors/AssetCategoryDialogSelector.vue";
import ManufacturerDialogSelector from "../../components/selectors/ManufacturerDialogSelector.vue";
import SupplierDialogSelector from "../../components/selectors/SupplierDialogSelector.vue";
import XDateRangePicker from "../../components/X-DateRangePicker.vue";

export default {
    props: {
        licenseForm: {
            type: Object,
            default: () => {
                return {
                    code: "",
                    slug: "",
                    reference_no: "",
                    serial_no: "",
                    description: "",
                    purchased_date: "",
                    purchased_cost: "",
                    warranty_start_date: "",
                    warranty_end_date: "",
                    supplier: "",
                    manufacturer: "",
                    asset_category: "",
                    assigned_user_id: "",
                    assigned_location_id: "",
                    assigned_asset_id: "",
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
                    serial_no: [],
                    description: [],
                    purchased_date: [],
                    purchased_cost: [],
                    warranty_start_date: [],
                    warranty_end_date: [],
                    supplier_id: [],
                    manufacturer_id: [],
                    asset_category_id: [],
                    assigned_user_id: [],
                    assigned_location_id: [],
                    assigned_asset_id: []
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
                    serial_no: [],
                    description: [],
                    purchased_date: [],
                    purchased_cost: [],
                    warranty_start_date: [],
                    warranty_end_date: [],
                    supplier_id: [],
                    manufacturer_id: [],
                    asset_category_id: [],
                    assigned_user_id: [],
                    assigned_location_id: [],
                    assigned_asset_id: []
                };
            }
        }
    },
    components: {
        AssetCategoryDialogSelector,
        ManufacturerDialogSelector,
        SupplierDialogSelector,
        XDateRangePicker
    },
    data() {
        return {
            dialogAssetCategory: false,
            dialogManufacturer: false,
            dialogSupplier: false,
            purchased_dateModal: false,
            valid: false,
            form: {
                code: "",
                slug: "",
                reference_no: "",
                serial_no: "",
                description: "",
                purchased_date: "",
                purchased_cost: "",
                warranty_start_date: "",
                warranty_end_date: "",
                supplier: "",
                manufacturer: "",
                asset_category: "",
                assigned_user_id: "",
                assigned_location_id: "",
                assigned_asset_id: "",
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

            console.log(this.form);

            let newForm = {
                ...this.form,
                ...{ asset_category_id: this.form.asset_category.id },
                ...{ manufacturer_id: this.form.manufacturer.id },
                ...{ supplier_id: this.form.supplier.id }
            };

            if (!newForm.is_active) {
                newForm.is_active = false;
            }

            newForm.warranty_start_date = newForm.date_range
                ? newForm.date_range[0]
                : null;
            newForm.warranty_end_date = newForm.date_range
                ? newForm.date_range[1]
                : null;
            this.$emit("on-save", newForm);
        },
        onSelectAssetCategory(e) {
            this.dialogAssetCategory = false;
            this.errors.asset_category_id = [];

            if (e == null || e == undefined) {
                this.form.asset_category = null;
                return;
            }

            this.form.asset_category = e[0];
            this.dialogAssetCategory = false;
        },
        onSelectManufacturer(e) {
            this.dialogManufacturer = false;
            this.errors.manufacturer_id = [];

            if (e == null || e == undefined) {
                this.form.manufacturer = null;
                return;
            }

            this.form.manufacturer = e[0];
            this.dialogManufacturer = false;
        },
        onSelectSupplier(e) {
            this.dialogSupplier = false;
            this.errors.supplier_id = [];

            if (e == null || e == undefined) {
                this.form.supplier = null;
                return;
            }

            this.form.supplier = e[0];
            this.dialogSupplier = false;
        },
        updateDates(e) {
            this.form.date_range = e;
        }
    },
    computed: {
        warranty_date() {
            return this.warranty_start_date + "/" + this.warranty_end_date;
        },
        maxDate() {
            return moment().format("YYYY-MM-DD");
        },
        formattedDateRange() {
            let start_date = moment(this.form.date_range[0]).format(
                "MMM DD, YYYY"
            );
            let end_date = moment(this.form.date_range[1]).format(
                "MMM DD, YYYY"
            );

            if (JSON.stringify(start_date) == JSON.stringify(end_date)) {
                return start_date;
            }

            if (JSON.stringify(end_date) == null) {
                return start_date;
            }

            return `${start_date} ~ ${end_date}`;
        }
    },
    watch: {
        licenseForm: {
            immediate: true,
            handler(newValue, oldValue) {
                this.form = newValue;
            }
        }
    }
};
</script>
