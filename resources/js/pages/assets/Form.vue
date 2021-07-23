<template>
    <v-form ref="form" v-model="valid">
        <v-row class="d-flex justify-center">
            <v-col cols="12" sm="6" md="4">
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
                                    v-model="form.asset_tag"
                                    :error-messages="errors.asset_tag[0]"
                                    @input="errors.asset_tag = []"
                                    hint="Ex. 000011"
                                    label="Asset Tag"
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
                                <v-text-field
                                    :value="
                                        form.asset_category
                                            ? form.asset_category.name
                                            : ''
                                    "
                                    :error-messages="errors.asset_category_id"
                                    @input="errors.asset_category_id = []"
                                    label="Asset Category"
                                    readonly
                                    outlined
                                    class="d-flex justify-center align-center"
                                >
                                    <template v-slot:append>
                                        <AssetCategoryDialogSelector
                                            :selected="
                                                !form.asset_category
                                                    ? []
                                                    : [...form.asset_category]
                                            "
                                            :dialogAssetCategory="
                                                dialogAssetCategory
                                            "
                                            @close-dialog="
                                                dialogAssetCategory = false
                                            "
                                            @on-select="onSelectAssetCategory"
                                        >
                                            <template v-slot:openDialog>
                                                <v-btn
                                                    color="primary"
                                                    icon
                                                    @click="
                                                        dialogAssetCategory = true
                                                    "
                                                >
                                                    <v-icon dark>
                                                        mdi-magnify
                                                    </v-icon>
                                                </v-btn>
                                            </template>
                                        </AssetCategoryDialogSelector>
                                    </template>
                                </v-text-field>
                                <v-text-field
                                    :value="
                                        form.asset_model
                                            ? form.asset_model.name
                                            : ''
                                    "
                                    :error-messages="errors.asset_model_id"
                                    @input="errors.asset_model_id = []"
                                    label="Asset Model"
                                    readonly
                                    outlined
                                    class="d-flex justify-center align-center"
                                >
                                    <template v-slot:append>
                                        <AssetModelDialogSelector
                                            :selected="
                                                !form.asset_model
                                                    ? []
                                                    : [...form.asset_model]
                                            "
                                            :dialogAssetModel="dialogAssetModel"
                                            @close-dialog="
                                                dialogAssetModel = false
                                            "
                                            @on-select="onSelectAssetModel"
                                        >
                                            <template v-slot:openDialog>
                                                <v-btn
                                                    color="primary"
                                                    icon
                                                    @click="
                                                        dialogAssetModel = true
                                                    "
                                                >
                                                    <v-icon dark>
                                                        mdi-magnify
                                                    </v-icon>
                                                </v-btn>
                                            </template>
                                        </AssetModelDialogSelector>
                                    </template>
                                </v-text-field>
                                <v-text-field
                                    :value="
                                        form.manufacturer
                                            ? form.manufacturer.name
                                            : ''
                                    "
                                    :error-messages="errors.manufacturer_id"
                                    @input="errors.manufacturer_id = []"
                                    label="Manufacturer"
                                    readonly
                                    outlined
                                    class="d-flex justify-center align-center"
                                >
                                    <template v-slot:append>
                                        <ManufacturerDialogSelector
                                            :selected="
                                                !form.manufacturer
                                                    ? []
                                                    : [...form.manufacturer]
                                            "
                                            :dialogManufacturer="
                                                dialogManufacturer
                                            "
                                            @close-dialog="
                                                dialogManufacturer = false
                                            "
                                            @on-select="onSelectManufacturer"
                                        >
                                            <template v-slot:openDialog>
                                                <v-btn
                                                    color="primary"
                                                    icon
                                                    @click="
                                                        dialogManufacturer = true
                                                    "
                                                >
                                                    <v-icon dark>
                                                        mdi-magnify
                                                    </v-icon>
                                                </v-btn>
                                            </template>
                                        </ManufacturerDialogSelector>
                                    </template>
                                </v-text-field>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="4">
                <v-card flat>
                    <v-card-title>
                        Purchase Information
                    </v-card-title>
                    <v-card-text>
                        <v-row class="d-flex justify-center">
                            <v-col cols="12">
                                <v-text-field
                                    :value="
                                        form.supplier ? form.supplier.name : ''
                                    "
                                    :error-messages="errors.supplier_id"
                                    @input="errors.supplier_id = []"
                                    label="Supplier"
                                    readonly
                                    outlined
                                    class="d-flex justify-center align-center"
                                >
                                    <template v-slot:append>
                                        <SupplierDialogSelector
                                            :selected="
                                                !form.supplier
                                                    ? []
                                                    : [...form.supplier]
                                            "
                                            :dialogSupplier="dialogSupplier"
                                            @close-dialog="
                                                dialogSupplier = false
                                            "
                                            @on-select="onSelectSupplier"
                                        >
                                            <template v-slot:openDialog>
                                                <v-btn
                                                    color="primary"
                                                    icon
                                                    @click="
                                                        dialogSupplier = true
                                                    "
                                                >
                                                    <v-icon dark>
                                                        mdi-magnify
                                                    </v-icon>
                                                </v-btn>
                                            </template>
                                        </SupplierDialogSelector>
                                    </template>
                                </v-text-field>
                                <v-text-field
                                    v-model="form.purchased_date"
                                    :error-messages="errors.purchased_date[0]"
                                    @input="errors.purchased_date = []"
                                    hint="Ex. 000011"
                                    label="Purchase Date"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.purchased_cost"
                                    :error-messages="errors.purchased_cost[0]"
                                    @input="errors.purchased_cost = []"
                                    hint="Ex. 000011"
                                    label="Purchase Cost"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    hint="Ex. 000011"
                                    label="Received Date"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    hint="Ex. 000011"
                                    label="Received By"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.warranty_date"
                                    :error-messages="
                                        errors.warranty_start_date[0]
                                    "
                                    @input="errors.warranty_start_date = []"
                                    hint="Ex. 000011"
                                    label="Warranty Date"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.sku"
                                    :error-messages="errors.sku[0]"
                                    @input="errors.sku = []"
                                    hint="Ex. 000011"
                                    label="Stock Keeping Unit"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.quantity"
                                    :error-messages="errors.quantity[0]"
                                    @input="errors.quantity = []"
                                    hint="Ex. 000011"
                                    label="Quantity"
                                    outlined
                                    clearable
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="4">
                <v-card flat>
                    <v-card-title>
                        Other Information
                    </v-card-title>
                    <v-card-text>
                        <v-row class="d-flex justify-center">
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form.notes"
                                    :error-messages="errors.notes[0]"
                                    @input="errors.notes = []"
                                    hint="Ex. 000011"
                                    label="Notes"
                                    outlined
                                    clearable
                                ></v-text-field>
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
import AssetModelDialogSelector from "../../components/selectors/AssetModelDialogSelector.vue";
import AssetCategoryDialogSelector from "../../components/selectors/AssetCategoryDialogSelector.vue";
import ManufacturerDialogSelector from "../../components/selectors/ManufacturerDialogSelector.vue";
import SupplierDialogSelector from "../../components/selectors/SupplierDialogSelector.vue";

export default {
    props: {
        assetForm: {
            type: Object,
            default: () => {
                return {
                    code: "",
                    slug: "",
                    reference_no: "",
                    asset_tag: "",
                    serial_no: "",
                    description: "",
                    purchased_date: "",
                    purchased_cost: "",
                    warranty_start_date: "",
                    warranty_end_date: "",
                    sku: "",
                    quantity: "",
                    notes: "",
                    asset_model: "",
                    supplier: "",
                    manufacturer: "",
                    asset_category: "",
                    assigned_to: "",
                    location_id: "",
                    asset_id: ""
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
                    asset_tag: [],
                    serial_no: [],
                    description: [],
                    purchased_date: [],
                    purchased_cost: [],
                    warranty_start_date: [],
                    warranty_end_date: [],
                    sku: [],
                    quantity: [],
                    notes: [],
                    asset_model_id: [],
                    supplier_id: [],
                    manufacturer_id: [],
                    asset_category_id: [],
                    assigned_to: [],
                    location_id: [],
                    asset_id: []
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
                    asset_tag: [],
                    serial_no: [],
                    description: [],
                    purchased_date: [],
                    purchased_cost: [],
                    warranty_start_date: [],
                    warranty_end_date: [],
                    sku: [],
                    quantity: [],
                    notes: [],
                    asset_model_id: [],
                    supplier_id: [],
                    manufacturer_id: [],
                    asset_category_id: [],
                    assigned_to: [],
                    location_id: [],
                    asset_id: []
                };
            }
        }
    },
    data() {
        return {
            dialogAssetModel: false,
            dialogAssetCategory: false,
            dialogManufacturer: false,
            dialogSupplier: false,
            valid: false,
            form: {
                code: "",
                slug: "",
                reference_no: "",
                asset_tag: "",
                serial_no: "",
                description: "",
                purchased_date: "",
                purchased_cost: "",
                warranty_start_date: "",
                warranty_end_date: "",
                sku: "",
                quantity: "",
                notes: "",
                asset_model: "",
                supplier: "",
                manufacturer: "",
                asset_category: "",
                assigned_to: "",
                location_id: "",
                asset_id: ""
            }
        };
    },
    components: {
        AssetModelDialogSelector,
        AssetCategoryDialogSelector,
        ManufacturerDialogSelector,
        SupplierDialogSelector
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
                ...{ asset_model_id: this.form.asset_model.id },
                ...{ asset_category_id: this.form.asset_category.id },
                ...{ manufacturer_id: this.form.manufacturer.id },
                ...{ supplier_id: this.form.supplier.id }
            };

            if (!newForm.is_active) {
                newForm.is_active = false;
            }

            let warranty_dates = this.warranty_date.split("/");
            // this.form.warranty_start_date = warranty_dates[0] ?? null;
            // this.form.warranty_end_date = warranty_dates[1] ?? null;

            newForm.warranty_start_date = null;
            newForm.warranty_end_date = null;

            this.$emit("on-save", newForm);
        },
        onSelectAssetModel(e) {
            this.dialogAssetModel = false;
            this.errors.asset_model_id = [];

            if (e == null || e == undefined) {
                this.form.asset_model = null;
                return;
            }

            this.form.asset_model = e[0];
            this.dialogAssetModel = false;
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
        }
    },
    computed: {
        warranty_date() {
            return this.warranty_start_date + "/" + this.warranty_end_date;
        }
    },
    watch: {
        assetForm: {
            immediate: true,
            handler(newValue, oldValue) {
                this.form = newValue;
            }
        }
    }
};
</script>
