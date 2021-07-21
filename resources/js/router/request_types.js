const request_type_routes = [
    {
        path: "/request_types",
        component: () => import("../pages/request_types/Index"),
        name: "request_types.index",
        meta: {
            auth: true
        }
    },
    {
        path: "/request_types/create",
        component: () => import("../pages/request_types/Create"),
        name: "request_types.create",
        meta: {
            auth: true
        }
    },
    {
        path: "/request_types/:id",
        component: () => import("../pages/request_types/Show"),
        name: "request_types.show",
        meta: {
            auth: true
        }
    }
];

export default request_type_routes;
