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
                                <v-text-field
                                    v-model="form.name"
                                    label="Name"
                                    outlined
                                    clearable
                                    hint="Ex. Warehouse1"
                                    :error-messages="errors.name[0]"
                                    @input="errors.name = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.address"
                                    label="Address"
                                    outlined
                                    clearable
                                    hint="Ex. Block 16 Lot 4 XYZ Subdivision"
                                    :error-messages="errors.address[0]"
                                    @input="errors.address = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.street"
                                    label="Street"
                                    outlined
                                    clearable
                                    hint="Ex. Balete Street"
                                    :error-messages="errors.street[0]"
                                    @input="errors.street = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.district"
                                    label="District"
                                    outlined
                                    clearable
                                    hint="Ex. Barangay Poblacion"
                                    :error-messages="errors.district[0]"
                                    @input="errors.district = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.city"
                                    label="City"
                                    outlined
                                    clearable
                                    hint="Ex. General Santos City"
                                    :error-messages="errors.city[0]"
                                    @input="errors.city = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.province"
                                    label="Province"
                                    outlined
                                    clearable
                                    hint="South Cotabato"
                                    :error-messages="errors.province[0]"
                                    @input="errors.province = []"
                                ></v-text-field>
                                <v-combobox
                                    v-model="form.country"
                                    label="Country"
                                    outlined
                                    clearable
                                    :items="['Philippines']"
                                    :error-messages="errors.country[0]"
                                    @input="errors.country = []"
                                ></v-combobox>
                                <v-text-field
                                    v-model="form.postal_code"
                                    label="Postal Code"
                                    outlined
                                    clearable
                                    hint="Ex. 9500"
                                    type="number"
                                    @input="errors.postal_code = []"
                                ></v-text-field>
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
                                <v-text-field
                                    v-model="form.latitude"
                                    label="Latitude"
                                    outlined
                                    clearable
                                    hint="Ex. 6.1164 N"
                                    :error-messages="errors.latitude[0]"
                                    @input="errors.latitude = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.longitude"
                                    label="Longitude"
                                    outlined
                                    clearable
                                    hint="Ex. 125.1716 E"
                                    :error-messages="errors.longitude[0]"
                                    @input="errors.longitude = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model.number="form.asset_id"
                                    label="Parent Asset"
                                    outlined
                                    clearable
                                    :error-messages="errors.asset_id[0]"
                                    @input="errors.asset_id = []"
                                ></v-text-field>
                                <v-textarea
                                    v-model="form.notes"
                                    label="Notes"
                                    outlined
                                    clearable
                                    rows="3"
                                    :error-messages="errors.notes[0]"
                                    @input="errors.notes = []"
                                ></v-textarea>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-sheet class="ml-4">
                            <v-switch
                                v-model="form.is_active"
                                inset
                                label="Active"
                            ></v-switch>
                        </v-sheet>
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
        assetForm: {
            type: Object,
            default: () => {
                return {
                    code: "",
                    slug: "",
                    name: "",
                    address: "",
                    street: "",
                    district: "",
                    city: "",
                    province: "",
                    country: "",
                    postal_code: "",
                    latitude: "",
                    longitude: "",
                    is_active: true,
                    notes: "",
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
                    name: [],
                    address: [],
                    street: [],
                    district: [],
                    city: [],
                    province: [],
                    country: [],
                    postal_code: [],
                    latitude: [],
                    longitude: [],
                    is_active: [],
                    notes: [],
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
                    name: [],
                    address: [],
                    street: [],
                    district: [],
                    city: [],
                    province: [],
                    country: [],
                    postal_code: [],
                    latitude: [],
                    longitude: [],
                    is_active: [],
                    notes: [],
                    asset_id: []
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
                name: "",
                address: "",
                street: "",
                district: "",
                city: "",
                province: "",
                country: "",
                postal_code: "",
                latitude: "",
                longitude: "",
                is_active: true,
                asset_id: ""
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

            this.$emit("on-save", this.form);
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
