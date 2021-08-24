<template>
    <div>
        <page-header :title="'New Review'" :backButton="true"></page-header>

        <Form @on-save="onSave" :errors="errors"></Form>
    </div>
</template>

<script>
import ReviewDataService from "../../services/ReviewDataService";
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
                date: [],
                description: [],
                remarks: [],
                review_category_id: [],
                user_id: [],
                asset_id: [],
                    features: []
            }
        };
    },
    methods: {
        onSave(value) {
            ReviewDataService.store(value)
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
