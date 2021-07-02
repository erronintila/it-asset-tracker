<template>
    <div>
        <v-row>
            <v-col class="d-flex align-center">
                <div class="page-title d-inline mx-3">
                    Locations
                </div>
                <v-btn icon>
                    <v-icon>mdi-refresh</v-icon>
                </v-btn>
                <v-btn icon :to="{ name: 'locations.create' }">
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
                        All locations | 2021-01-01 ~ 2021-12-31 | Active
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
                    <template v-slot:[`item.name`]="{ item }">
                        <router-link
                            :to="{
                                name: 'locations.show',
                                params: { id: item.id }
                            }"
                            >{{ item.name }}</router-link
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: [],
            headers: [
                {
                    text: "Name",
                    align: "start",
                    sortable: true,
                    value: "name"
                },
                { text: "Address", value: "address" },
                { text: "Country", value: "country" },
                { text: "Postal Code", value: "postal_code" },
                { text: "Assets", value: "quantity" }
            ],
            items: [
                {
                    id: 1,
                    name: "GSDH Laboratory",
                    address: "General Santos City",
                    country: "Philippines",
                    postal_code: "9500",
                    quantity: "30",
                    asset_tag: "Sample Name",
                    description: "Apple iPad Pro",
                    category: "Tablets",
                    serial: "d0e963f9-75ff-367f-bad2-beb7c8c12b27",
                    model: "iPad Pro",
                    assigned_to: "",
                    status: {
                        text: "In Storage",
                        color: "primary",
                        text_color: "white"
                    }
                },
                {
                    id: 2,
                    name: "GSDH Laboratory",
                    address: "General Santos City",
                    country: "Philippines",
                    postal_code: "9500",
                    quantity: "30",
                    asset_tag: "Sample Name",
                    description: "Apple iPad Pro",
                    category: "Tablets",
                    serial: "d0e963f9-75ff-367f-bad2-beb7c8c12b27",
                    model: "iPad Pro",
                    assigned_to: "Juan Dela Cruz",
                    status: {
                        text: "In Use",
                        color: "green",
                        text_color: "white"
                    }
                },
                {
                    id: 3,
                    name: "GSDH Laboratory",
                    address: "General Santos City",
                    country: "Philippines",
                    postal_code: "9500",
                    quantity: "30",
                    asset_tag: "Sample Name",
                    description: "Apple iPad Pro",
                    category: "Tablets",
                    serial: "d0e963f9-75ff-367f-bad2-beb7c8c12b27",
                    model: "iPad Pro",
                    assigned_to: "Juan Dela Cruz",
                    status: {
                        text: "In Maintenance",
                        color: "red",
                        text_color: "white"
                    }
                },
                {
                    id: 4,
                    name: "GSDH Laboratory",
                    address: "General Santos City",
                    country: "Philippines",
                    postal_code: "9500",
                    quantity: "30",
                    asset_tag: "Sample Name",
                    description: "Apple iPad Pro",
                    category: "Tablets",
                    serial: "d0e963f9-75ff-367f-bad2-beb7c8c12b27",
                    model: "iPad Pro",
                    assigned_to: "",
                    status: {
                        text: "Disposed",
                        color: "grey",
                        text_color: "white"
                    }
                },
                {
                    id: 5,
                    name: "GSDH Laboratory",
                    address: "General Santos City",
                    country: "Philippines",
                    postal_code: "9500",
                    quantity: "30",
                    asset_tag: "Sample Name",
                    description: "Apple iPad Pro",
                    category: "Tablets",
                    serial: "d0e963f9-75ff-367f-bad2-beb7c8c12b27",
                    model: "iPad Pro",
                    assigned_to: "Juan Dela Cruz",
                    status: {
                        text: "In Transit",
                        color: "yellow",
                        text_color: "black"
                    }
                },
                {
                    id: 6,
                    name: "GSDH Laboratory",
                    address: "General Santos City",
                    country: "Philippines",
                    postal_code: "9500",
                    quantity: "30",
                    asset_tag: "Sample Name",
                    description: "Apple iPad Pro",
                    category: "Tablets",
                    serial: "d0e963f9-75ff-367f-bad2-beb7c8c12b27",
                    model: "iPad Pro",
                    assigned_to: "",
                    status: {
                        text: "In Retired",
                        color: "grey",
                        text_color: "white"
                    }
                },
                {
                    id: 7,
                    name: "GSDH Laboratory",
                    address: "General Santos City",
                    country: "Philippines",
                    postal_code: "9500",
                    quantity: "30",
                    asset_tag: "Sample Name",
                    description: "Apple iPad Pro",
                    category: "Tablets",
                    serial: "d0e963f9-75ff-367f-bad2-beb7c8c12b27",
                    model: "iPad Pro",
                    assigned_to: "",
                    status: {
                        text: "Missing",
                        color: "grey",
                        text_color: "white"
                    }
                },
                {
                    id: 8,
                    name: "GSDH Laboratory",
                    address: "General Santos City",
                    country: "Philippines",
                    postal_code: "9500",
                    quantity: "30",
                    asset_tag: "Sample Name",
                    description: "Apple iPad Pro",
                    category: "Tablets",
                    serial: "d0e963f9-75ff-367f-bad2-beb7c8c12b27",
                    model: "iPad Pro",
                    assigned_to: "",
                    status: {
                        text: "In Storage",
                        color: "primary",
                        text_color: "white"
                    }
                },
                {
                    id: 9,
                    name: "GSDH Laboratory",
                    address: "General Santos City",
                    country: "Philippines",
                    postal_code: "9500",
                    quantity: "30",
                    asset_tag: "Sample Name",
                    description: "Apple iPad Pro",
                    category: "Tablets",
                    serial: "d0e963f9-75ff-367f-bad2-beb7c8c12b27",
                    model: "iPad Pro",
                    assigned_to: "",
                    status: {
                        text: "In Storage",
                        color: "primary",
                        text_color: "white"
                    }
                },
                {
                    id: 10,
                    name: "GSDH Laboratory",
                    address: "General Santos City",
                    country: "Philippines",
                    postal_code: "9500",
                    quantity: "30",
                    asset_tag: "Sample Name",
                    description: "Apple iPad Pro",
                    category: "Tablets",
                    serial: "d0e963f9-75ff-367f-bad2-beb7c8c12b27",
                    model: "iPad Pro",
                    assigned_to: "Juan Dela Cruz",
                    status: {
                        text: "In Maintenance",
                        color: "red",
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
