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
    }
];

export default asset_routes;
