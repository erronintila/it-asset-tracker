<template>
    <div class="d-flex justify-center align-center" style="height:90vh">
        <v-card elevation="0" light width="30rem">
            <v-card-title>
                <h3 class="headline">
                    Login
                </h3>
            </v-card-title>

            <v-card-text>
                <v-form ref="form" v-model="valid">
                    <!-- <v-text-field
                        v-model="form.email"
                        label="Email Address"
                        :rules="rules.email"
                        :error-messages="errors.email"
                        @input="errors = []"
                        @keyup.enter="onLogin"
                        type="email"
                        prepend-icon="mdi-email-outline"
                    ></v-text-field> -->
                    <v-text-field
                        v-model="form.username"
                        label="Username"
                        :rules="rules.username"
                        :error-messages="errors.username"
                        @input="errors = []"
                        @keyup.enter="onLogin"
                        prepend-icon="mdi-account-outline"
                    ></v-text-field>
                    <v-text-field
                        v-model="form.password"
                        label="Password"
                        :rules="rules.password"
                        :error-messages="errors.password"
                        @input="errors = []"
                        @keyup.enter="onLogin"
                        :type="show_password ? 'text' : 'password'"
                        prepend-icon="mdi-lock-outline"
                        :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="show_password = !show_password"
                    ></v-text-field>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <div class="d-flex">
                    <v-btn
                        text
                        color="primary"
                        class="mr-4"
                        :to="{ name: 'register' }"
                    >
                        Register
                    </v-btn>
                </div>
                <v-spacer></v-spacer>
                <v-btn color="primary" class="mr-4" dark @click="onLogin">
                    Login
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
            form: {
                username: "",
                email: "",
                password: ""
            },
            errors: {
                username: [],
                email: [],
                password: []
            },
            rules: {
                username: [v => !!v || "This field is required"],
                email: [
                    v => !!v || "This field is required",
                    v =>
                        !v ||
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,5})+$/.test(v) ||
                        "Invalid Email address"
                ],
                password: [v => !!v || "This field is required"]
            }
        };
    },
    methods: {
        ...mapActions({
            login: "auth/AUTH_LOGIN"
        }),
        async onLogin() {
            try {
                if (this.$refs.form.validate()) {
                    await this.login(this.form);
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
