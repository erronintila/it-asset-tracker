<template>
    <div>
        <v-form v-model="valid" ref="form" class="my-2">
            <v-row>
                <v-col cols="12" sm="4">
                    <v-text-field
                        v-model="form.site_name"
                        label="Site Name"
                        outlined
                    ></v-text-field>
                    <v-select
                        v-model="form.site_active"
                        label="Site Active"
                        :items="['true', 'false']"
                        outlined
                    ></v-select>
                </v-col>
            </v-row>

            <v-btn @click="onSave" color="primary">Save Changes</v-btn>
        </v-form>
    </div>
</template>

<script>
import _ from "lodash";
import GeneralSettingDataService from "../../../services/GeneralSettingDataService";

export default {
    name: "general-settings",
    data() {
        return {
            valid: false,
            items: [],
            form: {
                site_name: "",
                site_active: "false"
            }
        };
    },
    methods: {
        async getData() {
            try {
                const response = await GeneralSettingDataService.getAll({
                    params: {
                        group: "general"
                    }
                });

                response.data.data.forEach(item => {
                    this.form[item.name] = item.payload.replace(/"/g, "");
                });
            } catch (error) {
                console.log(error.response);
                alert("An error has occurred.");
            }
        },
        async onSave() {
            if (confirm("Do you want save changes?")) {
                try {
                    const response = await GeneralSettingDataService.update({
                        ...this.form,
                        ...{ group: "general" }
                    });
                    alert(response.data.message);
                } catch (error) {
                    console.log(error.response);
                    alert("An error has occurred.");
                }
            }
        }
    },
    mounted() {
        this.getData();
    },
    activated() {
        this.getData();
    }
};
</script>
