<template>
    <v-dialog persistent v-model="dialog" max-width="500">
        <v-card>
            <v-card-text>
                <Form
                    :title="'Update Transaction Type'"
                    :transaction_typeForm="form"
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
import TransactionTypeDataService from "../../services/TransactionTypeDataService";

export default {
    name: "TransactionTypeEdit",
    props: {
        dialogEdit: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ""
        },
        transaction_type: {
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
                action_type: ""
            },
            errors: {
                code: [],
                slug: [],
                name: [],
                is_active: [],
                action_type: []
            }
        };
    },
    methods: {
        getData(transaction_type) {
            console.log("hello", transaction_type);
            let data = {};

            TransactionTypeDataService.show(transaction_type.id, data)
                .then(response => {
                    console.log("ambot", response.data);
                    this.form = {
                        ...this.form,
                        ...response.data.data
                    };
                })
                .catch(error => {
                    console.log(error.response);
                    alert("An error has occurred.");
                });
        },
        onSave(value) {
            TransactionTypeDataService.update(value.id, value)
                .then(response => {
                    console.log(response.data);
                    alert("Successfully edited.");
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
                action_type: []
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

                if (!oldValue && newValue && this.transaction_type) {
                    this.getData(this.transaction_type);
                }
            }
        }
    }
};
</script>
