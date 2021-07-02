<template>
    <div>
        <v-row>
            <v-col class="d-flex align-center">
                <div class="page-title d-inline mx-3">
                    Activity Logs
                </div>
                <v-btn icon>
                    <v-icon>mdi-refresh</v-icon>
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
                        All activity_logs | 2021-01-01 ~ 2021-12-31 | Active
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
                    <template v-slot:[`item.actions`]="{ item }">
                        <router-link
                            :to="{
                                name: '',
                                params: { id: item.id }
                            }"
                        >
                            More
                        </router-link>
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
                    text: "Date",
                    align: "start",
                    value: "date"
                },
                { text: "User", value: "user" },
                { text: "Activity", value: "activity" },
                { text: "", value: "actions" }
            ],
            items: [
                {
                    id: 1,
                    date: "2021-01-01 11:30",
                    user: "Erron Intila",
                    activity: "Cancelled work order #00201"
                },
                {
                    id: 2,
                    date: "2021-01-01 10:30",
                    user: "Erron Intila",
                    activity: "Created work order #00201"
                },
                {
                    id: 3,
                    date: "2021-01-01 10:00",
                    user: "Erron Intila",
                    activity: "Updated account"
                },
                {
                    id: 4,
                    date: "2021-01-01 09:30",
                    user: "Erron Intila",
                    activity: "Deleted asset"
                },
                {
                    id: 5,
                    date: "2021-01-01 08:30",
                    user: "Erron Intila",
                    activity: "Created Asset"
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
