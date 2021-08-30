<template>
    <div>
        <page-header :title="'Update Asset'" :backButton="true"></page-header>

        <Form @on-save="onSave" :assetForm="form" :errors="errors"></Form>
    </div>
</template>

<script>
import AssetDataService from "../../services/AssetDataService";
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
                reference_no: "",
                asset_tag: "",
                serial_no: "",
                description: "",
                purchased_date: "",
                purchased_cost: "",
                warranty_start_date: "",
                warranty_end_date: "",
                received_date: "",
                received_by: "",
                sku: "",
                quantity: "",
                notes: "",
                asset_model: "",
                supplier: "",
                manufacturer: "",
                asset_category: "",
                assigned_user_id: "",
                assigned_location_id: "",
                assigned_asset_id: "",
                date_range: []
            },
            errors: {
                code: [],
                slug: [],
                reference_no: [],
                asset_tag: [],
                serial_no: [],
                description: [],
                purchased_date: [],
                purchased_cost: [],
                warranty_start_date: [],
                warranty_end_date: [],
                received_date: [],
                received_by: [],
                sku: [],
                quantity: [],
                notes: [],
                asset_model_id: [],
                supplier_id: [],
                manufacturer_id: [],
                asset_category_id: [],
                assigned_user_id: [],
                assigned_location_id: [],
                assigned_asset_id: []
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

            AssetDataService.show(this.$route.params.id, data)
                .then(response => {
                    this.form = {
                        ...this.form,
                        ...response.data.data,
                        ...{
                            date_range: [
                                response.data.data.warranty_start_date,
                                response.data.data.warranty_end_date
                            ]
                        }
                    };
                })
                .catch(error => {
                    console.log(error.response);
                    alert("An error has occurred.");
                    this.$router.push({ name: "assets.index" }, () => {});
                });
        },
        onSave(value) {
            AssetDataService.update(this.$route.params.id, value)
                .then(response => {
                    alert("Successfully updated.");
                    this.$router.go(-1);
                })
                .catch(error => {
                    console.log(error.response);
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
