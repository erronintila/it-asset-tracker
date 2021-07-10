<template>
    <div>
        <v-btn @click="openSnackbar2">Open Snackbar</v-btn>
        <v-snackbar
            :color="snackbar2.color"
            v-model="snackbar2.visible"
            right
            top
            :timeout="snackbar2.timeout"
            :outlined="snackbar2.outlined"
        >
            {{ snackbar2.text }}

            <template v-slot:action="{ attrs }">
                <v-btn icon v-bind="attrs" @click="snackbar2.visible = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </template>
        </v-snackbar>

        <v-btn @click="dialog = true">Open Dialog</v-btn>

        <XDialog
            :dialog="dialog"
            :title="'hahaha'"
            @close-dialog="dialog = false"
        >
            <!-- <template v-slot:table>
                <XDataTable
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
                ></XDataTable>
            </template> -->
        </XDialog>
    </div>
</template>

<script>
import XDialog from "../../components/X-Dialog.vue";
import XDataTable from "../../components/X-DataTable.vue";

export default {
    components: {
        XDialog,
        XDataTable
    },
    data() {
        return {
            dialog: false,
            snackbar2: {
                outlined: true,
                color: null,
                icon: null,
                mode: null,
                position: "top",
                text: null,
                timeout: 7500,
                title: null,
                visible: false
            }
        };
    },
    methods: {
        openSnackbar2() {
            this.snackbar2 = {
                outlined: true,
                color: "primary",
                icon: "mdi-info",
                mode: "multi-line",
                position: "top",
                timeout: 2000,
                title: "Welcome",
                text: "Welcome",
                visible: true
            };
        }
    }
};
</script>
