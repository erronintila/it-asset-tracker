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
                                    v-model="form.profile.name"
                                    label="Name"
                                    outlined
                                    clearable
                                    hint="Ex. XYZ Company"
                                    :error-messages="errors.name[0]"
                                    @input="errors.name = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.email"
                                    label="Email Address"
                                    outlined
                                    clearable
                                    hint="Ex. sample@sample.com"
                                    :error-messages="errors.email[0]"
                                    @input="errors.email = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.profile.contact_person"
                                    label="Contact Person"
                                    outlined
                                    clearable
                                    hint="Ex. Juan Dela Cruz"
                                    :error-messages="errors.contact_person[0]"
                                    @input="errors.contact_person = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.profile.phone1"
                                    label="Phone No. (1)"
                                    outlined
                                    clearable
                                    hint="Ex. 09XXXXXXXXX"
                                    :error-messages="errors.contact_person[0]"
                                    @input="errors.contact_person = []"
                                    type="number"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.profile.phone2"
                                    label="Phone No. (2)"
                                    outlined
                                    clearable
                                    hint="Ex. 09XXXXXXXXX"
                                    :error-messages="errors.contact_person[0]"
                                    @input="errors.contact_person = []"
                                    type="number"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.profile.fax"
                                    label="Fax"
                                    outlined
                                    clearable
                                    hint="Ex. 1 323 555 1234"
                                    :error-messages="errors.fax[0]"
                                    @input="errors.fax = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.profile.website"
                                    label="Website"
                                    outlined
                                    clearable
                                    hint="Ex. www.sample.com"
                                    :error-messages="errors.website[0]"
                                    @input="errors.website = []"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" md="4">
                <v-card flat>
                    <v-card-title>
                        Address Information
                    </v-card-title>
                    <v-card-text>
                        <v-row class="d-flex justify-center">
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form.profile.address"
                                    label="Address"
                                    outlined
                                    clearable
                                    hint="Ex. Block 16 Lot 4 XYZ Subdivision"
                                    :error-messages="errors.address[0]"
                                    @input="errors.address = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.profile.street"
                                    label="Street"
                                    outlined
                                    clearable
                                    hint="Ex. Balete Street"
                                    :error-messages="errors.street[0]"
                                    @input="errors.street = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.profile.district"
                                    label="District"
                                    outlined
                                    clearable
                                    hint="Ex. Barangay Poblacion"
                                    :error-messages="errors.district[0]"
                                    @input="errors.district = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.profile.city"
                                    label="City"
                                    outlined
                                    clearable
                                    hint="Ex. General Santos City"
                                    :error-messages="errors.city[0]"
                                    @input="errors.city = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.profile.province"
                                    label="Province"
                                    outlined
                                    clearable
                                    hint="South Cotabato"
                                    :error-messages="errors.province[0]"
                                    @input="errors.province = []"
                                ></v-text-field>
                                <v-combobox
                                    v-model="form.profile.country"
                                    label="Country"
                                    outlined
                                    clearable
                                    :items="['Philippines']"
                                    :error-messages="errors.country[0]"
                                    @input="errors.country = []"
                                ></v-combobox>
                                <v-text-field
                                    v-model="form.profile.postal_code"
                                    label="Postal Code"
                                    outlined
                                    clearable
                                    hint="Ex. 9500"
                                    type="number"
                                    @input="errors.postal_code = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.profile.latitude"
                                    label="Latitude"
                                    outlined
                                    clearable
                                    hint="Ex. 6.1164 N"
                                    :error-messages="errors.latitude[0]"
                                    @input="errors.latitude = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.profile.longitude"
                                    label="Longitude"
                                    outlined
                                    clearable
                                    hint="Ex. 125.1716 E"
                                    :error-messages="errors.longitude[0]"
                                    @input="errors.longitude = []"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" md="4">
                <v-card flat>
                    <v-card-title>
                        Other Information
                    </v-card-title>
                    <v-card-text>
                        <v-row class="d-flex justify-center">
                            <v-col cols="12">
                                <v-select
                                    v-model="form.profile.organization_type"
                                    label="Organization Type"
                                    :items="['walkin', 'private', 'government']"
                                    outlined
                                    clearable
                                    :error-messages="
                                        errors.organization_type[0]
                                    "
                                    @input="errors.organization_type = []"
                                >
                                </v-select>
                                <LocationDialogSelector
                                    :selected="
                                        !form.profile.location
                                            ? []
                                            : [...form.profile.location]
                                    "
                                    @on-select="onSelectLocation"
                                >
                                    <template v-slot:openDialog="{ on, attrs }">
                                        <v-text-field
                                            :value="
                                                form.profile.location
                                                    ? form.profile.location.name
                                                    : ''
                                            "
                                            :error-messages="errors.location_id"
                                            @input="errors.location_id = []"
                                            label="Location"
                                            readonly
                                            outlined
                                            class="d-flex justify-center align-center"
                                            v-bind="attrs"
                                            v-on="on"
                                        ></v-text-field>
                                    </template>
                                </LocationDialogSelector>
                                <v-textarea
                                    v-model="form.notes"
                                    label="Notes"
                                    outlined
                                    clearable
                                    rows="3"
                                    :error-messages="errors.notes[0]"
                                    @input="errors.notes = []"
                                ></v-textarea>
                                <v-sheet class="ml-4">
                                    <v-switch
                                        v-model="form.is_active"
                                        inset
                                        label="Active"
                                    ></v-switch>
                                </v-sheet>
                                <v-sheet class="ml-4">
                                    <v-switch
                                        v-model="form.profile.is_company"
                                        inset
                                        label="Company"
                                    ></v-switch>
                                </v-sheet>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-row>
                            <v-spacer></v-spacer>
                            <v-col class="d-flex justify-end">
                                <v-btn
                                    color="primary"
                                    @click="onSave"
                                    class="mr-2"
                                    large
                                >
                                    Save
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-form>
</template>

<script>
import LocationDialogSelector from "../../components/selectors/LocationDialogSelector.vue";

export default {
    props: {
        customerForm: {
            type: Object,
            default: () => {
                return {
                    email: "",
                    is_active: true,
                    notes: "",
                    profile: {
                        code: "",
                        slug: "",
                        name: "",
                        contact_person: "",
                        phone1: "",
                        phone2: "",
                        website: "",
                        fax: "",
                        address: "",
                        street: "",
                        district: "",
                        city: "",
                        province: "",
                        country: "",
                        postal_code: "",
                        latitude: "",
                        longitude: "",
                        organization_type: "",
                        is_company: false,
                        location: ""
                    }
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
                    contact_person: [],
                    phone1: [],
                    phone2: [],
                    email: [],
                    website: [],
                    fax: [],
                    address: [],
                    street: [],
                    district: [],
                    city: [],
                    province: [],
                    country: [],
                    postal_code: [],
                    latitude: [],
                    longitude: [],
                    organization_type: [],
                    is_active: [],
                    is_company: [],
                    notes: [],
                    location_id: []
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
                    contact_person: [],
                    phone1: [],
                    phone2: [],
                    email: [],
                    website: [],
                    fax: [],
                    address: [],
                    street: [],
                    district: [],
                    city: [],
                    province: [],
                    country: [],
                    postal_code: [],
                    latitude: [],
                    longitude: [],
                    organization_type: [],
                    is_active: [],
                    is_company: [],
                    notes: [],
                    location_id: []
                };
            }
        }
    },
    components: {
        LocationDialogSelector
    },
    data() {
        return {
            valid: false,
            form: {
                email: "",
                is_active: true,
                notes: "",
                profile: {
                    code: "",
                    slug: "",
                    name: "",
                    contact_person: "",
                    phone1: "",
                    phone2: "",
                    website: "",
                    fax: "",
                    address: "",
                    street: "",
                    district: "",
                    city: "",
                    province: "",
                    country: "",
                    postal_code: "",
                    latitude: "",
                    longitude: "",
                    organization_type: "",
                    is_company: false,
                    location: ""
                }
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
                ...this.form.profile,
                ...this.form,
                // ...{ id: this.form.profile.id },
                ...{ name: this.form.profile.name },
                ...{ profile_id: this.form.profile.id },
                ...{ location_id: this.form.profile.location.id }
            };

            if (!newForm.is_active) {
                newForm.is_active = false;
            }

            this.$emit("on-save", newForm);
        },
        onSelectLocation(e) {
            this.errors.location_id = [];

            if (e == null || e == undefined) {
                this.form.profile.location = null;
                return;
            }

            this.form.profile.location = e[0];
        }
    },
    watch: {
        customerForm: {
            immediate: true,
            handler(newValue, oldValue) {
                this.form = newValue;
            }
        }
    }
};
</script>
