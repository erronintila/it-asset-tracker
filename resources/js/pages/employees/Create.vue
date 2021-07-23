<template>
    <div>
        <page-header :title="'New Employee'" :backButton="true"></page-header>

        <Form @on-save="onSave" :errors="errors"></Form>
    </div>
</template>

<script>
import EmployeeDataService from "../../services/EmployeeDataService";
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
                first_name: [],
                middle_name: [],
                last_name: [],
                suffix: [],
                gender: [],
                birthdate: [],
                business_phone: [],
                home_phone: [],
                mobile_phone: [],
                job_title: [],
                address: [],
                street: [],
                district: [],
                city: [],
                province: [],
                country: [],
                postal_code: [],
                latitude: [],
                longitude: [],
                is_active: true,
                location_id: [],
                department_id: [],
                notes: [],
                email: [],
                username: [],
                image: []
            }
        };
    },
    methods: {
        onSave(value) {
            EmployeeDataService.store(value)
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
