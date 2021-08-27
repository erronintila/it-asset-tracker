import store from "../store/index";

const asset_model_routes = [
    {
        path: "/asset_models",
        component: () => import("../pages/asset_models/Index"),
        name: "asset_models.index",
        meta: {
            auth: true,
            keepAlive: true
        },
        beforeEnter: (to, from, next) => {
            store.dispatch("auth/AUTH_NOTIFICATIONS");
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view all asset models")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/asset_models/create",
        component: () => import("../pages/asset_models/Create"),
        name: "asset_models.create",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("add asset models")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/asset_models/:id/edit",
        component: () => import("../pages/asset_models/Edit"),
        name: "asset_models.edit",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("edit asset models")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/asset_models/:id",
        component: () => import("../pages/asset_models/Show"),
        name: "asset_models.show",
        meta: {
            auth: true,
            keepAlive: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view asset models")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    }
];

export default asset_model_routes;
