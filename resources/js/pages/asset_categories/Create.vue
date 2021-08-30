<template>
    <v-dialog persistent v-model="dialog" max-width="500">
        <v-card>
            <v-card-text>
                <Form
                    :title="'New Asset Category'"
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
    name: "AssetCategoryCreate",
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
                type: [],
                name: [],
                is_active: [],
                asset_category_id: []
            }
        };
    },
    methods: {
        onSave(value) {
            AssetCategoryDataService.store(value)
                .then(response => {
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
                type: [],
                name: [],
                is_active: [],
                asset_category_id: []
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
