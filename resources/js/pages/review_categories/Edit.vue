<template>
    <v-dialog persistent v-model="dialog" max-width="500">
        <v-card>
            <v-card-text>
                <Form
                    :title="'Update Review Category'"
                    :review_categoryForm="form"
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
import ReviewCategoryDataService from "../../services/ReviewCategoryDataService";

export default {
    name: "ReviewCategoryEdit",
    props: {
        dialogEdit: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ""
        },
        review_category: {
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
            },
            errors: {
                code: [],
                slug: [],
                name: [],
                is_active: [],
            }
        };
    },
    methods: {
        getData(review_category) {
            let data = {};

            ReviewCategoryDataService.show(review_category.id, data)
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
            ReviewCategoryDataService.update(value.id, value)
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

                if (!oldValue && newValue && this.review_category) {
                    this.getData(this.review_category);
                }
            }
        }
    }
};
</script>
