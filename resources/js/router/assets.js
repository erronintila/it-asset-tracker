const asset_routes = [
    {
        path: "/assets",
        component: () => import("../pages/assets/Index"),
        name: "assets.index",
        meta: {
            auth: true
        }
    },
    {
        path: "/assets/create",
        component: () => import("../pages/assets/Create"),
        name: "assets.create",
        meta: {
            auth: true
        }
    },
    {
        path: "/assets/:id/edit",
        name: "assets.edit",
        component: () => import("../pages/assets/Edit"),
        meta: {
            auth: true
        }
    },
    {
        path: "/assets/:id",
        name: "assets.show",
        component: () => import("../pages/assets/Show"),
        meta: {
            auth: true
        }
    }
];

export default asset_routes;
