import store from "../store/index";

const review_routes = [
    {
        path: "/reviews",
        component: () => import("../pages/reviews/Index"),
        name: "reviews.index",
        meta: {
            auth: true,
            keepAlive: true
        },
        beforeEnter: (to, from, next) => {
            store.dispatch("auth/AUTH_NOTIFICATIONS");
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view all reviews")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/reviews/create",
        component: () => import("../pages/reviews/Create"),
        name: "reviews.create",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("add reviews")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/reviews/:id/edit",
        component: () => import("../pages/reviews/Edit"),
        name: "reviews.edit",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("edit reviews")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/reviews/:id",
        component: () => import("../pages/reviews/Show"),
        name: "reviews.show",
        meta: {
            auth: true,
            keepAlive: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view reviews")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    }
];

export default review_routes;
