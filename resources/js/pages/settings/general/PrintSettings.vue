<template>
    <div>
        <v-form v-model="valid" ref="form" class="my-2">
            <v-row>
                <v-col cols="12" sm="4">
                    <v-text-field
                        v-model="form.paper_size"
                        label="Paper Size"
                        outlined
                    ></v-text-field>
                    <v-select
                        v-model="form.orientation"
                        label="Page Orientation"
                        :items="['portrait', 'landscape']"
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
import PrintSettingDataService from "../../../services/PrintSettingDataService";

export default {
    name: "print-settings",
    data() {
        return {
            valid: false,
            items: [],
            form: {
                paper_size: "a4",
                orientation: "portrait"
            }
        };
    },
    methods: {
        async getData() {
            try {
                const response = await PrintSettingDataService.getAll({
                    params: {
                        group: "print"
                    }
                });

                response.data.data.forEach(item => {
                    this.form[item.name] = item.payload.replace(/"/g, "");
                });
            } catch (error) {
                console.log(error);
                alert("An error has occurred.");
            }
        },
        async onSave() {
            if (confirm("Do you want save changes?")) {
                try {
                    const response = await PrintSettingDataService.update({
                        ...this.form,
                        ...{ group: "print" }
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
