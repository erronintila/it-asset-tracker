<template>
    <div class="container">
        <v-row>
            <v-col class="d-flex justify-end align-center">
                <v-file-input
                    v-model="file"
                    show-size
                    label="File input"
                    outlined
                    counter
                    dense
                ></v-file-input>
            </v-col>
            <v-col>
                <v-btn color="primary" @click="onSave">Add</v-btn>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-data-table
                    item-key="id"
                    :headers="tableOptions.headers"
                    :items="items"
                    :loading="tableOptions.loading"
                    :options.sync="tableOptions.options"
                    :server-items-length="tableOptions.serverItemsLength"
                    :footer-props="{
                        itemsPerPageOptions: tableOptions.itemsPerPageOptions,
                        showFirstLastPage: true,
                        firstIcon: 'mdi-page-first',
                        lastIcon: 'mdi-page-last',
                        prevIcon: 'mdi-chevron-left',
                        nextIcon: 'mdi-chevron-right'
                    }"
                >
                    <template v-slot:[`item.actions`]="{ item }">
                        <v-btn icon @click="onDownload(item)">
                            <v-icon>mdi-download</v-icon>
                        </v-btn>
                        <v-btn icon @click="onDelete(item)">
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import _ from "lodash";
import MediaDataService from "../../services/MediaDataService";

export default {
    props: {
        asset_id: {
            type: Number,
            default: null
        }
    },
    data() {
        return {
            file: null,
            tableOptions: {
                options: {
                    sortBy: ["description"],
                    sortDesc: [false],
                    page: 1,
                    itemsPerPage: 10
                },
                loading: false,
                itemsPerPageOptions: [10, 20, 50, 100],
                serverItemsLength: 0,
                headers: [
                    { text: "Name", value: "name", sortable: false },
                    { text: "Type", value: "mime_type", sortable: false },
                    { text: "Actions", value: "actions", sortable: false }
                ]
            },
            items: []
        };
    },
    methods: {
        async getData() {
            this.tableOptions.loading = true;
            const {
                sortBy,
                sortDesc,
                page,
                itemsPerPage
            } = this.tableOptions.options;
            let data = {
                params: {
                    sortBy: sortBy[0],
                    sortType: sortDesc[0] ? "desc" : "asc",
                    page: page,
                    itemsPerPage: itemsPerPage,
                    model: "Asset",
                    model_id: this.asset_id
                }
            };

            try {
                const response = await MediaDataService.getAll(data);
                this.items = response.data.data.data;
                this.tableOptions.serverItemsLength = response.data.data.total;
                this.tableOptions.loading = false;
            } catch (error) {
                console.log(error);
                this.tableOptions.loading = false;
                alert("An error has occurred.");
            }
        },
        onSave() {
            if (!confirm("Do you want to add to media library?")) {
                return;
            }

            let formData = new FormData();
            formData.append("file", this.file);
            formData.append("model", "Asset");
            formData.append("model_id", this.asset_id);

            axios
                .post("/api/v1/media", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })
                .then(response => {
                    alert("Successfully uploaded.");
                    this.file = null;
                    this.getData();
                })
                .catch(error => {
                    console.log(error);
                });
        },
        onDelete(item) {
            if (!confirm("WARNING: Do you want to delete selected media?")) {
                return;
            }

            MediaDataService.delete(item.id)
                .then(response => {
                    this.getData();
                })
                .catch(error => {
                    console.log(error);
                    alert("An error has occurred.");
                });
        },
        onDownload(item) {
            MediaDataService.show(item.id)
                .then(response => {
                    let fileURL = window.URL.createObjectURL(
                        new Blob([response.data])
                    );
                    let fileLink = document.createElement("a");

                    fileLink.href = fileURL;
                    fileLink.setAttribute("download", item.file_name);
                    document.body.appendChild(fileLink);

                    fileLink.click();
                })
                .catch(error => {
                    console.log(error);
                    alert("An error has occurred.");
                });
        }
    },
    computed: {
        params(nv) {
            return {
                ...this.tableOptions.options
            };
        }
    },
    watch: {
        params: {
            immediate: true,
            deep: true,
            handler() {
                this.getData();
            }
        }
    }
};
</script>
