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
                manufacturer_id: ""
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
                    console.log("elow e");
                    console.log(response.data);
                    this.form = { ...this.form, ...response.data.data };
                })
                .catch(error => {
                    console.log(error.response);
                    alert("An error has occurred.");
                    this.$router.push({ name: "asset_models.index" }, () => {});
                });
        },
        onSave(value) {
            AssetModelDataService.update(this.$route.params.id, value)
                .then(response => {
                    console.log(response.data);
                    alert("Successfully updated.");
                    this.$router.push({ name: "asset_models.index" });
                })
                .catch(error => {
                    console.log(error.response.data);
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
        console.log();
    }
    // activated() {
    //     this.getData();
    // }
};
</script>
