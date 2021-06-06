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
    </div>
</template>

<script>
export default {
    data() {
        return {
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
