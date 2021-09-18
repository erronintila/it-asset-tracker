<template>
    <div>
        <page-header :title="'New Asset'" :backButton="true"></page-header>

        <Form @on-save="onSave" :errors="errors"></Form>
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
            formDataLoaded: true,
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
                assigned_asset_id: [],
                extra_attributes: []
            }
        };
    },
    methods: {
        onSave(value) {
            AssetDataService.store(value)
                .then(response => {
                    alert("Successfully created.");
                    this.$router.go(-1);
                })
                .catch(error => {
                    console.log(error.response);
                    alert("An error has occurred.");
                    this.errors = {
                        ...this.errors,
                        ...error.response.data.errors
                    };
                });
        }
    }
};
</script>
