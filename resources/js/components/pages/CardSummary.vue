<template>
    <v-card>
        <slot name="header"></slot>

        <v-list-item two-line>
            <v-list-item-content>
                <v-list-item-title class="text-h5">
                    {{ title }}
                </v-list-item-title>
                <v-list-item-subtitle>
                    {{ subtitle }}
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-card-text>
            <slot name="body"></slot>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
            <slot name="actions"></slot>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "card-summary",
    props: {
        title: {
            type: String,
            default: ""
        },
        subtitle: {
            type: String,
            default: ""
        }
    },
    data() {
        return {};
    }
};
</script>
