<template>
    <div>
        <page-header
            :title="'Update Agreement'"
            :backButton="true"
        ></page-header>

        <Form @on-save="onSave" :agreementForm="form" :errors="errors"></Form>
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
            form: {
                code: "",
                slug: "",
                name: "",
                address: "",
                street: "",
                district: "",
                city: "",
                province: "",
                country: "",
                postal_code: "",
                latitude: "",
                longitude: "",
                is_active: true,
                notes: "",
                agreement_id: ""
            },
            errors: {
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
        getData() {
            let data = {};

            // if (this.$route.params.isDeleted) {
            //     data = {
            //         params: {
            //             isDeleted: true
            //         }
            //     };
            // }

            AgreementDataService.show(this.$route.params.id, data)
                .then(response => {
                    console.log(response.data);
                    this.form = { ...this.form, ...response.data.data };
                })
                .catch(error => {
                    console.log(error.response);
                    alert("An error has occurred.");
                    this.$router.push({ name: "agreements.index" }, () => {});
                });
        },
        onSave(value) {
            AgreementDataService.update(this.$route.params.id, value)
                .then(response => {
                    console.log(response.data);
                    alert("Successfully updated.");
                    this.$router.go(-1);
                })
                .catch(error => {
                    console.log(error.response.data);
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
