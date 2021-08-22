const review_category_routes = [
    // {
    //     path: "/review_categories",
    //     component: () => import("../pages/review_categories/Index"),
    //     name: "review_categories.index",
    //     meta: {
    //         auth: true
    //     }
    // },
    {
        path: "/review_categories/create",
        component: () => import("../pages/review_categories/Create"),
        name: "review_categories.create",
        meta: {
            auth: true
        }
    },
    {
        path: "/review_categories/:id",
        component: () => import("../pages/review_categories/Show"),
        name: "review_categories.show",
        meta: {
            auth: true
        }
    },
    {
        path: "/review_categories/:id/edit",
        component: () => import("../pages/review_categories/Edit"),
        name: "review_categories.edit",
        meta: {
            auth: true
        }
    }
];

export default review_category_routes;
