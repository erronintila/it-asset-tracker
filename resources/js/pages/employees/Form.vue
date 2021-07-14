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
                                    v-model="form.department_id"
                                    label="Department"
                                    outlined
                                    clearable
                                    hint="Ex. Sales and Marketing"
                                    :error-messages="errors.department_id[0]"
                                    @input="errors.department_id = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.job_title"
                                    label="Job Title"
                                    outlined
                                    clearable
                                    hint="Ex. Sales Representative"
                                    :error-messages="errors.job_title[0]"
                                    @input="errors.job_title = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.first_name"
                                    label="First Name"
                                    outlined
                                    clearable
                                    hint="Ex. Juan"
                                    :error-messages="errors.first_name[0]"
                                    @input="errors.first_name = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.middle_name"
                                    label="Middle Name"
                                    outlined
                                    clearable
                                    hint="Ex. Dela Cruz"
                                    :error-messages="errors.middle_name[0]"
                                    @input="errors.middle_name = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.last_name"
                                    label="Last Name"
                                    outlined
                                    clearable
                                    hint="Ex. Dela Cruz"
                                    :error-messages="errors.last_name[0]"
                                    @input="errors.last_name = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.suffix"
                                    label="Suffix"
                                    outlined
                                    clearable
                                    hint="Ex. Jr."
                                    :error-messages="errors.suffix[0]"
                                    @input="errors.suffix = []"
                                ></v-text-field>
                                <v-select
                                    v-model="form.gender"
                                    :items="['Male', 'Female']"
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
                                            v-model="form.birthdate"
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
                                        v-model="form.birthdate"
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
                                                    form.birthdate
                                                )
                                            "
                                        >
                                            OK
                                        </v-btn>
                                    </v-date-picker>
                                </v-dialog>
                                <v-text-field
                                    v-model="form.location_id"
                                    label="Location"
                                    outlined
                                    clearable
                                    hint="Ex. Office 1"
                                    :error-messages="errors.location_id[0]"
                                    @input="errors.location_id = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.mobile_phone"
                                    label="Mobile Phone No."
                                    outlined
                                    clearable
                                    type="number"
                                    hint="Ex. 09XXXXXXXXX"
                                    :error-messages="errors.mobile_phone[0]"
                                    @input="errors.mobile_phone = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.home_phone"
                                    label="Home Phone No."
                                    outlined
                                    clearable
                                    type="number"
                                    hint="Ex. 09XXXXXXXXX"
                                    :error-messages="errors.home_phone[0]"
                                    @input="errors.home_phone = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.business_phone"
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
                                    v-model="form.image"
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
export default {
    props: {
        employeeForm: {
            type: Object,
            default: () => {
                return {
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
                    is_active: true,
                    location_id: "",
                    department_id: "",
                    notes: "",
                    email: "",
                    username: "",
                    image: ""
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
            form: {
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
                is_active: true,
                location_id: "",
                department_id: "",
                notes: "",
                email: "",
                username: "",
                image: ""
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
        employeeForm: {
            immediate: true,
            handler(newValue, oldValue) {
                this.form = newValue;
            }
        }
    }
};
</script>
