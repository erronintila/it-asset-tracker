<template>
    <v-dialog persistent v-model="dialog" max-width="500">
        <v-card>
            <v-card-text>
                <Form
                    :title="'Update Feature'"
                    :featureForm="form"
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
    name: "FeatureEdit",
    props: {
        dialogEdit: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ""
        },
        review_category_id: {
            default: null
        },
        feature: {
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
                is_required: true,
                review_category_id: null
            },
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
        getData(feature) {
            let data = {};

            FeatureDataService.show(feature.id, data)
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
            console.log(value);
            FeatureDataService.update(value.id, value)
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
                is_required: [],
                review_category_id: []
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

                if (!oldValue && newValue && this.feature) {
                    this.getData(this.feature);
                }
            }
        }
    }
};
</script>
