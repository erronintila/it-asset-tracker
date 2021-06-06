const setting_routes = [
    {
        path: "/settings/general",
        component: () => import("../pages/settings/general/Index"),
        name: "settings.general.index",
        meta: {
            auth: true
        }
    },
    {
        path: "/settings/account",
        component: () => import("../pages/settings/account/Index"),
        name: "settings.account.index",
        meta: {
            auth: true
        }
    }
];

export default setting_routes;
