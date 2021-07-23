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
                                    :value="
                                        form.manufacturer
                                            ? form.manufacturer.name
                                            : ''
                                    "
                                    :error-messages="errors.manufacturer_id"
                                    @input="errors.manufacturer_id = []"
                                    label="Manufacturer"
                                    readonly
                                    outlined
                                    class="d-flex justify-center align-center"
                                >
                                    <template v-slot:append>
                                        <ManufacturerDialogSelector
                                            :selected="
                                                !form.manufacturer
                                                    ? []
                                                    : [...form.manufacturer]
                                            "
                                            :dialogManufacturer="
                                                dialogManufacturer
                                            "
                                            @close-dialog="
                                                dialogManufacturer = false
                                            "
                                            @on-select="onSelectManufacturer"
                                        >
                                            <template v-slot:openDialog>
                                                <v-btn
                                                    color="primary"
                                                    icon
                                                    @click="
                                                        dialogManufacturer = true
                                                    "
                                                >
                                                    <v-icon dark>
                                                        mdi-magnify
                                                    </v-icon>
                                                </v-btn>
                                            </template>
                                        </ManufacturerDialogSelector>
                                    </template>
                                </v-text-field>
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
import ManufacturerDialogSelector from "../../components/selectors/ManufacturerDialogSelector.vue";

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
                    manufacturer: ""
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
    components: {
        ManufacturerDialogSelector
    },
    data() {
        return {
            dialogManufacturer: false,
            valid: false,
            form: {
                code: "",
                slug: "",
                name: "",
                model_no: "",
                is_active: true,
                manufacturer: ""
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

            let newForm = {
                ...this.form,
                ...{ manufacturer_id: this.form.manufacturer.id }
            };

            if (!newForm.is_active) {
                newForm.is_active = false;
            }

            this.$emit("on-save", newForm);
        },
        onSelectManufacturer(e) {
            this.dialogManufacturer = false;
            this.errors.manufacturer_id = [];

            if (e == null || e == undefined) {
                this.form.manufacturer = null;
                return;
            }

            this.form.manufacturer = e[0];
            this.dialogManufacturer = false;
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
