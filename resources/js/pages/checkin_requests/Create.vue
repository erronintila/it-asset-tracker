<template>
    <div>
        <page-header
            :title="'New Checkin Request'"
            :backButton="true"
        ></page-header>

        <Form @on-save="onSave" :errors="errors"></Form>
    </div>
</template>

<script>
import CheckinRequestDataService from "../../services/CheckinRequestDataService";
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
                reference: [],
                request_date: [],
                description: [],
                priority: [],
                transactionable: [],
                transaction_type_id: [],
                user_id: [],
                parent_asset_id: [],
                owner_id: [],
                assigned_user_id: [],
                assigned_location_id: [],
                assigned_asset_id: []
            }
        };
    },
    methods: {
        onSave(value) {
            CheckinRequestDataService.store(value)
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
