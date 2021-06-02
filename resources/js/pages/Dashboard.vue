<template>
    <div>
        <p class="title">Welcome <span v-if="user">{{ user.name }}</span></p>
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