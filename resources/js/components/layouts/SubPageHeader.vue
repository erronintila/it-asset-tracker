<template>
    <v-row>
        <v-col class="d-flex justify-start align-center">
            <v-btn icon @click="$router.go(-1)" v-if="backButton" class="mr-3">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <span class="page-title">{{ title }}</span>
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ""
        },
        backButton: {
            type: Boolean,
            default: false
        }
    }
};
</script>
