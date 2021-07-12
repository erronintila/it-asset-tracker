<template>
    <v-toolbar dense flat>
        <v-app-bar-nav-icon v-if="backButton" @click="$router.go(-1)">
            <v-icon>mdi-arrow-left</v-icon>
        </v-app-bar-nav-icon>

        <v-toolbar-title class="page-title">
            {{ title }}
        </v-toolbar-title>

        <slot name="leftSideNavigation"></slot>

        <v-spacer></v-spacer>
        
        <slot name="rightSideNavigation"></slot>
    </v-toolbar>
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
