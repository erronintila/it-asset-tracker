const work_order_type_routes = [
    {
        path: "/work_order_types",
        component: () => import("../pages/work_order_types/Index"),
        name: "work_order_types.index",
        meta: {
            auth: true
        }
    },
    {
        path: "/work_order_types/create",
        component: () => import("../pages/work_order_types/Create"),
        name: "work_order_types.create",
        meta: {
            auth: true
        }
    },
    {
        path: "/work_order_types/:id",
        component: () => import("../pages/work_order_types/Show"),
        name: "work_order_types.show",
        meta: {
            auth: true
        }
    }
];

export default work_order_type_routes;
