<template>
    <div>
        <page-header :title="'New Customer'" :backButton="true"></page-header>

        <Form @on-save="onSave" :errors="errors"></Form>
    </div>
</template>

<script>
import CustomerDataService from "../../services/CustomerDataService";
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
                contact_person: [],
                phone1: [],
                phone2: [],
                email: [],
                website: [],
                fax: [],
                address: [],
                street: [],
                district: [],
                city: [],
                province: [],
                country: [],
                postal_code: [],
                is_active: true,
                notes: []
            }
        };
    },
    methods: {
        onSave(value) {
            CustomerDataService.store(value)
                .then(response => {
                    console.log(response.data);
                    alert("Successfully created.");
                    this.$router.push({ name: "customers.index" });
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
