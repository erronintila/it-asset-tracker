import store from "../store/index";

const asset_routes = [
    {
        path: "/assets",
        component: () => import("../pages/assets/Index"),
        name: "assets.index",
        meta: {
            auth: true,
            keepAlive: true
        },
        beforeEnter: (to, from, next) => {
            store.dispatch("auth/AUTH_NOTIFICATIONS");
            let permissions = store.getters["auth/user"].permissions;

            if (permissions.includes("view all assets")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/assets/create",
        component: () => import("../pages/assets/Create"),
        name: "assets.create",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("add assets")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/assets/:id/edit",
        name: "assets.edit",
        component: () => import("../pages/assets/Edit"),
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("edit assets")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/assets/:id",
        name: "assets.show",
        component: () => import("../pages/assets/Show"),
        meta: {
            auth: true,
            keepAlive: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view assets")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    }
];

export default asset_routes;
