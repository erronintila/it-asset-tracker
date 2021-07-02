<template>
    <div>
        <v-row>
            <v-col class="d-flex align-center">
                <div class="page-title d-inline mx-3">
                    Service Agreements
                </div>
                <v-btn icon>
                    <v-icon>mdi-refresh</v-icon>
                </v-btn>
                <v-btn icon :to="{ name: 'agreements.create' }">
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
                <div class="d-inline" v-if="selected.length">
                    <v-btn icon>
                        <v-icon>mdi-file-document-edit-outline</v-icon>
                    </v-btn>
                </div>
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
                            <v-list-item-title>Terminate </v-list-item-title>
                        </v-list-item>
                        <v-list-item link>
                            <v-list-item-title>Export </v-list-item-title>
                        </v-list-item>
                        <v-list-item link>
                            <v-list-item-title>Delete </v-list-item-title>
                        </v-list-item>
                        <v-list-item link>
                            <v-list-item-title>Restore </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>

                <!-- <div class="d-inline" v-if="selected.length">
                    <v-btn small outlined rounded class="text-capitalize">
                        clear filters
                    </v-btn>
                </div> -->
            </v-col>
        </v-row>

        <!-- <v-row>
            <v-col cols="12" v-if="selected.length">
                <div class="ml-4">
                    <small>
                        All agreements | 2021-01-01 ~ 2021-12-31 | Active
                    </small>
                </div>
            </v-col>
        </v-row> -->

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
            <v-col cols="12">
                <v-data-table
                    v-model="selected"
                    :headers="headers"
                    :items="items"
                    :items-per-page="10"
                    show-select
                >
                    <template v-slot:[`item.description`]="{ item }">
                        <router-link
                            :to="{
                                name: 'agreements.show',
                                params: { id: item.id }
                            }"
                            >{{ item.description }}</router-link
                        >
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: [],
            headers: [
                {
                    text: "Description",
                    align: "start",
                    sortable: true,
                    value: "description"
                },
                { text: "Type", value: "type" },
                { text: "Customer", value: "customer" },
                { text: "Assets", value: "assets" },
                { text: "Start Date", value: "start_date" },
                { text: "End Date", value: "end_date" }
            ],
            items: [
                {
                    id: 1,
                    description: "Sample Agreement",
                    type: "Warranty",
                    customer: "ABC Company",
                    assets: 100,
                    start_date: "2020-01-01",
                    end_date: "2022-01-01"
                },
                {
                    id: 2,
                    description: "Sample Agreement",
                    type: "Warranty",
                    customer: "ABC Company",
                    assets: 100,
                    start_date: "2020-01-01",
                    end_date: "2022-01-01"
                },
                {
                    id: 3,
                    description: "Sample Agreement",
                    type: "Warranty",
                    customer: "ABC Company",
                    assets: 100,
                    start_date: "2020-01-01",
                    end_date: "2022-01-01"
                }
            ],
            showSearch: false
        };
    }
};
</script>

<style scoped>
a {
    text-decoration: none;
}
</style>
