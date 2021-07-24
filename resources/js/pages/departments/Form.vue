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
                                <v-text-field
                                    v-model="form.name"
                                    label="Name"
                                    outlined
                                    clearable
                                    hint="Ex. Sales And Marketing"
                                    :error-messages="errors.name[0]"
                                    @inputs="errors.name = []"
                                ></v-text-field>
                                <v-text-field
                                    :value="
                                        form.manager ? form.manager.name : ''
                                    "
                                    :error-messages="errors.manager_id"
                                    @input="errors.manager_id = []"
                                    label="Manager"
                                    readonly
                                    outlined
                                    class="d-flex justify-center align-center"
                                >
                                    <template v-slot:append>
                                        <EmployeeDialogSelector
                                            :selected="
                                                !form.manager
                                                    ? []
                                                    : [...form.manager]
                                            "
                                            :dialogManager="dialogManager"
                                            @close-dialog="
                                                dialogManager = false
                                            "
                                            @on-select="onSelectManager"
                                        >
                                            <template v-slot:openDialog>
                                                <v-btn
                                                    color="primary"
                                                    icon
                                                    @click="
                                                        dialogManager = true
                                                    "
                                                >
                                                    <v-icon dark>
                                                        mdi-magnify
                                                    </v-icon>
                                                </v-btn>
                                            </template>
                                        </EmployeeDialogSelector>
                                    </template>
                                </v-text-field>
                                <v-text-field
                                    v-model="form.department_id"
                                    label="Parent Department"
                                    outlined
                                    clearable
                                    hint="Ex. Sales And Marketing"
                                    :error-messages="errors.department_id[0]"
                                    @inputs="errors.department_id = []"
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
import EmployeeDialogSelector from "../../components/selectors/EmployeeDialogSelector.vue";

export default {
    props: {
        title: {
            type: String,
            default: ""
        },
        departmentForm: {
            type: Object,
            default: () => {
                return {
                    code: "",
                    slug: "",
                    name: "",
                    is_active: true,
                    manager: "",
                    department_id: ""
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
                    manager_id: [],
                    department_id: []
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
                    manager_id: [],
                    department_id: []
                };
            }
        }
    },
    components: {
        EmployeeDialogSelector
    },
    data() {
        return {
            dialogManager: false,
            valid: false,
            form: {
                code: "",
                slug: "",
                name: "",
                is_active: true,
                manager: "",
                department_id: ""
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
                manager_id: "",
                department_id: ""
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

            console.log(this.form);

            let newForm = {
                ...this.form,
                ...{ manager_id: this.form.manager.id }
            };

            if (!newForm.is_active) {
                newForm.is_active = false;
            }

            this.$emit("on-save", newForm);
        },
        onCancel() {
            this.onReset();
            this.$emit("on-cancel");
        },
        onSelectManager(e) {
            this.dialogManager = false;
            this.errors.manager_id = [];

            if (e == null || e == undefined) {
                this.form.manager = null;
                return;
            }

            this.form.manager = e[0];
            this.dialogManager = false;
        }
    },
    watch: {
        departmentForm: {
            immediate: true,
            handler(newValue, oldValue) {
                this.form = newValue;
            }
        }
    }
};
</script>
