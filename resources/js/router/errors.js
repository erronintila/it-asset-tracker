import store from "../store/index";

const error_routes = [
    {
        path: "*",
        name: "404",
        component: () => import("../pages/errors/404")
        // meta: {
        //     requiresAuth: false,
        //     requiresAdmin: false
        // }
    },
    {
        path: "/error-403",
        name: "error_403",
        component: () => import("../pages/errors/403")
        // meta: {
        //     requiresAuth: false,
        //     requiresAdmin: false
        // }
    },
    {
        path: "/error-500",
        name: "error_500",
        component: () => import("../pages/errors/500")
        // meta: {
        //     requiresAuth: false,
        //     requiresAdmin: false
        // }
    },
    {
        path: "/error-503",
        name: "error_503",
        component: () => import("../pages/errors/503")
        // meta: {
        //     requiresAuth: false,
        //     requiresAdmin: false
        // }
    },
    {
        path: "/error-401",
        name: "error_401",
        component: () => import("../pages/errors/401")
        // meta: {
        //     requiresAuth: false,
        //     requiresAdmin: false
        // }
    }
];

export default error_routes;
