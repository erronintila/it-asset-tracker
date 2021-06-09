<template>
    <v-app>
        <application-bar
            v-if="user && authenticated"
            :user="user"
            :left_drawer="left_drawer"
            :clipped_left="true"
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
                    icon: "mdi-chevron-up",
                    "icon-alt": "mdi-chevron-down",
                    text: "Work Orders",
                    model: false,
                    children: [
                        {
                            icon: "mdi-chart-areaspline",
                            text: "View All",
                            link: { name: "work_orders.index" }
                        },
                        {
                            icon: "mdi-calendar-month",
                            text: "Schedule Board",
                            link: { name: "schedules.index" }
                        },
                        {
                            icon: "mdi-chart-areaspline",
                            text: "Contracts",
                            link: { name: "work_orders.index" }
                        },
                        {
                            icon: "mdi-chart-areaspline",
                            text: "Warranties",
                            link: { name: "work_orders.index" }
                        }
                    ]
                },
                {
                    icon: "mdi-chevron-up",
                    "icon-alt": "mdi-chevron-down",
                    text: "Assets",
                    model: false,
                    children: [
                        {
                            icon: "mdi-chart-areaspline",
                            text: "View All",
                            link: { name: "assets.index" }
                        },
                        // {
                        //     icon: "mdi-chart-areaspline",
                        //     text: "Components",
                        //     link: { name: "components.index" }
                        // },
                        // {
                        //     icon: "mdi-chart-areaspline",
                        //     text: "Accessories",
                        //     link: { name: "accessories.index" }
                        // },
                        // {
                        //     icon: "mdi-chart-areaspline",
                        //     text: "Consumables",
                        //     link: { name: "consumables.index" }
                        // },
                        {
                            icon: "mdi-chart-areaspline",
                            text: "Licenses",
                            link: { name: "licenses.index" }
                        },
                        {
                            icon: "mdi-chart-areaspline",
                            text: "Models",
                            link: { name: "asset_models.index" }
                        }
                    ]
                },
                {
                    icon: "mdi-chevron-up",
                    "icon-alt": "mdi-chevron-down",
                    text: "Accounts",
                    model: false,
                    children: [
                        {
                            icon: "mdi-chart-areaspline",
                            text: "Users",
                            link: { name: "accounts.index" }
                        },
                        {
                            icon: "mdi-chart-areaspline",
                            text: "Customers",
                            link: { name: "customers.index" }
                        },
                        {
                            icon: "mdi-chart-areaspline",
                            text: "Suppliers",
                            link: { name: "suppliers.index" }
                        },
                        {
                            icon: "mdi-chart-areaspline",
                            text: "Manufacturers",
                            link: { name: "manufacturers.index" }
                        }
                    ]
                },
                {
                    icon: "mdi-chevron-up",
                    "icon-alt": "mdi-chevron-down",
                    text: "Reports",
                    model: false,
                    children: [
                        {
                            icon: "mdi-file-chart",
                            text: "Asset Maintenance",
                            link: { name: "reports.asset_maintenance.index" }
                        },
                        {
                            icon: "mdi-file-chart",
                            text: "Activity Logs",
                            link: { name: "reports.activity_logs.index" }
                        }
                    ]
                },
                {
                    icon: "mdi-chevron-up",
                    "icon-alt": "mdi-chevron-down",
                    text: "Settings",
                    model: false,
                    children: [
                        {
                            icon: "mdi-chart-areaspline",
                            text: "General Settings",
                            link: { name: "settings.general.index" }
                        },
                        {
                            icon: "mdi-chart-areaspline",
                            text: "Account Settings",
                            link: { name: "settings.account.index" }
                        },
                        {
                            icon: "mdi-circle-medium",
                            text: "Permissions",
                            link: { name: "permissions.index" }
                        },
                        {
                            icon: "mdi-chart-areaspline",
                            text: "Categories",
                            link: { name: "categories.index" }
                        },
                        {
                            icon: "mdi-chart-areaspline",
                            text: "Departments",
                            link: { name: "departments.index" }
                        },
                        {
                            icon: "mdi-chart-areaspline",
                            text: "Locations",
                            link: { name: "locations.index" }
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
