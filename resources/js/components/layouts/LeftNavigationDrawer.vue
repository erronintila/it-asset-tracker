<template>
    <v-navigation-drawer
        app
        :clipped="$vuetify.breakpoint.mdAndUp"
        v-model="drawer"
        :floating="floating"
    >
        <template v-slot:prepend>
            <v-list-item dense two-line>
                <v-list-item-avatar>
                    <v-sheet color="grey lighten-4" class="pa-4">
                        <v-avatar
                            class="mb-4"
                            color="grey darken-1"
                            size="64"
                        ></v-avatar
                    ></v-sheet>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>
                        <router-link
                            :to="{ name: 'profile' }"
                            style="text-decoration: none; color: inherit;"
                        >
                            <span class="primary--text font-weight-bold">{{ user.name }}</span>
                        </router-link>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        {{ user.email }}
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </template>

        <!-- <v-divider></v-divider> -->

        <v-list dense rounded>
            <template v-for="item in left_drawer_items">
                <v-row v-if="item.heading" :key="item.heading"> </v-row>
                <v-list-group
                    color="primary"
                    v-else-if="item.children"
                    :key="item.text"
                    v-model="item.model"
                    :prepend-icon="item.model ? item.icon : item['icon-alt']"
                    append-icon=""
                >
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title>
                                <div class="font-weight-bold">
                                    {{ item.text }}
                                </div>
                            </v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <v-list-item
                        v-for="(child, i) in item.children"
                        :key="i"
                        :to="child.link"
                        link
                    >
                        <v-list-item-action v-if="child.icon">
                            <v-icon></v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                <div class="font-weight-bold">
                                    {{ child.text }}
                                </div>
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
                <v-list-item
                    color="primary"
                    v-else
                    :key="item.text"
                    :to="item.link"
                    link
                >
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            <div class="font-weight-bold">
                                {{ item.text }}
                            </div>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>

        <!-- <template v-slot:append>
            <div class="pa-2">
                <v-btn block color="primary" dark @click="onLogout">
                    Logout
                </v-btn>
            </div>
        </template> -->
    </v-navigation-drawer>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "left-navigation-drawer",
    props: {
        user: {
            type: Object,
            default: () => {}
        },
        floating: {
            type: Boolean,
            default: false
        },
        clipped: {
            type: String,
            default: "$vuetify.breakpoint.mdAndUp"
        },
        left_drawer: {
            type: Boolean,
            default: false
        },
        left_drawer_items: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            drawer: false
        };
    },
    methods: {
        ...mapActions({
            logout: "auth/AUTH_LOGOUT"
        }),
        async onLogout() {
            if (confirm("Do you want to log out?")) {
                try {
                    await this.logout();
                    this.$router.replace({ name: "login" });
                } catch (err) {
                    alert(err);
                }
            }
        }
    },
    watch: {
        left_drawer: {
            immediate: true,
            handler(newValue) {
                this.drawer = newValue;
            }
        },
        drawer() {
            this.$emit("open-close-drawer", this.drawer);
        }
    }
};
</script>
