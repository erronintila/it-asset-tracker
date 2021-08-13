<template>
    <v-dialog persistent v-model="dialog" max-width="500">
        <v-card>
            <v-card-text>
                <Form
                    :title="'Update AssetCategory'"
                    :asset_categoryForm="form"
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
import AssetCategoryDataService from "../../services/AssetCategoryDataService";

export default {
    name: "AssetCategoryEdit",
    props: {
        dialogEdit: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ""
        },
        asset_category: {
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
                type: "",
                name: "",
                is_active: true,
                asset_category_id: ""
            },
            errors: {
                code: [],
                slug: [],
                type: [],
                name: [],
                is_active: [],
                asset_category_id: []
            }
        };
    },
    methods: {
        getData(asset_category) {
            let data = {};

            AssetCategoryDataService.show(asset_category.id, data)
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
            AssetCategoryDataService.update(value.id, value)
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
                type: [],
                name: [],
                is_active: [],
                asset_category_id: []
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

                if (!oldValue && newValue && this.asset_category) {
                    this.getData(this.asset_category);
                }
            }
        }
    }
};
</script>
