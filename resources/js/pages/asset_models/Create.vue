<template>
    <div>
        <page-header
            :title="'New Asset Model'"
            :backButton="true"
        ></page-header>

        <Form @on-save="onSave" :errors="errors"></Form>
    </div>
</template>

<script>
import AssetModelDataService from "../../services/AssetModelDataService";
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
                model_no: [],
                is_active: [],
                manufacturer_id: []
            }
        };
    },
    methods: {
        onSave(value) {
            AssetModelDataService.store(value)
                .then(response => {
                    console.log(response.data);
                    alert("Successfully created.");
                    this.$router.push({ name: "asset_models.index" });
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
