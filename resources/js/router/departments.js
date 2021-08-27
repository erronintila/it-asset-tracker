import store from "../store/index";

const department_routes = [
    {
        path: "/departments",
        component: () => import("../pages/departments/Index"),
        name: "departments.index",
        meta: {
            auth: true,
            keepAlive: true
        },
        beforeEnter: (to, from, next) => {
            store.dispatch("auth/AUTH_NOTIFICATIONS");
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view all departments")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/departments/create",
        component: () => import("../pages/departments/Create"),
        name: "departments.create",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("add departments")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/departments/:id",
        component: () => import("../pages/departments/Show"),
        name: "departments.show",
        meta: {
            auth: true,
            keepAlive: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view departments")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    }
];

export default department_routes;
