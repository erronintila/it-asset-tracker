<template>
    <div class="d-flex justify-center align-center" style="height:90vh">
        <v-card elevation="0" light width="30rem">
            <v-card-title>
                <v-layout align-center justify-space-between>
                    <h3 class="headline">
                        Register
                    </h3>
                </v-layout>
            </v-card-title>

            <v-card-text>
                <v-form ref="form" v-model="valid">
                    <v-text-field
                        v-model="form.name"
                        label="Name"
                        :rules="rules.name"
                        :error-messages="errors.name"
                        @input="errors = []"
                        @keyup.enter="onRegister"
                        prepend-icon="mdi-account-outline"
                    ></v-text-field>
                    <v-text-field
                        v-model="form.email"
                        label="Email Address"
                        :rules="rules.email"
                        :error-messages="errors.email"
                        @input="errors = []"
                        @keyup.enter="onRegister"
                        type="email"
                        prepend-icon="mdi-email-outline"
                    ></v-text-field>
                    <v-text-field
                        v-model="form.password"
                        label="Password"
                        :rules="rules.password"
                        :error-messages="errors.password"
                        @input="errors = []"
                        @keyup.enter="onRegister"
                        prepend-icon="mdi-lock-outline"
                        :type="show_password ? 'text' : 'password'"
                        :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="show_password = !show_password"
                    ></v-text-field>
                    <v-text-field
                        v-model="form.password_confirmation"
                        label="Confirm Password"
                        :rules="rules.password_confirmation"
                        :error-messages="errors.password_confirmation"
                        @input="errors = []"
                        @keyup.enter="onRegister"
                        prepend-icon="mdi-lock-outline"
                        :type="show_confirm_password ? 'text' : 'password'"
                        :append-icon="
                            show_confirm_password ? 'mdi-eye' : 'mdi-eye-off'
                        "
                        @click:append="
                            show_confirm_password = !show_confirm_password
                        "
                    ></v-text-field>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <div class="d-flex">
                    <v-btn
                        text
                        color="primary"
                        class="mr-4"
                        :to="{ name: 'login' }"
                    >
                        Login
                    </v-btn>
                </div>
                <v-spacer></v-spacer>
                <v-btn color="primary" class="mr-4" dark @click="onRegister">
                    Register
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "login",
    data() {
        return {
            valid: true,
            show_password: false,
            show_confirm_password: false,
            form: {
                name: "",
                email: "",
                password: "",
                password_confirmation: ""
            },
            errors: {
                name: [],
                email: [],
                password: [],
                password_confirmation: []
            },
            rules: {
                name: [v => !!v || "This field is required"],
                email: [
                    v => !!v || "This field is required",
                    v =>
                        !v ||
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,5})+$/.test(v) ||
                        "Invalid Email address"
                ],
                password: [
                    v => !!v || "This field is required",
                    v =>
                        (v && v.length >= 8) ||
                        "Password must have at least 8 characters"
                ],
                password_confirmation: [
                    v => !!v || "This field is required",
                    v =>
                        this.password === this.password_confirmation ||
                        "Password does not match"
                ]
            }
        };
    },
    methods: {
        ...mapActions({
            register: "auth/AUTH_REGISTER"
        }),
        async onRegister() {
            try {
                if (this.$refs.form.validate()) {
                    await this.register(this.form);
                    this.$router.push({ name: "home" });
                }
            } catch (error) {
                this.errors = error.response.data.errors;
                alert(error);
            }
        }
    }
};
</script>
