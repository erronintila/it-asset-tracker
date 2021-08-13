<template>
    <div>
        <page-header
            :title="'Update Checkout Request'"
            :backButton="true"
        ></page-header>

        <Form
            @on-save="onSave"
            :checkoutRequestForm="form"
            :errors="errors"
        ></Form>
    </div>
</template>

<script>
import CheckoutRequestDataService from "../../services/CheckoutRequestDataService";
import Form from "./Form.vue";

export default {
    components: {
        Form
    },
    data() {
        return {
            form: {
                code: "",
                reference_no: "",
                request_date: "",
                description: "",
                status: { text: "", color: "", dark: false },
                transactionable: {},
                transaction_type_id: "",
                user: {},
                parent_asset_id: "",
                owner_id: "",
                assigned_user_id: "",
                assigned_location_id: "",
                assigned_asset_id: "",
                assets: [],
                assigned_employees: [],
                assigned_location: null,
                assigned_user: null,
                assigned_asset: null
            },
            errors: {
                code: [],
                reference_no: [],
                request_date: [],
                description: [],
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
        getData() {
            let data = {};

            // if (this.$route.params.isDeleted) {
            //     data = {
            //         params: {
            //             isDeleted: true
            //         }
            //     };
            // }

            CheckoutRequestDataService.show(this.$route.params.id, data)
                .then(response => {
                    this.form = { ...this.form, ...response.data.data };
                })
                .catch(error => {
                    console.log(error);
                    alert("An error has occurred.");
                    this.$router.push(
                        { name: "checkout_requests.index" },
                        () => {}
                    );
                });
        },
        onSave(value) {
            CheckoutRequestDataService.update(this.$route.params.id, value)
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
