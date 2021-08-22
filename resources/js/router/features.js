const feature_routes = [
    {
        path: "/settings/asset/review_category/:id/features",
        component: () => import("../pages/features/Index"),
        name: "features.index",
        meta: {
            auth: true
        }
    },
    {
        path: "/features/create",
        component: () => import("../pages/features/Create"),
        name: "features.create",
        meta: {
            auth: true
        }
    },
    {
        path: "/features/:id",
        component: () => import("../pages/features/Show"),
        name: "features.show",
        meta: {
            auth: true
        }
    },
    {
        path: "/features/:id/edit",
        component: () => import("../pages/features/Edit"),
        name: "features.edit",
        meta: {
            auth: true
        }
    }
];

export default feature_routes;
