import store from "../store/index";

const checkout_request_routes = [
    {
        path: "/checkout_requests",
        component: () => import("../pages/checkout_requests/Index"),
        name: "checkout_requests.index",
        meta: {
            auth: true,
            keepAlive: true
        },
        beforeEnter: (to, from, next) => {
            store.dispatch("auth/AUTH_NOTIFICATIONS");
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view all checkout requests")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/checkout_requests/create",
        component: () => import("../pages/checkout_requests/Create"),
        name: "checkout_requests.create",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("add checkout requests")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/checkout_requests/:id/edit",
        name: "checkout_requests.edit",
        component: () => import("../pages/checkout_requests/Edit"),
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("edit checkout requests")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/checkout_requests/:id",
        name: "checkout_requests.show",
        component: () => import("../pages/checkout_requests/Show"),
        meta: {
            auth: true,
            keepAlive: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view checkout requests")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    }
];

export default checkout_request_routes;
