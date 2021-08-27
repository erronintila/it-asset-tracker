import store from "../store/index";

const feature_routes = [
    {
        path: "/settings/asset/review_category/:id/features",
        component: () => import("../pages/features/Index"),
        name: "features.index",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view all features")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/features/create",
        component: () => import("../pages/features/Create"),
        name: "features.create",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("add features")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/features/:id",
        component: () => import("../pages/features/Show"),
        name: "features.show",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view features")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/features/:id/edit",
        component: () => import("../pages/features/Edit"),
        name: "features.edit",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("edit features")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    }
];

export default feature_routes;
