import store from "../store/index";

const asset_category_routes = [
    {
        path: "/settings/asset/categories",
        component: () => import("../pages/asset_categories/Index"),
        name: "asset_categories.index",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view all asset categories")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/settings/asset/categories/create",
        component: () => import("../pages/asset_categories/Create"),
        name: "asset_categories.create",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("add asset categories")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/settings/asset/categories/:id",
        component: () => import("../pages/asset_categories/Show"),
        name: "asset_categories.show",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view asset categories")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    }
];

export default asset_category_routes;
