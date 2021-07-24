<template>
    <div>
        <page-header
            :title="'Update Location'"
            :backButton="true"
        ></page-header>

        <Form @on-save="onSave" :locationForm="form" :errors="errors"></Form>
    </div>
</template>

<script>
import LocationDataService from "../../services/LocationDataService";
import Form from "./Form.vue";

export default {
    components: {
        Form
    },
    data() {
        return {
            form: {
                code: "",
                reference: "",
                request_date: "",
                description: "",
                priority: "",
                priority_label: { text: "", color: "", dark: false},
                status: { text: "", color: "", dark: false},
                transactionable: {},
                transaction_type_id: "",
                user: {},
                parent_asset_id: "",
                owner_id: "",
                assigned_user_id: "",
                assigned_location_id: "",
                assigned_asset_id: ""
            },
            errors: {
                code: [],
                reference: [],
                request_date: [],
                description: [],
                priority: [],
                transactionable: [],
                transaction_type_id: [],
                user_id: [],
                parent_asset_id: [],
                owner_id: [],
                assigned_user_id: [],
                assigned_location_id: [],
                assigned_asset_id: []
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

            LocationDataService.show(this.$route.params.id, data)
                .then(response => {
                    console.log(response.data);
                    this.form = { ...this.form, ...response.data.data };
                })
                .catch(error => {
                    console.log(error.response);
                    alert("An error has occurred.");
                    this.$router.push({ name: "locations.index" }, () => {});
                });
        },
        onSave(value) {
            LocationDataService.update(this.$route.params.id, value)
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
