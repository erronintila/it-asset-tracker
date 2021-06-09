<template>
    <div>
        <v-row>
            <v-col class="d-flex align-center">
                <v-btn icon @click="onBack">
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <div class="page-title d-inline mx-3">
                    New Account
                </div>
            </v-col>
        </v-row>

        <div>
            <v-card class="mx-auto">
                <v-card-title
                    class="text-h6 font-weight-regular justify-space-between"
                >
                    <span>{{ currentTitle }}</span>
                    <v-avatar
                        color="primary lighten-2"
                        class="subheading white--text"
                        size="24"
                        v-text="step"
                    ></v-avatar>
                </v-card-title>

                <v-window v-model="step">
                    <v-window-item :value="1">
                        <v-card-text>
                            <v-text-field
                                label="Email"
                                value="john@vuetifyjs.com"
                            ></v-text-field>
                            <span
                                class="text-caption grey--text text--darken-1"
                            >
                                This is the email you will use to login to your
                                Vuetify account
                            </span>
                        </v-card-text>
                    </v-window-item>

                    <v-window-item :value="2">
                        <v-card-text>
                            <v-text-field
                                label="Password"
                                type="password"
                            ></v-text-field>
                            <v-text-field
                                label="Confirm Password"
                                type="password"
                            ></v-text-field>
                            <span
                                class="text-caption grey--text text--darken-1"
                            >
                                Please enter a password for your account
                            </span>
                        </v-card-text>
                    </v-window-item>

                    <v-window-item :value="3">
                        <div class="pa-4 text-center">
                            <v-img
                                class="mb-4"
                                contain
                                height="128"
                                src="https://cdn.vuetifyjs.com/images/logos/v.svg"
                            ></v-img>
                            <h3 class="text-h6 font-weight-light mb-2">
                                Welcome to Vuetify
                            </h3>
                            <span class="text-caption grey--text"
                                >Thanks for signing up!</span
                            >
                        </div>
                    </v-window-item>
                </v-window>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-btn :disabled="step === 1" text @click="step--">
                        Back
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                        :disabled="step === 3"
                        color="primary"
                        depressed
                        @click="step++"
                    >
                        Next
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>

        <v-form v-model="valid">
            <v-container>
                <v-row>
                    <v-col cols="12" md="6" lg="4">
                        <v-text-field
                            label="Company"
                            solo
                            required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="4">
                        <v-text-field
                            label="Department"
                            solo
                            required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="4">
                        <v-text-field
                            label="Job Title"
                            solo
                            required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="4">
                        <v-text-field
                            label="Upload Image"
                            solo
                            required
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" md="6" lg="4">
                        <v-text-field
                            label="First Name"
                            solo
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6" lg="4">
                        <v-text-field
                            label="Middle Name"
                            solo
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6" lg="4">
                        <v-text-field
                            label="Last Name"
                            solo
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6" lg="4">
                        <v-text-field
                            label="Suffix"
                            solo
                            required
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" md="6" lg="4">
                        <v-text-field
                            label="Gender"
                            solo
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6" lg="4">
                        <v-text-field
                            label="Birthdate"
                            solo
                            required
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" md="6" lg="4">
                        <v-text-field
                            label="Business Phone"
                            solo
                            required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="4">
                        <v-text-field
                            label="Home Phone"
                            solo
                            required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="4">
                        <v-text-field
                            label="Mobile Phone"
                            solo
                            required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="4">
                        <v-text-field
                            label="Email"
                            solo
                            required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="4">
                        <v-text-field label="Fax" solo required></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="4">
                        <v-text-field
                            label="Website"
                            solo
                            required
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" md="6" lg="4">
                        <v-text-field
                            label="Username"
                            solo
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6" lg="4">
                        <v-text-field label="Type" solo required></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" class="text-right">
                        <v-btn
                            color="primary"
                            rounded
                            dark
                            @click="onSave"
                            class="text-capitalize"
                        >
                            Save
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            step: 1,
            valid: false,
            form: {
                first_name: "",
                last_name: "",
                email: ""
            },
            errors: {
                first_name: [],
                last_name: [],
                email: []
            },
            rules: {
                name: [
                    v => !!v || "This field is required",
                    v =>
                        v.length <= 10 || "Name must be less than 10 characters"
                ],
                email: [
                    v => !!v || "This field is required",
                    v => /.+@.+/.test(v) || "E-mail must be valid"
                ]
            }
        };
    },
    computed: {
        currentTitle() {
            switch (this.step) {
                case 1:
                    return "Personal Information";
                case 2:
                    return "Contact";
                case 3:
                    return "Address";
                case 4:
                    return "Account";
                default:
                    return "Account created";
            }
        }
    },
    methods: {
        onBack() {
            let result = confirm(
                "Do you want to leave this page? Changes won't be saved."
            );
            if (result) {
                this.$router.go(-1);
            }
        },
        onSave() {
            let result = confirm("Do you want to save?");
            if (result) {
                this.$router.go(-1);
            }
        }
    }
};
</script>

<style scoped>
.page-title {
    font-size: 1.2rem;
    font-weight: 100;
}
</style>
