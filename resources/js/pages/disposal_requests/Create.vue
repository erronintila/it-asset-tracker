<template>
    <div>
        <v-row>
            <v-col class="d-flex justify-start">
                <v-btn icon @click="$router.go(-1)">
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <span class="page-title">New Disposal Request</span>
            </v-col>
        </v-row>

        <v-row class="d-flex justify-center">
            <v-col cols="12" md="4">
                <v-card flat>
                    <v-card-title>
                        General Information
                    </v-card-title>
                    <v-card-text>
                        <v-row class="d-flex justify-center">
                            <v-col cols="12">
                                <v-text-field
                                    label="Reference No."
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Type"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Date"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Description"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Notes"
                                    outlined
                                    clearable
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="8">
                <v-card flat>
                    <v-card-title>
                        Assets
                    </v-card-title>
                    <v-card-text>
                        <XDataTable
                            :singleSelect="false"
                            :headers="[
                                {
                                    text: 'Description',
                                    value: 'text'
                                },
                                { text: 'Category', value: 'text' },
                                { text: 'Assigned To', value: 'text' },
                                { text: 'Location', value: 'text' }
                            ]"
                            :items="records"
                        />
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            @click="$router.go(-1)"
                            class="mr-2"
                            large
                        >
                            Save
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import XDataTable from "../../components/X-DataTable.vue";

export default {
    components: {
        XDataTable
    },
    data() {
        return {
            records: [
                {
                    id: 1,
                    text: "Data 1",
                    number: 159,
                    date: "2021-12-31",
                    boolean: "true"
                },
                {
                    id: 2,
                    text: "Data 1",
                    number: 159,
                    date: "2021-12-31",
                    boolean: "true"
                },
                {
                    id: 3,
                    text: "Data 1",
                    number: 159,
                    date: "2021-12-31",
                    boolean: "true"
                },
                {
                    id: 4,
                    text: "Data 1",
                    number: 159,
                    date: "2021-12-31",
                    boolean: "true"
                },
                {
                    id: 5,
                    text: "Data 1",
                    number: 159,
                    date: "2021-12-31",
                    boolean: "true"
                }
            ]
        };
    }
};
</script>
