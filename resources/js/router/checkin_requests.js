import store from "../store/index";

const checkin_request_routes = [
    {
        path: "/checkin_requests",
        component: () => import("../pages/checkin_requests/Index"),
        name: "checkin_requests.index",
        meta: {
            auth: true,
            keepAlive: true
        },
        beforeEnter: (to, from, next) => {
            store.dispatch("auth/AUTH_NOTIFICATIONS");
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view all checkin requests")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/checkin_requests/create",
        component: () => import("../pages/checkin_requests/Create"),
        name: "checkin_requests.create",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("add checkin requests")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/checkin_requests/:id/edit",
        name: "checkin_requests.edit",
        component: () => import("../pages/checkin_requests/Edit"),
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("edit checkin requests")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/checkin_requests/:id",
        name: "checkin_requests.show",
        component: () => import("../pages/checkin_requests/Show"),
        meta: {
            auth: true,
            keepAlive: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view checkin requests")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    }
];

export default checkin_request_routes;
