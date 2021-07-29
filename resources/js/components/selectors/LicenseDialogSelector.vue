<template>
    <div>
        <v-dialog
            ref="dialog"
            :fullscreen="fullscreen"
            persistent
            v-model="dialog"
            max-width="60em"
        >
            <template v-slot:activator="{ on, attrs }">
                <slot
                    name="openDialog"
                    v-bind="{ attrs, on, selectedItems }"
                ></slot>
            </template>
            <v-card>
                <v-card-title class="pa-0">
                    <v-toolbar flat>
                        <v-toolbar-title>Licenses</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <!-- <v-btn icon @click="fullscreen = !fullscreen">
                            <v-icon class="heading grey--text text--darken-4">
                                mdi-open
                            </v-icon>
                        </v-btn> -->
                        <v-btn icon @click="closeDialog">
                            <v-icon>
                                mdi-close
                            </v-icon>
                        </v-btn>
                    </v-toolbar>
                </v-card-title>
                <v-card-text>
                    <div class="d-flex justify-space-between align-center">
                        <div>All Items</div>
                        <div>
                            <v-text-field
                                v-model="search"
                                class="hidden-sm-and-down"
                                label="Search"
                                clearable
                                @keyup.enter="getData"
                            ></v-text-field>
                        </div>
                    </div>
                    <v-data-table
                        v-model="selectedItems"
                        show-select
                        item-key="id"
                        :single-select="singleSelect"
                        :headers="tableOptions.headers"
                        :items="items"
                        :loading="tableOptions.loading"
                        :options.sync="tableOptions.options"
                        :server-items-length="tableOptions.serverItemsLength"
                        :footer-props="{
                            itemsPerPageOptions:
                                tableOptions.itemsPerPageOptions,
                            showFirstLastPage: true,
                            firstIcon: 'mdi-page-first',
                            lastIcon: 'mdi-page-last',
                            prevIcon: 'mdi-chevron-left',
                            nextIcon: 'mdi-chevron-right'
                        }"
                    >
                    </v-data-table>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <div class="mb-4">
                        <v-btn class="mx-2" @click="onSelect">
                            OK
                        </v-btn>
                        <v-btn class="mx-2" @click="closeDialog">
                            Close
                        </v-btn>
                    </div>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import LicenseDataService from "../../services/LicenseDataService";

export default {
    name: "license-selector",
    props: {
        dialogLicense: {
            type: Boolean,
            default: false
        },
        singleSelect: {
            type: Boolean,
            default: true
        },
        selected: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            dialog: false,
            fullscreen: false,
            tableOptions: {
                options: {
                    sortBy: ["code"],
                    sortDesc: [false],
                    page: 1,
                    itemsPerPage: 5
                },
                loading: false,
                itemsPerPageOptions: [5, 10, 20],
                serverItemsLength: 0,
                headers: [
                    { text: "Code", value: "code" },
                    { text: "Name", value: "name" },
                    { text: "Manager", value: "manager_id" }
                ]
            },
            search: "",
            items: [],
            selectedItems: []
        };
    },
    methods: {
        getData() {
            this.tableOptions.loading = true;
            return new Promise((resolve, reject) => {
                const {
                    sortBy,
                    sortDesc,
                    page,
                    itemsPerPage
                } = this.tableOptions.options;
                let search = this.search;
                // let status = this.status;

                let data = {
                    params: {
                        sortBy: sortBy[0],
                        sortType: sortDesc[0] ? "desc" : "asc",
                        page: page,
                        itemsPerPage: itemsPerPage,
                        search: search
                        // status: status
                    }
                };

                LicenseDataService.getAll(data)
                    .then(response => {
                        console.log(response.data);
                        this.items = response.data.data.data;
                        this.tableOptions.serverItemsLength =
                            response.data.data.total;
                        this.tableOptions.loading = false;
                        resolve();
                    })
                    .catch(error => {
                        this.tableOptions.loading = false;
                        console.log(error);
                        console.log(error.response);
                        reject();
                    });
            });
        },
        onSelect() {
            if (this.selectedItems.length == 0) {
                return;
            } else {
                this.$refs.dialog.save(this.selectedItems);
                this.$emit("on-select", this.selectedItems);
            }
        },
        closeDialog() {
            this.dialog = false;
        }
    },
    computed: {
        params(nv) {
            return {
                ...this.tableOptions.options
                // query: this.search
                // query: this.status
            };
        }
    },
    watch: {
        search() {
            if (!this.search) {
                this.getData();
            }
        },
        params: {
            immediate: true,
            deep: true,
            handler() {
                this.getData();
            }
        },
        selected: {
            deep: true,
            immediate: true,
            handler(newValue) {
                this.selectedItems = newValue;
            }
        },
        dialogLicense: {
            immediate: true,
            handler(newValue) {
                this.dialog = newValue;
                if (newValue) {
                    this.getData();
                }
            }
        }
    }
};
</script>
