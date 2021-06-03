const customer_routes = [
    {
        path: "/customers",
        component: () => import("../pages/customers/Index"),
        name: "customers.index",
        meta: {
            auth: true,
        }
    },
    {
        path: "/customers/create",
        component: () => import("../pages/customers/Index"),
        name: "customers.create",
        meta: {
            auth: true,
        }
    },
    {
        path: "/customers/:id/edit",
        component: () => import("../pages/customers/Edit"),
        name: "customers.edit",
        meta: {
            auth: true,
        }
    },
    {
        path: "/customers/:id",
        component: () => import("../pages/customers/Show"),
        name: "customers.show",
        meta: {
            auth: true,
        }
    }
];

export default customer_routes;
