<template>
    <div>
        <page-header :title="'New License'" :backButton="true"></page-header>

        <Form @on-save="onSave" :errors="errors"></Form>
    </div>
</template>

<script>
import LicenseDataService from "../../services/LicenseDataService";
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
                serial_no: [],
                description: [],
                purchased_date: [],
                purchased_cost: [],
                warranty_start_date: [],
                warranty_end_date: [],
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
        onSave(value) {
            LicenseDataService.store(value)
                .then(response => {
                    console.log(response.data);
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
