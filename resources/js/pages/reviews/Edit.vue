<template>
    <div>
        <page-header :title="'Update Review'" :backButton="true"></page-header>

        <Form @on-save="onSave" :reviewForm="form" :errors="errors"></Form>
    </div>
</template>

<script>
import ReviewDataService from "../../services/ReviewDataService";
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
                reference_no: "",
                date: "",
                description: "",
                remarks: "",
                review_category: null,
                user: null,
                asset: null,
                features: []
            },
            errors: {
                code: [],
                slug: [],
                reference_no: [],
                date: [],
                description: [],
                remarks: [],
                review_category_id: [],
                user_id: [],
                asset_id: [],
                features: []
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

            ReviewDataService.show(this.$route.params.id, data)
                .then(response => {
                    const res = response.data.data;
                    this.form = {
                        ...this.form,
                        ...res
                    };
                })
                .catch(error => {
                    console.log(error.response);
                    alert("An error has occurred.");
                    this.$router.push({ name: "reviews.index" }, () => {});
                });
        },
        onSave(value) {
            ReviewDataService.update(this.$route.params.id, value)
                .then(response => {
                    alert("Successfully updated.");
                    this.$router.go(-1);
                })
                .catch(error => {
                    console.log(error.response);
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
