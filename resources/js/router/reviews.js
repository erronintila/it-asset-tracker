const review_routes = [
    {
        path: "/reviews",
        component: () => import("../pages/reviews/Index"),
        name: "reviews.index",
        meta: {
            auth: true
        }
    },
    {
        path: "/reviews/create",
        component: () => import("../pages/reviews/Create"),
        name: "reviews.create",
        meta: {
            auth: true
        }
    },
    {
        path: "/reviews/:id",
        component: () => import("../pages/reviews/Show"),
        name: "reviews.show",
        meta: {
            auth: true
        }
    }
];

export default review_routes;
