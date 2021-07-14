<template>
    <div>
        <page-header
            :title="'Update Supplier'"
            :backButton="true"
        ></page-header>

        <Form @on-save="onSave" :supplierForm="form" :errors="errors"></Form>
    </div>
</template>

<script>
import SupplierDataService from "../../services/SupplierDataService";
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
                contact_person: "",
                phone1: "",
                phone2: "",
                email: "",
                website: "",
                fax: "",
                address: "",
                street: "",
                district: "",
                city: "",
                province: "",
                country: "",
                postal_code: "",
                is_active: true,
                notes: ""
            },
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
                is_active: [],
                notes: []
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

            SupplierDataService.show(this.$route.params.id, data)
                .then(response => {
                    console.log(response.data);
                    this.form = { ...this.form, ...response.data.data };
                })
                .catch(error => {
                    console.log(error.response);
                    alert("An error has occurred.");
                    this.$router.push({ name: "suppliers.index" }, () => {});
                });
        },
        onSave(value) {
            SupplierDataService.update(this.$route.params.id, value)
                .then(response => {
                    console.log(response.data);
                    alert("Successfully updated.");
                    this.$router.push({ name: "suppliers.index" });
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
