<template>
    <v-dialog persistent v-model="dialog" max-width="500">
        <v-card>
            <v-card-text>
                <Form
                    :title="'New Review Category'"
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
    name: "ReviewCategoryCreate",
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
            }
        };
    },
    methods: {
        onSave(value) {
            ReviewCategoryDataService.store(value)
                .then(response => {
                    alert("Successfully created.");
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
