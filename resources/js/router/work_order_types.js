import store from "../store/index";

const work_order_type_routes = [
    {
        path: "/work_order_types",
        component: () => import("../pages/work_order_types/Index"),
        name: "work_order_types.index",
        meta: {
            auth: true,
            keepAlive: true
        },
        beforeEnter: (to, from, next) => {
            store.dispatch("auth/AUTH_NOTIFICATIONS");
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view all work order types")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/work_order_types/create",
        component: () => import("../pages/work_order_types/Create"),
        name: "work_order_types.create",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("add work order types")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/work_order_types/:id",
        component: () => import("../pages/work_order_types/Show"),
        name: "work_order_types.show",
        meta: {
            auth: true,
            keepAlive: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view work order types")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    }
];

export default work_order_type_routes;
