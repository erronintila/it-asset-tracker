<template>
    <div>
        <page-header
            :title="'Update Employee'"
            :backButton="true"
        ></page-header>

        <Form @on-save="onSave" :employeeForm="form" :errors="errors"></Form>
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
            form: {
                username: "",
                email: "",
                is_active: true,
                notes: "",
                profile: {
                    code: "",
                    slug: "",
                    first_name: "",
                    middle_name: "",
                    last_name: "",
                    suffix: "",
                    gender: "",
                    birthdate: "",
                    business_phone: "",
                    home_phone: "",
                    mobile_phone: "",
                    job_title: "",
                    address: "",
                    street: "",
                    district: "",
                    city: "",
                    province: "",
                    country: "",
                    postal_code: "",
                    latitude: "",
                    longitude: "",
                    location: "",
                    department: "",
                    image: ""
                }
            },
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
        getData() {
            let data = {};

            // if (this.$route.params.isDeleted) {
            //     data = {
            //         params: {
            //             isDeleted: true
            //         }
            //     };
            // }

            EmployeeDataService.show(this.$route.params.id, data)
                .then(response => {
                    this.form = {
                        ...this.form,
                        ...response.data.data
                    };
                })
                .catch(error => {
                    console.log(error);
                    alert("An error has occurred.");
                    this.$router.push({ name: "employees.index" }, () => {});
                });
        },
        onSave(value) {
            EmployeeDataService.update(this.$route.params.id, value)
                .then(response => {
                    alert("Successfully updated.");
                    this.$router.go(-1);
                })
                .catch(error => {
                    console.log(error);
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
