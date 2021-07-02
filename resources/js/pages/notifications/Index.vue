<template>
    <div>
        <v-row>
            <v-col class="d-flex align-center">
                <div class="page-title d-inline mx-3">
                    Notifications
                </div>
                <v-btn icon>
                    <v-icon>mdi-refresh</v-icon>
                </v-btn>
                <div class="d-inline" v-if="selected.length">
                    <!-- <v-btn icon>
                        <v-icon>mdi-file-document-edit-outline</v-icon>
                    </v-btn> -->
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
                            <v-list-item-title>Mark as read </v-list-item-title>
                        </v-list-item>
                        <v-list-item link>
                            <v-list-item-title>
                                Mark as unread
                            </v-list-item-title>
                        </v-list-item>
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
                        All notifications | 2021-01-01 ~ 2021-12-31 | Active
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
                                name: 'notifications.show',
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: [],
            headers: [
                { text: "Date", value: "date" },
                { text: "Description", value: "description" },
                { text: "Status", value: "status" }
            ],
            items: [
                {
                    id: 1,
                    date: "2021-01-01 10:30",
                    description: "Lorem ipsum dolor sit amet.",
                    status: {
                        text: "Read",
                        color: "green",
                        text_color: "white"
                    }
                },
                {
                    id: 2,
                    date: "2021-01-01 10:30",
                    description: "Lorem ipsum dolor sit amet.",
                    status: {
                        text: "Unread",
                        color: "red",
                        text_color: "white"
                    }
                },
                {
                    id: 3,
                    date: "2021-01-01 10:30",
                    description: "Lorem ipsum dolor sit amet.",
                    status: {
                        text: "Unread",
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
