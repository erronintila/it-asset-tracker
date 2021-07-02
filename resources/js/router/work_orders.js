const work_order_routes = [
    {
        path: "/work_orders",
        component: () => import("../pages/work_orders/Index"),
        name: "work_orders.index",
        meta: {
            auth: true
        }
    },
    {
        path: "/work_orders/create",
        component: () => import("../pages/work_orders/Create"),
        name: "work_orders.create",
        meta: {
            auth: true
        }
    },
    {
        path: "/work_orders/:id/edit",
        component: () => import("../pages/work_orders/Edit"),
        name: "work_orders.edit",
        meta: {
            auth: true
        }
    },
    {
        path: "/work_orders/:id",
        component: () => import("../pages/work_orders/Show"),
        name: "work_orders.show",
        meta: {
            auth: true
        }
    }
];

export default work_order_routes;
