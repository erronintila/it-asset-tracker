import Vue from "vue";
import VueRouter from "vue-router";
import auth_routes from "./auth";
import pages_routes from "./pages";
import user_routes from "./users";
import customer_routes from "./customers";
import store from "../store/index";

const baseRoutes = [];
const routes = baseRoutes.concat(
    auth_routes,
    pages_routes,
    user_routes,
    customer_routes
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
