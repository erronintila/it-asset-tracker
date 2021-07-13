<template>
    <v-dialog persistent v-model="dialog" max-width="500">
        <v-card>
            <v-card-text>
                <Form
                    :title="'New Department'"
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
    name: "DepartmentCreate",
    props: {
        dialogCreate: false,
        title: ""
    },
    components: {
        Form
    },
    data() {
        return {
            dialog: false,
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
        onSave(value) {
            DepartmentDataService.store(value)
                .then(response => {
                    console.log(response.data);
                    alert("Successfully created.");
                    this.$emit("save-dialog");
                })
                .catch(error => {
                    console.log(error.response);
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
        dialogCreate: {
            immediate: true,
            deep: true,
            handler(newValue) {
                this.dialog = newValue;
            }
        }
    }
};
</script>
