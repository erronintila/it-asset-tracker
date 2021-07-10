<template>
    <div>
        <v-row>
            <v-col class="d-flex align-center">
                <div class="page-title d-inline mx-3">
                    Asset Maintenance
                </div>
                <v-btn icon>
                    <v-icon>mdi-refresh</v-icon>
                </v-btn>
                <v-btn icon @click="showSearch = !showSearch">
                    <v-icon>mdi-file-search-outline</v-icon>
                </v-btn>
                <v-menu rounded offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on">
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item link>
                            <v-list-item-title>Export </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-col>
        </v-row>

        <v-row v-if="showSearch">
            <v-col class="d-flex">
                <v-text-field
                    outlined
                    clearable
                    placeholder="Enter text here..."
                >
                </v-text-field>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <XDataTable
                    :singleSelect="false"
                    :headers="[
                        {
                            text: 'Date',
                            value: 'date'
                        },
                        { text: 'Work Order No.', value: 'text' },
                        { text: 'Scheduled Date', value: 'date_range' },
                        { text: 'Actual Date', value: 'date_range' },
                        { text: 'Accuracy Rate', value: 'number' }
                    ]"
                    :items="items"
                />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import XDataTable from "../../../components/X-DataTable.vue";

export default {
    components: {
        XDataTable
    },
    data() {
        return {
            showSearch: false,
            items: [
                {
                    id: 1,
                    text: "Data 1",
                    number: 159,
                    date: "2021-12-31",
                    boolean: "true",
                    date_range: "2021-01-01 ~ 2021-12-31"
                },
                {
                    id: 2,
                    text: "Data 1",
                    number: 159,
                    date: "2021-12-31",
                    boolean: "true",
                    date_range: "2021-01-01 ~ 2021-12-31"
                },
                {
                    id: 3,
                    text: "Data 1",
                    number: 159,
                    date: "2021-12-31",
                    boolean: "true",
                    date_range: "2021-01-01 ~ 2021-12-31"
                },
                {
                    id: 4,
                    text: "Data 1",
                    number: 159,
                    date: "2021-12-31",
                    boolean: "true",
                    date_range: "2021-01-01 ~ 2021-12-31"
                },
                {
                    id: 5,
                    text: "Data 1",
                    number: 159,
                    date: "2021-12-31",
                    boolean: "true",
                    date_range: "2021-01-01 ~ 2021-12-31"
                }
            ]
        };
    }
};
</script>

<style scoped>
.page-title {
    font-size: 1.5rem;
    font-weight: 100;
}
</style>
