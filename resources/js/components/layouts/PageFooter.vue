<template>
    <v-footer  color="white" padless v-if="company_name !== ''">
        <v-col class="text-right" cols="12">
            <small>
                © {{ year }} Copyright — <strong>{{ company_name }}</strong>
            </small>
        </v-col>
    </v-footer>
</template>

<script>
export default {
    name: "page-footer",
    props: {
        company_name: {
            type: String,
            default: ""
        },
        year: {
            type: String,
            default: ""
        }
    }
};
</script>
