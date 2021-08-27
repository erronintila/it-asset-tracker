import store from "../store/index";

const setting_routes = [
    {
        path: "/settings/general",
        component: () => import("../pages/settings/general/Index"),
        name: "settings.general.index",
        meta: {
            auth: true,
            keepAlive: true
        },
        beforeEnter: (to, from, next) => {
            store.dispatch("auth/AUTH_NOTIFICATIONS");
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view all general settings")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/settings/account",
        component: () => import("../pages/settings/account/Index"),
        name: "settings.account.index",
        meta: {
            auth: true,
            keepAlive: true
        },
        beforeEnter: (to, from, next) => {
            store.dispatch("auth/AUTH_NOTIFICATIONS");
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view all account settings")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/settings/asset",
        component: () => import("../pages/settings/asset/Index"),
        name: "settings.asset.index",
        meta: {
            auth: true,
            keepAlive: true
        },
        beforeEnter: (to, from, next) => {
            store.dispatch("auth/AUTH_NOTIFICATIONS");
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view all asset settings")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/settings/work_order",
        component: () => import("../pages/settings/work_order/Index"),
        name: "settings.work_order.index",
        meta: {
            auth: true,
            keepAlive: true
        },
        beforeEnter: (to, from, next) => {
            store.dispatch("auth/AUTH_NOTIFICATIONS");
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view all work order settings")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    }
];

export default setting_routes;
