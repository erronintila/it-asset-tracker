<template>
    <v-dialog persistent v-model="dialog" max-width="500">
        <v-card>
            <v-card-text>
                <Form
                    :title="'Update Department'"
                    :departmentForm="form"
                    @on-save="onSave"
                    @on-cancel="onCancel"
                    :errors="errors"
                ></Form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import Form from "./Form.vue";
import DepartmentDataService from "../../services/DepartmentDataService";

export default {
    name: "DepartmentEdit",
    props: {
        dialogEdit: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ""
        },
        department: {
            type: Object,
            default: () => {}
        }
    },
    components: {
        Form
    },
    data() {
        return {
            dialog: false,
            form: {
                code: "",
                slug: "",
                name: "",
                is_active: true,
                manager: "",
                department_id: ""
            },
            errors: {
                code: [],
                slug: [],
                name: [],
                is_active: [],
                manager_id: [],
                department_id: []
            }
        };
    },
    methods: {
        getData(department) {
            let data = {};

            DepartmentDataService.show(department.id, data)
                .then(response => {
                    this.form = {
                        ...this.form,
                        ...response.data.data
                    };
                })
                .catch(error => {
                    console.log(error);
                    alert("An error has occurred.");
                });
        },
        onSave(value) {
            DepartmentDataService.update(value.id, value)
                .then(response => {
                    alert("Successfully edited.");
                    this.$emit("save-dialog");
                })
                .catch(error => {
                    console.log(error);
                    alert("An error has occurred.");
                    this.errors = {
                        ...this.errors,
                        ...error.response.data.errors
                    };
                });
        },
        onCancel() {
            this.errors = {
                code: [],
                slug: [],
                name: [],
                is_active: [],
                manager_id: [],
                department_id: []
            };
            this.$emit("close-dialog");
        }
    },
    watch: {
        dialogEdit: {
            immediate: true,
            deep: true,
            handler(newValue, oldValue) {
                this.dialog = newValue;

                if (!oldValue && newValue && this.department) {
                    this.getData(this.department);
                }
            }
        }
    }
};
</script>
