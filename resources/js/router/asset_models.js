const asset_model_routes = [
    {
        path: "/asset_models",
        component: () => import("../pages/asset_models/Index"),
        name: "asset_models.index",
        meta: {
            auth: true
        }
    },
    {
        path: "/asset_models/create",
        component: () => import("../pages/asset_models/Create"),
        name: "asset_models.create",
        meta: {
            auth: true
        }
    },
    {
        path: "/asset_models/:id",
        component: () => import("../pages/asset_models/Show"),
        name: "asset_models.show",
        meta: {
            auth: true
        }
    }
];

export default asset_model_routes;
