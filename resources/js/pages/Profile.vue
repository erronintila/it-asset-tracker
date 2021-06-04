<template>
    <div>
        <v-row>
            <v-col class="d-flex align-center">
                <div class="page-title d-inline mr-3">
                    Profile
                </div>
            </v-col>
        </v-row>
        <div class="my-4">
            <p>Name: {{ user ? user.name : "" }}</p>
            <p>Email: {{ user ? user.email : "" }}</p>
            <p>Date Created: {{ user ? user.created_at : "" }}</p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "profile",
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
