import Vue from "vue";
import VueRouter from "vue-router";
import auth_routes from "./auth";
import pages_routes from "./pages";
import store from "../store/index";

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [...auth_routes, ...pages_routes]
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
