import store from "../store/index";

const supplier_routes = [
    {
        path: "/suppliers",
        component: () => import("../pages/suppliers/Index"),
        name: "suppliers.index",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view all suppliers")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/suppliers/create",
        component: () => import("../pages/suppliers/Create"),
        name: "suppliers.create",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("add suppliers")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/suppliers/:id",
        component: () => import("../pages/suppliers/Show"),
        name: "suppliers.show",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view suppliers")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/suppliers/:id/edit",
        component: () => import("../pages/suppliers/Edit"),
        name: "suppliers.edit",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("edit suppliers")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    }
];

export default supplier_routes;
