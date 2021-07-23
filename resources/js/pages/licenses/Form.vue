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
                                <v-text-field
                                    v-model="form.asset_category_id"
                                    :error-messages="
                                        errors.asset_category_id[0]
                                    "
                                    @input="errors.asset_category_id = []"
                                    hint="Ex. 000011"
                                    label="Category"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.manufacturer_id"
                                    :error-messages="errors.manufacturer_id[0]"
                                    @input="errors.manufacturer_id = []"
                                    hint="Ex. 000011"
                                    label="Manufacturer"
                                    outlined
                                    clearable
                                ></v-text-field>
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
                                <v-text-field
                                    v-model="form.supplier_id"
                                    :error-messages="errors.supplier_id[0]"
                                    @input="errors.supplier_id = []"
                                    hint="Ex. 000011"
                                    label="Supplier"
                                    outlined
                                    clearable
                                ></v-text-field>
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
                    supplier_id: "",
                    manufacturer_id: "",
                    asset_category_id: ""
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
                    asset_category_id: []
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
                    asset_category_id: []
                };
            }
        }
    },
    data() {
        return {
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
                supplier_id: "",
                manufacturer_id: "",
                asset_category_id: ""
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

            if (!this.form.is_active) {
                this.form.is_active = false;
            }

            let warranty_dates = this.warranty_date.split("/");
            // this.form.warranty_start_date = warranty_dates[0] ?? null;
            // this.form.warranty_end_date = warranty_dates[1] ?? null;

            this.form.warranty_start_date = null;
            this.form.warranty_end_date = null;

            this.$emit("on-save", this.form);
        }
    },
    computed: {
        warranty_date() {
            return this.warranty_start_date + "/" + this.warranty_end_date;
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
