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
                                    hint="Ex. Ipad"
                                    :error-messages="errors.name[0]"
                                    @input="errors.name = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.model_no"
                                    label="Model No."
                                    outlined
                                    clearable
                                    hint="Ex. #18297391"
                                    :error-messages="errors.model_no[0]"
                                    @input="errors.model_no = []"
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.manufacturer_id"
                                    label="Manufacturer"
                                    outlined
                                    clearable
                                    hint="Ex. Apple Inc."
                                    :error-messages="errors.manufacturer_id[0]"
                                    @input="errors.manufacturer_id = []"
                                ></v-text-field>
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
        asset_modelForm: {
            type: Object,
            default: () => {
                return {
                    code: "",
                    slug: "",
                    name: "",
                    model_no: "",
                    is_active: true,
                    manufacturer_id: ""
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
                    model_no: [],
                    is_active: [],
                    manufacturer_id: []
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
                    model_no: [],
                    is_active: [],
                    manufacturer_id: []
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
                model_no: "",
                is_active: true,
                manufacturer_id: ""
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
        asset_modelForm: {
            immediate: true,
            handler(newValue, oldValue) {
                this.form = newValue;
            }
        }
    }
};
</script>
