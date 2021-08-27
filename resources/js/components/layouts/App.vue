<template>
    <v-app>
        <loading-screen
            :isLoading="isLoading"
            :autoClose="false"
        ></loading-screen>
        <application-bar
            v-if="user && authenticated && !isLoading"
            :user="user"
            :left_drawer="left_drawer"
            :clipped_left="true"
            @open-close-drawer="openCloseDrawer"
        ></application-bar>

        <left-navigation-drawer
            v-if="user && authenticated && !isLoading"
            :user="user"
            :left_drawer="left_drawer"
            :left_drawer_items="left_drawer_items"
            :floating="true"
            @open-close-drawer="openCloseDrawer"
        ></left-navigation-drawer>

        <v-main class="white mb-8 pb-8" v-if="!isLoading">
            <v-container fluid>
                <!-- <router-view></router-view> -->
                <transition name="fade" mode="out-in">
                    <keep-alive>
                        <router-view v-if="$route.meta.keepAlive"></router-view>
                    </keep-alive>
                </transition>

                <transition name="fade" mode="out-in">
                    <router-view v-if="!$route.meta.keepAlive"></router-view>
                </transition>
            </v-container>
        </v-main>

        <page-footer
            v-if="user && authenticated && !isLoading"
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
            isLoading: true,
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
                    text: "Assets",
                    model: false,
                    children: [
                        {
                            icon: "mdi-chart-areaspline",
                            text: "View All",
                            link: { name: "assets.index" }
                        },
                        {
                            icon: "mdi-chart-areaspline",
                            text: "Checkin Requests",
                            link: { name: "checkin_requests.index" }
                        },
                        {
                            icon: "mdi-chart-areaspline",
                            text: "Checkout Requests",
                            link: { name: "checkout_requests.index" }
                        },

                        {
                            icon: "mdi-chart-areaspline",
                            text: "Disposal Requests",
                            link: { name: "disposal_requests.index" }
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
                        {
                            icon: "mdi-chart-areaspline",
                            text: "Models",
                            link: { name: "asset_models.index" }
                        },
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
                            text: "Locations",
                            link: { name: "locations.index" }
                        },
                        {
                            icon: "mdi-chart-areaspline",
                            text: "Reviews",
                            link: { name: "reviews.index" }
                        }
                        // {
                        //     icon: "mdi-chart-areaspline",
                        //     text: "Asset Reviews",
                        //     link: { name: "reviews.index" }
                        // }
                        // {
                        //     icon: "mdi-chart-areaspline",
                        //     text: "Reviews",
                        //     link: { name: "licenses.index" }
                        // }
                    ]
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
                            text: "Service Agreements",
                            link: { name: "agreements.index" }
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
                            text: "Employees",
                            link: { name: "employees.index" }
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
                            icon: "mdi-chart-areaspline",
                            text: "Asset Settings",
                            link: { name: "settings.asset.index" }
                        },
                        {
                            icon: "mdi-chart-areaspline",
                            text: "Work Order Settings",
                            link: { name: "settings.work_order.index" }
                        }
                        // {
                        //     icon: "mdi-circle-medium",
                        //     text: "Permissions",
                        //     link: { name: "permissions.index" }
                        // },
                        // {
                        //     icon: "mdi-chart-areaspline",
                        //     text: "Departments",
                        //     link: { name: "departments.index" }
                        // }

                        // {
                        //     icon: "mdi-chart-areaspline",
                        //     text: "Asset Categories",
                        //     link: { name: "categories.index" }
                        // },
                        // {
                        //     icon: "mdi-chart-areaspline",
                        //     text: "Work Order Types",
                        //     link: { name: "categories.index" }
                        // },
                        // {
                        //     icon: "mdi-chart-areaspline",
                        //     text: "Request Types",
                        //     link: { name: "categories.index" }
                        // },
                        // {
                        //     icon: "mdi-chart-areaspline",
                        //     text: "Asset Statuses",
                        //     link: { name: "categories.index" }
                        // },
                        // {
                        //     icon: "mdi-chart-areaspline",
                        //     text: "Review Categories",
                        //     link: { name: "categories.index" }
                        // }
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
    },
    created() {
        setTimeout(() => {
            this.isLoading = false;
        }, 2000);
    }
};
</script>

<style scoped>
/* #app {
    overflow: hidden;
    width: 100vw;
} */

.fade-enter,
.fade-leave-to {
    opacity: 0;
    /* transform: translateX(2em); */
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease;
}
</style>
