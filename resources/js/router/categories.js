const category_routes = [
    {
        path: "/categories",
        component: () => import("../pages/categories/Index"),
        name: "categories.index",
        meta: {
            auth: true
        }
    },
    {
        path: "/categories/create",
        component: () => import("../pages/categories/Create"),
        name: "categories.create",
        meta: {
            auth: true
        }
    }
];

export default category_routes;
