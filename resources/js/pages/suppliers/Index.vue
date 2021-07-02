<template>
    <div>
        <v-row>
            <v-col class="d-flex align-center">
                <div class="page-title d-inline mx-3">
                    Suppliers
                </div>
                <v-btn icon>
                    <v-icon>mdi-refresh</v-icon>
                </v-btn>
                <v-btn icon :to="{ name: 'suppliers.create' }">
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
                            <v-list-item-title>Deactivate </v-list-item-title>
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
                        All suppliers | 2021-01-01 ~ 2021-12-31 | Active
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
                    <template v-slot:[`item.code`]="{ item }">
                        <router-link
                            :to="{
                                name: 'suppliers.show',
                                params: { id: item.id }
                            }"
                        >
                            {{ item.code }}
                        </router-link>
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
                    text: "Code",
                    align: "start",
                    sortable: true,
                    value: "code"
                },
                { text: "Name", value: "name" },
                { text: "Phone No.", value: "phone" },
                { text: "Email", value: "email" },
                { text: "Assets", value: "assets" }
            ],
            items: [
                {
                    id: 1,
                    code: "012030123",
                    name: "Juan Dela Cruz",
                    department: "Sales and Marketing",
                    job_title: "Sales & Marketing Officer",
                    phone: "09211121212",
                    email: "juandelacruz@gmail.com",
                    assets: "20"
                },
                {
                    id: 2,
                    code: "4524323",
                    name: "Maria Santiago",
                    department: "Purchasing",
                    job_title: "Purchase Officer",
                    phone: "093248023423",
                    email: "mariasantiago@gmail.com",
                    assets: "38"
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
