const asset_category_routes = [
    {
        path: "/settings/asset/categories",
        component: () => import("../pages/asset_categories/Index"),
        name: "asset_categories.index",
        meta: {
            auth: true
        }
    },
    {
        path: "/settings/asset/categories/create",
        component: () => import("../pages/asset_categories/Create"),
        name: "asset_categories.create",
        meta: {
            auth: true
        }
    },
    {
        path: "/settings/asset/categories/:id",
        component: () => import("../pages/asset_categories/Show"),
        name: "asset_categories.show",
        meta: {
            auth: true
        }
    }
];

export default asset_category_routes;
