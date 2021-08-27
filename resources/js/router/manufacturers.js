import store from "../store/index";

const manufacturer_routes = [
    {
        path: "/manufacturers",
        component: () => import("../pages/manufacturers/Index"),
        name: "manufacturers.index",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view all manufacturers")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/manufacturers/create",
        component: () => import("../pages/manufacturers/Create"),
        name: "manufacturers.create",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("add manufacturers")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/manufacturers/:id",
        component: () => import("../pages/manufacturers/Show"),
        name: "manufacturers.show",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view manufacturers")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/manufacturers/:id/edit",
        component: () => import("../pages/manufacturers/Edit"),
        name: "manufacturers.edit",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("edit manufacturers")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    }
];

export default manufacturer_routes;
