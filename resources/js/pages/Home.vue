<template>
    <div>
        <v-row>
            <v-col class="d-flex align-center">
                <div class="page-title d-inline mr-3">
                    Welcome {{ user.name }}
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "home",
    computed: {
        ...mapGetters({
            user: "auth/user"
        })
    }
};
</script>

<style scoped>
.page-title {
    font-size: 1.5rem;
    font-weight: 100;
}
</style>
