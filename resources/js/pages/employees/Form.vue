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
                                    v-model="form.profile.department_id"
                                    label="Department"
                                    outlined
                                    clearable
                                    hint="Ex. Sales and Marketing"
                                    :error-messages="errors.department_id[0]"
                                    @input="errors.department_id = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.profile.job_title"
                                    label="Job Title"
                                    outlined
                                    clearable
                                    hint="Ex. Sales Representative"
                                    :error-messages="errors.job_title[0]"
                                    @input="errors.job_title = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.profile.first_name"
                                    label="First Name"
                                    outlined
                                    clearable
                                    hint="Ex. Juan"
                                    :error-messages="errors.first_name[0]"
                                    @input="errors.first_name = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.profile.middle_name"
                                    label="Middle Name"
                                    outlined
                                    clearable
                                    hint="Ex. Dela Cruz"
                                    :error-messages="errors.middle_name[0]"
                                    @input="errors.middle_name = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.profile.last_name"
                                    label="Last Name"
                                    outlined
                                    clearable
                                    hint="Ex. Dela Cruz"
                                    :error-messages="errors.last_name[0]"
                                    @input="errors.last_name = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.profile.suffix"
                                    label="Suffix"
                                    outlined
                                    clearable
                                    hint="Ex. Jr."
                                    :error-messages="errors.suffix[0]"
                                    @input="errors.suffix = []"
                                ></v-text-field>
                                <v-select
                                    v-model="form.profile.gender"
                                    :items="['male', 'female']"
                                    label="Gender"
                                    outlined
                                    :error-messages="errors.gender[0]"
                                    @input="errors.gender = []"
                                ></v-select>
                                <v-dialog
                                    ref="dialog"
                                    v-model="birthdateModal"
                                    :return-value.sync="form.birthdate"
                                    persistent
                                    width="290px"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                            v-model="form.profile.birthdate"
                                            label="Birthdate"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                            outlined
                                            hint="Ex. 2000-01-01"
                                            :error-messages="
                                                errors.birthdate[0]
                                            "
                                            @input="errors.birthdate = []"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="form.profile.birthdate"
                                        :max="maxDate"
                                        scrollable
                                        @input="errors.birthdate = []"
                                    >
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="birthdateModal = false"
                                        >
                                            Cancel
                                        </v-btn>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="
                                                $refs.dialog.save(
                                                    form.profile.birthdate
                                                )
                                            "
                                        >
                                            OK
                                        </v-btn>
                                    </v-date-picker>
                                </v-dialog>
                                <v-text-field
                                    v-model="form.profile.location_id"
                                    label="Location"
                                    outlined
                                    clearable
                                    hint="Ex. Office 1"
                                    :error-messages="errors.location_id[0]"
                                    @input="errors.location_id = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.profile.mobile_phone"
                                    label="Mobile Phone No."
                                    outlined
                                    clearable
                                    type="number"
                                    hint="Ex. 09XXXXXXXXX"
                                    :error-messages="errors.mobile_phone[0]"
                                    @input="errors.mobile_phone = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.profile.home_phone"
                                    label="Home Phone No."
                                    outlined
                                    clearable
                                    type="number"
                                    hint="Ex. 09XXXXXXXXX"
                                    :error-messages="errors.home_phone[0]"
                                    @input="errors.home_phone = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.profile.business_phone"
                                    label="Work Phone No."
                                    outlined
                                    clearable
                                    type="number"
                                    hint="Ex. 09XXXXXXXXX"
                                    :error-messages="errors.business_phone[0]"
                                    @input="errors.business_phone = []"
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
                        Account Information
                    </v-card-title>
                    <v-card-text>
                        <v-row class="d-flex justify-center">
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form.email"
                                    label="Email"
                                    outlined
                                    clearable
                                    hint="Ex. juandelacruz@gmail.com"
                                    :error-messages="errors.email[0]"
                                    @input="errors.email = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.username"
                                    label="Username"
                                    outlined
                                    clearable
                                    hint="Ex. juandelacruz"
                                    :error-messages="errors.username[0]"
                                    @input="errors.username = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.profile.image"
                                    label="Image"
                                    outlined
                                    clearable
                                    :error-messages="errors.image[0]"
                                    @input="errors.image = []"
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
import moment from "moment";
export default {
    props: {
        employeeForm: {
            type: Object,
            default: () => {
                return {
                    username: "",
                    email: "",
                    is_active: true,
                    notes: "",
                    profile: {
                        code: "",
                        slug: "",
                        first_name: "",
                        middle_name: "",
                        last_name: "",
                        suffix: "",
                        gender: "",
                        birthdate: "",
                        business_phone: "",
                        home_phone: "",
                        mobile_phone: "",
                        job_title: "",
                        address: "",
                        street: "",
                        district: "",
                        city: "",
                        province: "",
                        country: "",
                        postal_code: "",
                        latitude: "",
                        longitude: "",
                        location_id: "",
                        department_id: "",
                        image: ""
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
                    first_name: [],
                    middle_name: [],
                    last_name: [],
                    suffix: [],
                    gender: [],
                    birthdate: [],
                    business_phone: [],
                    home_phone: [],
                    mobile_phone: [],
                    job_title: [],
                    address: [],
                    street: [],
                    district: [],
                    city: [],
                    province: [],
                    country: [],
                    postal_code: [],
                    latitude: [],
                    longitude: [],
                    is_active: true,
                    location_id: [],
                    department_id: [],
                    notes: [],
                    email: [],
                    username: [],
                    image: []
                };
            }
        },
        errors: {
            type: Object,
            default: () => {
                return {
                    code: [],
                    slug: [],
                    first_name: [],
                    middle_name: [],
                    last_name: [],
                    suffix: [],
                    gender: [],
                    birthdate: [],
                    business_phone: [],
                    home_phone: [],
                    mobile_phone: [],
                    job_title: [],
                    address: [],
                    street: [],
                    district: [],
                    city: [],
                    province: [],
                    country: [],
                    postal_code: [],
                    latitude: [],
                    longitude: [],
                    is_active: true,
                    location_id: [],
                    department_id: [],
                    notes: [],
                    email: [],
                    username: [],
                    image: []
                };
            }
        }
    },
    data() {
        return {
            valid: false,
            birthdateModal: false,
            form: {
                username: "",
                email: "",
                is_active: true,
                notes: "",
                profile: {
                    code: "",
                    slug: "",
                    first_name: "",
                    middle_name: "",
                    last_name: "",
                    suffix: "",
                    gender: "",
                    birthdate: "",
                    business_phone: "",
                    home_phone: "",
                    mobile_phone: "",
                    job_title: "",
                    address: "",
                    street: "",
                    district: "",
                    city: "",
                    province: "",
                    country: "",
                    postal_code: "",
                    latitude: "",
                    longitude: "",
                    location_id: "",
                    department_id: "",
                    image: ""
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
                ...{ name: this.form.profile.name },
                ...{ profile_id: this.form.profile.id }
            };

            console.log(newForm);

            if (!newForm.is_active) {
                newForm.is_active = false;
            }

            this.$emit("on-save", newForm);
        }
    },
    computed: {
        maxDate() {
            return moment()
                .subtract(18, "year")
                .format("YYYY-MM-DD");
        }
    },
    watch: {
        employeeForm: {
            immediate: true,
            handler(newValue, oldValue) {
                this.form = newValue;
            }
        }
    }
};
</script>
