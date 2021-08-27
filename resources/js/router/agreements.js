import store from "../store/index";

const agreement_routes = [
    {
        path: "/agreements",
        component: () => import("../pages/agreements/Index"),
        name: "agreements.index",
        meta: {
            auth: true,
            keepAlive: true
        },
        beforeEnter: (to, from, next) => {
            store.dispatch("auth/AUTH_NOTIFICATIONS");
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view all agreements")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/agreements/create",
        component: () => import("../pages/agreements/Create"),
        name: "agreements.create",
        meta: {
            auth: true,
            keepAlive: false
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("add agreements")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/agreements/:id/edit",
        component: () => import("../pages/agreements/Edit"),
        name: "agreements.edit",
        meta: {
            auth: true,
            keepAlive: false
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("edit agreements")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/agreements/:id",
        component: () => import("../pages/agreements/Show"),
        name: "agreements.show",
        meta: {
            auth: true,
            keepAlive: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view agreements")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    }
];

export default agreement_routes;
