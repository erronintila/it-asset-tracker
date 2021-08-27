import store from "../store/index";

const employee_routes = [
    {
        path: "/employees",
        component: () => import("../pages/employees/Index"),
        name: "employees.index",
        meta: {
            auth: true,
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view all employees")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/employees/create",
        component: () => import("../pages/employees/Create"),
        name: "employees.create",
        meta: {
            auth: true,
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("add employees")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/employees/:id/edit",
        component: () => import("../pages/employees/Edit"),
        name: "employees.edit",
        meta: {
            auth: true,
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("edit employees")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/employees/:id",
        component: () => import("../pages/employees/Show"),
        name: "employees.show",
        meta: {
            auth: true,
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view employees")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    }
];

export default employee_routes;
