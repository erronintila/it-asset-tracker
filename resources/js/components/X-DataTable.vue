<template>
    <v-data-table
        v-model="selected"
        :headers="headers"
        :items="items"
        :items-per-page="itemsPerPage"
        :show-select="showSelect"
        :single-select="singleSelect"
        :footer-props="{
            itemsPerPageOptions: itemsPerPageOptions
        }"
    ></v-data-table>
</template>

<script>
export default {
    name: "x-datatable",
    props: {
        // selected: {
        //     type: Array,
        //     default: () => []
        // },
        headers: {
            type: Array,
            default: () => []
        },
        items: {
            type: Array,
            default: () => []
        },
        itemsPerPageOptions: {
            type: Array,
            default: () => [3, 5]
        },
        itemsPerPage: {
            type: Number,
            default: 5
        },
        showSelect: {
            type: Boolean,
            default: true
        },
        singleSelect: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            selected: []
        };
    }
};
</script>
