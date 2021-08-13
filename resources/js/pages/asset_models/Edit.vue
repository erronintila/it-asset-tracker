<template>
    <div>
        <page-header
            :title="'Update Asset Model'"
            :backButton="true"
        ></page-header>

        <Form @on-save="onSave" :asset_modelForm="form" :errors="errors"></Form>
    </div>
</template>

<script>
import AssetModelDataService from "../../services/AssetModelDataService";
import Form from "./Form.vue";

export default {
    components: {
        Form
    },
    data() {
        return {
            form: {
                code: "",
                slug: "",
                name: "",
                model_no: "",
                is_active: true,
                manufacturer: ""
            },
            errors: {
                code: [],
                slug: [],
                name: [],
                model_no: [],
                is_active: [],
                manufacturer_id: []
            }
        };
    },
    methods: {
        getData() {
            let data = {};

            // if (this.$route.params.isDeleted) {
            //     data = {
            //         params: {
            //             isDeleted: true
            //         }
            //     };
            // }

            AssetModelDataService.show(this.$route.params.id, data)
                .then(response => {
                    this.form = { ...this.form, ...response.data.data };
                })
                .catch(error => {
                    console.log(error);
                    alert("An error has occurred.");
                    this.$router.push({ name: "asset_models.index" }, () => {});
                });
        },
        onSave(value) {
            AssetModelDataService.update(this.$route.params.id, value)
                .then(response => {
                    alert("Successfully updated.");
                    this.$router.go(-1);
                })
                .catch(error => {
                    console.log(error);
                    alert("An error has occurred.");
                    if (error.response) {
                        if (error.response.data) {
                            this.errors = {
                                ...this.errors,
                                ...error.response.data.errors
                            };
                        }
                    }
                });
        }
    },
    created() {
        this.getData();
    }
    // activated() {
    //     this.getData();
    // }
};
</script>
