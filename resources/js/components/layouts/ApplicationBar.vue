<template>
    <v-app-bar
        app
        :color="color"
        :dark="dark"
        :flat="flat"
        :clipped-left="clipped_left"
    >
        <v-app-bar-nav-icon @click.stop="openCloseDrawer"></v-app-bar-nav-icon>

        <v-toolbar-title class="hidden-sm-and-down ml-0 pl-4 mr-4">
            <router-link
                :to="{ name: 'dashboard' }"
                style="text-decoration: none; color: inherit;"
            >
                <span class="page-title">
                    IT Asset Tracker
                </span>
            </router-link>
        </v-toolbar-title>

        <v-btn
            class="hidden-md-and-up"
            icon
            @click="$router.push({ name: 'home' }, () => {})"
        >
            <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-spacer></v-spacer>

        <!-- <v-menu
            v-model="notification_menu"
            :close-on-content-click="false"
            offset-y
            transition="slide-y-transition"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-bell-outline</v-icon>
                </v-btn>
            </template>

            <v-card>
                <v-list>
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-icon>mdi-bell</v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>
                                Notifications
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                3 Unread
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list two-line max-width="400">
                    <v-list-item-group>
                        <template v-for="(item, index) in notifications">
                            <v-list-item :key="item.title">
                                <template>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            v-text="item.title"
                                        ></v-list-item-title>

                                        <v-list-item-subtitle
                                            class="text--primary"
                                            v-text="item.headline"
                                        ></v-list-item-subtitle>

                                        <v-list-item-subtitle
                                            v-text="item.subtitle"
                                        ></v-list-item-subtitle>
                                    </v-list-item-content>

                                    <v-list-item-action>
                                        <v-list-item-action-text
                                            v-text="item.action"
                                        ></v-list-item-action-text>
                                    </v-list-item-action>
                                </template>
                            </v-list-item>

                            <v-divider
                                v-if="index < notifications.length - 1"
                                :key="index"
                            ></v-divider>
                        </template>
                    </v-list-item-group>
                </v-list>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                        text
                        color="primary"
                        @click="viewNotifications"
                        x-large
                    >
                        View All
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-menu> -->

        <v-btn
            icon
            @click="$router.push({ name: 'notifications.index' }, () => {})"
        >
            <v-badge
                :content="
                    $store.getters['auth/notifications']
                        ? $store.getters['auth/notifications'].length
                        : null
                "
                :value="
                    $store.getters['auth/notifications']
                        ? $store.getters['auth/notifications'].length
                        : null
                "
                color="red"
                overlap
            >
                <v-icon>mdi-bell-outline</v-icon>
            </v-badge>
            <!-- <v-icon>mdi-bell-outline</v-icon> -->
        </v-btn>

        <v-menu
            v-model="profile_menu"
            :close-on-content-click="false"
            offset-y
            transition="slide-y-transition"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-account-circle-outline</v-icon>
                </v-btn>
            </template>

            <v-card>
                <v-list>
                    <v-list-item>
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
                                    <span>{{ user.full_name }}</span>
                                </router-link>
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                {{ user.email }}
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>

                <v-divider></v-divider>

                <!-- <v-list>
                    <v-list-item>
                        <v-list-item-action>
                            <v-switch
                                v-model="message"
                                color="purple"
                            ></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>
                            Enable messages
                        </v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-action>
                            <v-switch v-model="hints" color="purple"></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>
                            Enable hints
                        </v-list-item-title>
                    </v-list-item>
                </v-list> -->

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn text @click="onLogout" color="primary" x-large>
                        Log out
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-menu>
    </v-app-bar>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "application-bar",
    props: {
        color: {
            type: String,
            default: "white"
        },
        dark: {
            type: Boolean,
            default: false
        },
        flat: {
            type: Boolean,
            default: true
        },
        clipped_left: {
            type: Boolean,
            default: true
        },
        user: {
            type: Object,
            default: () => {}
        },
        left_drawer: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            profile_menu: false,
            notification_menu: false,
            message: false,
            hints: true,
            nav_drawer: false,
            notifications: [
                {
                    action: "15 min",
                    headline: "Brunch this weekend?",
                    subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
                    title: "Ali Connors"
                },
                {
                    action: "2 hr",
                    headline: "Summer BBQ",
                    subtitle: `Wish I could come, but I'm out of town this weekend.`,
                    title: "me, Scrott, Jennifer"
                },
                {
                    action: "6 hr",
                    headline: "Oui oui",
                    subtitle:
                        "Do you have Paris recommendations? Have you ever been?",
                    title: "Sandra Adams"
                }
            ]
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
                } catch (error) {
                    alert(error);
                }
            }
        },
        openCloseDrawer() {
            this.nav_drawer = !this.nav_drawer;
            this.$emit("open-close-drawer", this.nav_drawer);
        },
        viewNotifications() {
            this.notification_menu = false;
            this.$router.push({ name: "notifications.index" });
        }
    },
    watch: {
        left_drawer: {
            immediate: true,
            handler(newValue) {
                this.nav_drawer = newValue;
            }
        }
    }
};
</script>
