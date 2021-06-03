const setting_routes = [
    {
        path: "/settings",
        component: () => import("../pages/settings/Index"),
        name: "settings.index",
        meta: {
            auth: true
        }
    }
];

export default setting_routes;
