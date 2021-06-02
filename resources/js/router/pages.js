const pages_routes = [
    {
        path: "/test",
        component: () => import("../pages/Test"),
        name: "test",
    },
    {
        path: "/",
        component: () => import("../pages/Home"),
        name: "home",
        meta: {
            auth: true,
        },
    },
    {
        path: "/profile",
        component: () => import("../pages/Profile"),
        name: "profile",
        meta: {
            auth: true,
        },
    },
    {
        path: "/dashboard",
        component: () => import("../pages/Dashboard"),
        name: "dashboard",
        meta: {
            auth: true,
        },
    }
];

export default pages_routes;
