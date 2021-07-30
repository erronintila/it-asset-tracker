<template>
    <div>
        <page-header
            :title="'Update Disposal Request'"
            :backButton="true"
        ></page-header>

        <Form
            @on-save="onSave"
            :disposalRequestForm="form"
            :errors="errors"
        ></Form>
    </div>
</template>

<script>
import DisposalRequestDataService from "../../services/DisposalRequestDataService";
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
                assigned_location: null
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

            DisposalRequestDataService.show(this.$route.params.id, data)
                .then(response => {
                    console.log(response.data);
                    this.form = { ...this.form, ...response.data.data };
                    console.log("hahaha", {
                        ...this.form,
                        ...response.data.data
                    });
                })
                .catch(error => {
                    console.log(error.response);
                    alert("An error has occurred.");
                    this.$router.push(
                        { name: "disposal_requests.index" },
                        () => {}
                    );
                });
        },
        onSave(value) {
            DisposalRequestDataService.update(this.$route.params.id, value)
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
