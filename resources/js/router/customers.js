import store from "../store/index";

const customer_routes = [
    {
        path: "/customers",
        component: () => import("../pages/customers/Index"),
        name: "customers.index",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view all customers")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/customers/create",
        component: () => import("../pages/customers/Create"),
        name: "customers.create",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("add customers")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/customers/:id/edit",
        component: () => import("../pages/customers/Edit"),
        name: "customers.edit",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("edit customers")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/customers/:id",
        component: () => import("../pages/customers/Show"),
        name: "customers.show",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view customers")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    }
];

export default customer_routes;
