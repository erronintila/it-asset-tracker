<template>
    <v-form ref="form" v-model="valid">
        <v-row class="d-flex justify-center">
            <v-col>
                <v-card flat>
                    <v-card-title>
                        {{ title }}
                    </v-card-title>
                    <v-card-text>
                        <v-row class="d-flex justify-center">
                            <v-col cols="12">
                                <!-- <v-select
                                    v-model="form.review_category_id"
                                    :items="['maintenance']"
                                    disabled
                                    label="Action Type"
                                    outlined
                                    :error-messages="errors.review_category_id[0]"
                                    @input="errors.review_category_id = []"
                                ></v-select> -->
                                <v-text-field
                                    v-model="form.name"
                                    label="Name"
                                    outlined
                                    clearable
                                    hint="Ex. Sales And Marketing"
                                    :error-messages="errors.name[0]"
                                    @inputs="errors.name = []"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-sheet class="ml-4">
                                    <v-switch
                                        v-model="form.is_active"
                                        inset
                                        label="Active"
                                    ></v-switch>
                                    <v-switch
                                        v-model="form.is_required"
                                        inset
                                        label="Required"
                                    ></v-switch>
                                </v-sheet>
                            </v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="12" md="6" class="d-flex align-center">
                                <v-btn
                                    color="primary"
                                    class="mr-2"
                                    large
                                    @click="onCancel"
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
                            </v-col>
                        </v-row>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-form>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ""
        },
        review_category_id: {
            default: null
        },
        featureForm: {
            type: Object,
            default: () => {
                return {
                    code: "",
                    slug: "",
                    name: "",
                    is_active: true,
                    is_required: true,
                    review_category_id: null
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
                    is_active: [],
                    is_required: [],
                    review_category_id: []
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
                    is_active: [],
                    is_required: [],
                    review_category_id: []
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
                is_active: true,
                is_required: [],
                review_category_id: null
            }
        };
    },
    methods: {
        onReset() {
            this.form = {
                code: "",
                slug: "",
                name: "",
                is_active: true,
                is_required: [],
                review_category_id: null
            };
        },
        onSave() {
            if (!confirm("Do you want to save?")) {
                return;
            }

            if (!this.$refs.form.validate()) {
                alert("An error has occurred.");
                return;
            }

            if (!this.form.is_active) {
                this.form.is_active = false;
            }

            if (!this.form.is_required) {
                this.form.is_required = false;
            }

            this.form.review_category_id = this.review_category_id;

            this.$emit("on-save", this.form);
        },
        onCancel() {
            this.onReset();
            this.$emit("on-cancel");
        }
    },
    watch: {
        featureForm: {
            immediate: true,
            handler(newValue, oldValue) {
                this.form = newValue;
            }
        }
    }
};
</script>
