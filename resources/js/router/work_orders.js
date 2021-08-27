import store from "../store/index";

const work_order_routes = [
    {
        path: "/work_orders",
        component: () => import("../pages/work_orders/Index"),
        name: "work_orders.index",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view all work orders")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/work_orders/create",
        component: () => import("../pages/work_orders/Create"),
        name: "work_orders.create",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("add work orders")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/work_orders/:id/edit",
        component: () => import("../pages/work_orders/Edit"),
        name: "work_orders.edit",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("edit work orders")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/work_orders/:id",
        component: () => import("../pages/work_orders/Show"),
        name: "work_orders.show",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view work orders")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    }
];

export default work_order_routes;
