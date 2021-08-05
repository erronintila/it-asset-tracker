<template>
    <div>
        <page-header :title="'New Agreement'" :backButton="true"></page-header>

        <Form @on-save="onSave" :errors="errors"></Form>
    </div>
</template>

<script>
import AgreementDataService from "../../services/AgreementDataService";
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
                name: [],
                address: [],
                street: [],
                district: [],
                city: [],
                province: [],
                country: [],
                postal_code: [],
                latitude: [],
                longitude: [],
                is_active: [],
                notes: [],
                agreement_id: []
            }
        };
    },
    methods: {
        onSave(value) {
            AgreementDataService.store(value)
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
