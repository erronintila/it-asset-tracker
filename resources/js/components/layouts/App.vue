<template>
    <v-app>
        <application-bar
            v-if="user && authenticated"
            :user="user"
            :left_drawer="left_drawer"
            @open-close-drawer="openCloseDrawer"
        ></application-bar>

        <left-navigation-drawer
            v-if="user && authenticated"
            :user="user"
            :left_drawer="left_drawer"
            :left_drawer_items="left_drawer_items"
            @open-close-drawer="openCloseDrawer"
        ></left-navigation-drawer>

        <v-main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>

        <page-footer
            v-if="user && authenticated"
            :company_name="footer.company_name"
            :year="footer.year"
        ></page-footer>
    </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import ApplicationBar from "./ApplicationBar";
import LeftNavigationDrawer from "./LeftNavigationDrawer";
import PageFooter from "./PageFooter";

export default {
    name: "app",
    components: {
        ApplicationBar,
        LeftNavigationDrawer,
        PageFooter
    },
    data() {
        return {
            left_drawer: true,
            left_drawer_items: [
                {
                    icon: "mdi-chart-areaspline",
                    text: "Dashboard",
                    link: { name: "dashboard" }
                },
                {
                    icon: "mdi-chevron-up",
                    "icon-alt": "mdi-chevron-down",
                    text: "More",
                    model: false,
                    children: [
                        {
                            icon: "mdi-circle-medium",
                            text: "Profile",
                            link: { name: "profile" }
                        }
                    ]
                }
            ],
            footer: {
                company_name: "Sample Company",
                year: "2021"
            }
        };
    },
    computed: {
        ...mapGetters({
            user: "auth/user",
            authenticated: "auth/authenticated"
        })
    },
    methods: {
        openCloseDrawer(e) {
            this.left_drawer = e;
        }
    }
};
</script>
