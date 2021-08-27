import store from "../store/index";

const license_routes = [
    {
        path: "/licenses",
        component: () => import("../pages/licenses/Index"),
        name: "licenses.index",
        meta: {
            auth: true,
            keepAlive: true
        },
        beforeEnter: (to, from, next) => {
            store.dispatch("auth/AUTH_NOTIFICATIONS");
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view all licenses")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/licenses/create",
        component: () => import("../pages/licenses/Create"),
        name: "licenses.create",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("add licenses")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/licenses/:id/edit",
        component: () => import("../pages/licenses/Edit"),
        name: "licenses.edit",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("edit licenses")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/licenses/:id",
        component: () => import("../pages/licenses/Show"),
        name: "licenses.show",
        meta: {
            auth: true,
            keepAlive: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view licenses")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    }
];

export default license_routes;
