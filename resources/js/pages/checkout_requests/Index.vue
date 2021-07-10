<template>
    <div>
        <v-row>
            <v-col class="d-flex align-center">
                <div class="page-title d-inline mx-3">
                    Checkout Requests
                </div>
                <v-btn icon>
                    <v-icon>mdi-refresh</v-icon>
                </v-btn>
                <v-btn icon :to="{ name: 'checkout_requests.create' }">
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
                        <v-btn icon v-bind="attrs" v-on="on" title="Filter">
                            <v-icon>mdi-filter-outline</v-icon>
                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item link>
                            <v-list-item-title>
                                Date
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item link @click="dialogCategory = true">
                            <v-list-item-title>
                                Category Filter
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item link @click="dialogStatus = true">
                            <v-list-item-title
                                >Status Filter
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>

                <v-menu rounded offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on">
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item link>
                            <v-list-item-title>Approve </v-list-item-title>
                        </v-list-item>
                        <v-list-item link>
                            <v-list-item-title>Cancel </v-list-item-title>
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
                        All Assets | 2021-01-01 ~ 2021-12-31 | Active
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
                    <template v-slot:[`item.asset_tag`]="{ item }">
                        <router-link
                            :to="{
                                name: 'checkout_requests.show',
                                params: { id: item.id }
                            }"
                            >{{ item.asset_tag }}</router-link
                        >
                    </template>
                    <template v-slot:[`item.status`]="{ item }">
                        <v-chip
                            small
                            :color="item.status.color"
                            :text-color="item.status.text_color"
                        >
                            {{ item.status.text }}
                        </v-chip>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>

        <XDialog
            :dialog="dialogCategory"
            :title="'Category'"
            @close-dialog="dialogCategory = false"
        />

        <XDialog
            :dialog="dialogStatus"
            :title="'Status'"
            @close-dialog="dialogStatus = false"
        />
    </div>
</template>

<script>
import XDialog from "../../components/X-Dialog.vue";

export default {
    components: {
        XDialog
    },
    data() {
        return {
            dialogCategory: false,
            dialogStatus: false,
            selected: [],
            headers: [
                {
                    text: "Request No.",
                    align: "start",
                    sortable: true,
                    value: "asset_tag"
                },
                { text: "Reference No.", value: "reference_no" },
                { text: "Date", value: "date" },
                { text: "Description", value: "description" },
                { text: "Status", value: "status" }
            ],
            items: [
                {
                    id: 1,
                    asset_tag: "252342342325",
                    date: "2020-01-01",
                    reference_no: "3847234",
                    description: "Sample Description",
                    category: "Tablets",
                    serial: "d0e963f9-75ff-367f-bad2-beb7c8c12b27",
                    model: "iPad Pro",
                    assigned_to: "",
                    manufacturer: "Apple",
                    quantity: 100,
                    status: {
                        text: "Pending",
                        color: "grey",
                        text_color: "white"
                    }
                },
                {
                    id: 2,
                    asset_tag: "24352342342",
                    date: "2020-01-01",
                    reference_no: "3847234",
                    description: "Sample Description",
                    category: "Tablets",
                    serial: "d0e963f9-75ff-367f-bad2-beb7c8c12b27",
                    model: "iPad Pro",
                    assigned_to: "Juan Dela Cruz",
                    manufacturer: "Apple",
                    quantity: 100,
                    status: {
                        text: "Approved",
                        color: "green",
                        text_color: "white"
                    }
                },
                {
                    id: 3,
                    asset_tag: "245234234",
                    date: "2020-01-01",
                    reference_no: "3847234",
                    description: "Sample Description",
                    category: "Tablets",
                    serial: "d0e963f9-75ff-367f-bad2-beb7c8c12b27",
                    model: "iPad Pro",
                    assigned_to: "Juan Dela Cruz",
                    manufacturer: "Apple",
                    quantity: 100,
                    status: {
                        text: "Cancelled",
                        color: "red",
                        text_color: "white"
                    }
                },
                {
                    id: 4,
                    asset_tag: "3453452",
                    date: "2020-01-01",
                    reference_no: "3847234",
                    description: "Sample Description",
                    category: "Tablets",
                    serial: "d0e963f9-75ff-367f-bad2-beb7c8c12b27",
                    model: "iPad Pro",
                    assigned_to: "",
                    manufacturer: "Apple",
                    quantity: 100,
                    status: {
                        text: "Approved",
                        color: "green",
                        text_color: "white"
                    }
                },
                {
                    id: 5,
                    asset_tag: "67867857",
                    date: "2020-01-01",
                    reference_no: "3847234",
                    description: "Sample Description",
                    category: "Tablets",
                    serial: "d0e963f9-75ff-367f-bad2-beb7c8c12b27",
                    model: "iPad Pro",
                    assigned_to: "Juan Dela Cruz",
                    manufacturer: "Apple",
                    quantity: 100,
                    status: {
                        text: "Approved",
                        color: "green",
                        text_color: "white"
                    }
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
