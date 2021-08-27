import store from "../store/index";

const location_routes = [
    {
        path: "/locations",
        component: () => import("../pages/locations/Index"),
        name: "locations.index",
        meta: {
            auth: true,
            keepAlive: true
        },
        beforeEnter: (to, from, next) => {
            store.dispatch("auth/AUTH_NOTIFICATIONS");
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view all locations")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/locations/create",
        component: () => import("../pages/locations/Create"),
        name: "locations.create",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("add locations")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/locations/:id",
        component: () => import("../pages/locations/Show"),
        name: "locations.show",
        meta: {
            auth: true,
            keepAlive: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view locations")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/locations/:id/edit",
        component: () => import("../pages/locations/Edit"),
        name: "locations.edit",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("edit locations")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    }
];

export default location_routes;
