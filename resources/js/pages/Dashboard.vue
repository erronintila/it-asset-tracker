<template>
    <div>
        <div class="title">Dashboard</div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "dashboard",
    computed: {
        ...mapGetters({
            user: "auth/user"
        })
    }
};
</script>