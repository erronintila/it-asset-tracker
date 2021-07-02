<template>
    <div>
        <v-row class="mb-4">
            <v-col>
                <v-btn icon @click="onBack">
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
            </v-col>
        </v-row>

        <v-form v-model="valid">
            <v-container>
                <v-row>
                    <v-col cols="12" md="6" lg="4">
                        <v-text-field
                            v-model="form.first_name"
                            :rules="rules.name"
                            label="First Name"
                            solo
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6" lg="4">
                        <v-text-field
                            v-model="form.last_name"
                            :rules="rules.name"
                            label="Last Name"
                            solo
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6" lg="4">
                        <v-text-field
                            v-model="form.email"
                            :rules="rules.email"
                            label="E-mail"
                            solo
                            required
                        ></v-text-field>
                    </v-col>

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
