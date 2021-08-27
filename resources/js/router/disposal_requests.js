import store from "../store/index";

const disposal_request_routes = [
    {
        path: "/disposal_requests",
        component: () => import("../pages/disposal_requests/Index"),
        name: "disposal_requests.index",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view all disposal requests")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/disposal_requests/create",
        component: () => import("../pages/disposal_requests/Create"),
        name: "disposal_requests.create",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("add disposal requests")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/disposal_requests/:id/edit",
        name: "disposal_requests.edit",
        component: () => import("../pages/disposal_requests/Edit"),
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("edit disposal requests")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/disposal_requests/:id",
        name: "disposal_requests.show",
        component: () => import("../pages/disposal_requests/Show"),
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view disposal requests")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    }
];

export default disposal_request_routes;
