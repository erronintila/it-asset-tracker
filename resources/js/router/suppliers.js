const supplier_routes = [
    {
        path: "/suppliers",
        component: () => import("../pages/suppliers/Index"),
        name: "suppliers.index",
        meta: {
            auth: true
        }
    },
    {
        path: "/suppliers/create",
        component: () => import("../pages/suppliers/Create"),
        name: "suppliers.create",
        meta: {
            auth: true
        }
    },
    {
        path: "/suppliers/:id",
        component: () => import("../pages/suppliers/Show"),
        name: "suppliers.show",
        meta: {
            auth: true
        }
    },
    {
        path: "/suppliers/:id/edit",
        component: () => import("../pages/suppliers/Edit"),
        name: "suppliers.edit",
        meta: {
            auth: true
        }
    }
];

export default supplier_routes;
