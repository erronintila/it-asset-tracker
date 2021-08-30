<template>
    <v-dialog persistent v-model="dialog" max-width="500">
        <v-card>
            <v-card-text>
                <Form
                    :title="'New Feature'"
                    :review_category_id="review_category_id"
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
import FeatureDataService from "../../services/FeatureDataService";

export default {
    name: "FeatureCreate",
    props: {
        dialogCreate: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ""
        },
        review_category_id: {
            default: null
        }
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
                is_required: [],
                review_category_id: []
            }
        };
    },
    methods: {
        onSave(value) {
            FeatureDataService.store(value)
                .then(response => {
                    alert("Successfully created.");
                    this.$emit("save-dialog");
                })
                .catch(error => {
                    console.log(error.response);
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
                is_required: [],
                review_category_id: []
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
