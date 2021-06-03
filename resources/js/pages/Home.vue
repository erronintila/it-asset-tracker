<template>
    <div>
        <div class="title">Welcome {{ user.name }}</div>
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
