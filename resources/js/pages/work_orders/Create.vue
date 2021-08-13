<template>
    <div>
        <page-header :title="'New Work Order'" :backButton="true"></page-header>

        <Form @on-save="onSave" :errors="errors"></Form>
    </div>
</template>

<script>
import WorkOrderDataService from "../../services/WorkOrderDataService";
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
                reference_no: [],
                request_date: [],
                description: [],
                incident: [],
                diagnosis: [],
                action_taken: [],
                recommendation: [],
                scheduled_start_date: [],
                scheduled_end_date: [],
                actual_start_date: [],
                actual_end_date: [],
                transactionable: [],
                transaction_type_id: [],
                user_id: [],
                parent_asset_id: [],
                owner_id: [],
                assigned_user_id: [],
                assigned_location_id: [],
                assigned_asset_id: [],
                assets: [],
                assigned_employees: []
            }
        };
    },
    methods: {
        onSave(value) {
            WorkOrderDataService.store(value)
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
