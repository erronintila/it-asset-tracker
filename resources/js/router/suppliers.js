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
    }
];

export default supplier_routes;
