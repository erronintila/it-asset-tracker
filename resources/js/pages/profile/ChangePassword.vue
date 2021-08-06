<template>
    <v-dialog v-model="dialog" persistent width="500">
        <template v-slot:activator="{ on, attrs }">
            <slot name="openDialog" v-bind="{ attrs, on }"> </slot>
        </template>

        <v-card>
            <v-card-text>
                <v-form ref="form_password">
                    <v-row class="d-flex justify-center">
                        <v-col>
                            <v-card flat>
                                <v-card-title>
                                    Update Password
                                </v-card-title>
                                <v-card-text>
                                    <v-row class="d-flex justify-center">
                                        <v-col cols="12">
                                            <v-text-field
                                                v-model="old_password"
                                                :error-messages="
                                                    errors.old_password[0]
                                                "
                                                @input="
                                                    () => {
                                                        errors.old_password = [];
                                                    }
                                                "
                                                label="Old Password"
                                                name="password"
                                                :type="
                                                    showOldPassword
                                                        ? 'text'
                                                        : 'password'
                                                "
                                                :append-icon="
                                                    showOldPassword
                                                        ? 'mdi-eye'
                                                        : 'mdi-eye-off'
                                                "
                                                @click:append="
                                                    showOldPassword = !showOldPassword
                                                "
                                                outlined
                                            ></v-text-field>
                                            <v-text-field
                                                v-model="password"
                                                :error-messages="
                                                    errors.password
                                                "
                                                @input="
                                                    () => {
                                                        errors.password = [];
                                                    }
                                                "
                                                label="New Password"
                                                name="password"
                                                :type="
                                                    showNewPassword
                                                        ? 'text'
                                                        : 'password'
                                                "
                                                :append-icon="
                                                    showNewPassword
                                                        ? 'mdi-eye'
                                                        : 'mdi-eye-off'
                                                "
                                                @click:append="
                                                    showNewPassword = !showNewPassword
                                                "
                                                outlined
                                            ></v-text-field>
                                            <v-text-field
                                                v-model="password_confirmation"
                                                :rules="
                                                    rules.password_confirmation
                                                "
                                                :error-messages="
                                                    errors.password_confirmation
                                                "
                                                @input="
                                                    () => {
                                                        errors.password_confirmation = [];
                                                    }
                                                "
                                                label="Re-type Password"
                                                name="confirm_password"
                                                :type="
                                                    showRetypePassword
                                                        ? 'text'
                                                        : 'password'
                                                "
                                                :append-icon="
                                                    showRetypePassword
                                                        ? 'mdi-eye'
                                                        : 'mdi-eye-off'
                                                "
                                                @click:append="
                                                    showRetypePassword = !showRetypePassword
                                                "
                                                outlined
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="primary"
                                        class="mr-2"
                                        large
                                        @click="closePasswordDialog"
                                    >
                                        Cancel
                                    </v-btn>
                                    <v-btn
                                        color="primary"
                                        class="mr-2"
                                        large
                                        @click="onSave"
                                    >
                                        Save
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import UserDataService from "../../services/UserDataService";
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            showOldPassword: false,
            showNewPassword: false,
            showRetypePassword: false,
            dialog: false,
            old_password: "",
            password: "",
            password_confirmation: "",
            rules: {
                password_confirmation: [
                    v => !!v || "Retype password is required",
                    v =>
                        this.password === this.password_confirmation ||
                        "Passwords do not match"
                ]
            },
            errors: {
                old_password: [],
                password: [],
                password_confirmation: []
            }
        };
    },
    methods: {
        onSave() {
            if (this.$refs.form_password.validate()) {
                UserDataService.updatePassword(this.user.id, {
                    old_password: this.old_password,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                })
                    .then(response => {
                        alert(response.data.message);
                        this.dialog = false;
                        this.old_password = "";
                        this.password = "";
                        this.password_confirmation = "";
                        this.$refs.form_password.resetValidation();
                    })
                    .catch(error => {
                        this.errors = {
                            ...this.errors,
                            ...error.response.data.errors
                        };
                    });
            }
        },
        closePasswordDialog() {
            this.dialog = false;
            this.old_password = "";
            this.password = "";
            this.password_confirmation = "";
            this.$refs.form_password.resetValidation();
        }
    },
    computed: {
        ...mapGetters({
            user: "auth/user" ?? { profile: null },
            authenticated: "auth/authenticated" ?? null
        })
    }
};
</script>
