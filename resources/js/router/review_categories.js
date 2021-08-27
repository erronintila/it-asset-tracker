import store from "../store/index";

const review_category_routes = [
    // {
    //     path: "/review_categories",
    //     component: () => import("../pages/review_categories/Index"),
    //     name: "review_categories.index",
    //     meta: {
    //         auth: true
    //     }
    // },
    {
        path: "/review_categories/create",
        component: () => import("../pages/review_categories/Create"),
        name: "review_categories.create",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view all review categories")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/review_categories/:id",
        component: () => import("../pages/review_categories/Show"),
        name: "review_categories.show",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view review categories")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/review_categories/:id/edit",
        component: () => import("../pages/review_categories/Edit"),
        name: "review_categories.edit",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("edit review categories")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    }
];

export default review_category_routes;
