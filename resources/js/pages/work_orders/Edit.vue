<template>
    <div>
        <page-header
            :title="'Update Work Order'"
            :backButton="true"
        ></page-header>

        <Form @on-save="onSave" :workOrderForm="form" :errors="errors"></Form>
    </div>
</template>

<script>
import WorkOrderDataService from "../../services/WorkOrderDataService";
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
                incident: "",
                diagnosis: "",
                action_taken: "",
                recommendation: "",
                scheduled_start_date: "",
                scheduled_end_date: "",
                actual_start_date: "",
                actual_end_date: "",
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
                actual_date_performed: [],
                scheduled_date: [],
                assigned_user: null,
                parent_asset: null
            },
            errors: {
                code: [],
                reference_no: [],
                request_date: [],
                description: [],
                incident: [],
                diagnosis: [],
                action_taken: [],
                recommendation: [],
                scheduled_start_date: [],
                scheduled_end_date: [],
                actual_start_date: [],
                actual_end_date: [],
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

            WorkOrderDataService.show(this.$route.params.id, data)
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
                    this.$router.push({ name: "work_orders.index" }, () => {});
                });
        },
        onSave(value) {
            WorkOrderDataService.update(this.$route.params.id, value)
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
