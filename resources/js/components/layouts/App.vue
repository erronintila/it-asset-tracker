<template>
    <v-app>
        <application-bar
            v-if="user && authenticated"
            :user="user"
            :left_drawer="left_drawer"
            :clipped_left="false"
            @open-close-drawer="openCloseDrawer"
        ></application-bar>

        <left-navigation-drawer
            v-if="user && authenticated"
            :user="user"
            :left_drawer="left_drawer"
            :left_drawer_items="left_drawer_items"
            :floating="true"
            @open-close-drawer="openCloseDrawer"
        ></left-navigation-drawer>

        <v-main class="white mb-8 pb-8">
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
                    icon: "mdi-calendar-month",
                    text: "Schedule Board",
                    link: { name: "schedules.index" }
                },
                {
                    icon: "mdi-text-box-multiple-outline",
                    text: "Work Orders",
                    link: { name: "work_orders.index" }
                },
                {
                    icon: "mdi-package-variant",
                    text: "Products",
                    link: { name: "products.index" }
                },
                {
                    icon: "mdi-account-group-outline",
                    text: "Customers",
                    link: { name: "customers.index" }
                },
                {
                    icon: "mdi-file-chart",
                    text: "Reports",
                    link: { name: "reports.index" }
                },
                {
                    icon: "mdi-chevron-up",
                    "icon-alt": "mdi-chevron-down",
                    text: "More",
                    model: false,
                    children: [
                        {
                            icon: "mdi-chart-areaspline",
                            text: "Users",
                            link: { name: "users.index" }
                        },
                        {
                            icon: "mdi-circle-medium",
                            text: "Permissions",
                            link: { name: "permissions.index" }
                        },
                        {
                            icon: "mdi-chart-areaspline",
                            text: "Settings",
                            link: { name: "settings.index" }
                        }
                    ]
                }
            ],
            footer: {
                company_name: "Twin-Circa Marketing",
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
