<template>
    <v-dialog persistent v-model="dialog" max-width="600">
        <v-card>
            <v-card-title>{{ title }}</v-card-title>
            <v-card-text>
                <div class="d-flex justify-space-between align-center">
                    <div>All Items</div>
                    <div>
                        <v-text-field label="Search" clearable></v-text-field>
                    </div>
                </div>
                <!-- <slot name="table"></slot> -->
                <XDataTable
                    :headers="[
                        {
                            text: 'Field 1',
                            value: 'text'
                        },
                        { text: 'Field 2', value: 'number' },
                        { text: 'Field 3', value: 'text' }
                    ]"
                    :items="[
                        {
                            id: 1,
                            number: '123',
                            text: 'Data',
                            date: '2021-12-31',
                            boolean: 'true'
                        },
                        {
                            id: 2,
                            number: '123',
                            text: 'Data',
                            date: '2021-12-31',
                            boolean: 'false'
                        }
                    ]"
                ></XDataTable>
                <!-- <v-data-table
                    v-model="selected"
                    :headers="[
                        {
                            text: 'Asset Tag',
                            value: 'asset_tag'
                        },
                        { text: 'Description', value: 'description' },
                        { text: 'Category', value: 'category' }
                    ]"
                    :items="[
                        {
                            id: 1,
                            asset_tag: '252342342325',
                            description: 'Apple iPad Pro',
                            category: 'Tablets'
                        },
                        {
                            id: 2,
                            asset_tag: '252342342325',
                            description: 'Apple iPad Pro',
                            category: 'Tablets'
                        }
                    ]"
                    :items-per-page="5"
                    show-select
                    single-select
                    :footer-props="{
                        itemsPerPageOptions: [3, 5]
                    }"
                ></v-data-table> -->
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <div class="mb-4">
                    <v-btn class="mx-2" @click="closeDialog">
                        OK
                    </v-btn>
                    <v-btn class="mx-2" @click="closeDialog">
                        Close
                    </v-btn>
                </div>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import XDataTable from "./X-DataTable.vue";

export default {
    name: "x-dialog",
    props: {
        dialog: false,
        title: ""
    },
    components: {
        XDataTable
    },
    data() {
        return {};
    },
    methods: {
        closeDialog() {
            this.$emit("close-dialog");
        }
    }
};
</script>
