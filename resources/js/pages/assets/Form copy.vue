<template>
    <v-form>
        <v-row>
            <v-col>
                <v-text-field label="Name"></v-text-field>
            </v-col>
        </v-row>
    </v-form>
</template>

<script>
export default {
    props: {
        
    },
    data() {
        return {
            form: {},
            errors: {},
            rules: {}
        };
    }
};
</script>
