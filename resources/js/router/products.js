const product_routes = [
    {
        path: "/products",
        component: () => import("../pages/products/Index"),
        name: "products.index",
        meta: {
            auth: true
        }
    },
    {
        path: "/products/create",
        component: () => import("../pages/products/Create"),
        name: "products.create",
        meta: {
            auth: true
        }
    }
];

export default product_routes;
