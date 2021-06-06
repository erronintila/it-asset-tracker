const pages_routes = [
    {
        path: "/test",
        component: () => import("../pages/tests/Index"),
        name: "test"
    },
    {
        path: "/",
        component: () => import("../pages/home/Index"),
        name: "home",
        meta: {
            auth: true
        }
    },
    {
        path: "/profile",
        component: () => import("../pages/profile/Index"),
        name: "profile",
        meta: {
            auth: true
        }
    },
    {
        path: "/dashboard",
        component: () => import("../pages/dashboard/Index"),
        name: "dashboard",
        meta: {
            auth: true
        }
    }
];

export default pages_routes;
