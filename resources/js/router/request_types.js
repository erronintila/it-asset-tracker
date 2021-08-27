import store from "../store/index";

const request_type_routes = [
    {
        path: "/request_types",
        component: () => import("../pages/request_types/Index"),
        name: "request_types.index",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view all request types")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/request_types/create",
        component: () => import("../pages/request_types/Create"),
        name: "request_types.create",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("add request types")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/request_types/:id",
        component: () => import("../pages/request_types/Show"),
        name: "request_types.show",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view request types")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    }
];

export default request_type_routes;
