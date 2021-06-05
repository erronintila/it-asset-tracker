import Vue from "vue";
import VueRouter from "vue-router";
import auth_routes from "./auth";
import pages_routes from "./pages";
import account_routes from "./accounts";
import permission_routes from "./permissions";
import work_order_routes from "./work_orders";
import schedule_routes from "./schedules";
import report_routes from "./reports";
import setting_routes from "./settings";
import product_routes from "./products";
import notification_routes from "./notifications";

import store from "../store/index";

const baseRoutes = [];
const routes = baseRoutes.concat(
    auth_routes,
    pages_routes,
    account_routes,
    permission_routes,
    work_order_routes,
    schedule_routes,
    report_routes,
    setting_routes,
    product_routes,
    notification_routes
);

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.auth)) {
        if (!store.getters["auth/authenticated"]) {
            next({ name: "login" });
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.guest)) {
        if (!store.getters["auth/authenticated"]) {
            next();
        } else {
            next({ name: "home" });
        }
    } else {
        next();
    }
});
