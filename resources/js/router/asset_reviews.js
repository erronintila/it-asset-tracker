const asset_review_routes = [
    {
        path: "/asset_reviews",
        component: () => import("../pages/asset_reviews/Index"),
        name: "asset_reviews.index",
        meta: {
            auth: true
        }
    },
    {
        path: "/asset_reviews/create",
        component: () => import("../pages/asset_reviews/Create"),
        name: "asset_reviews.create",
        meta: {
            auth: true
        }
    },
    {
        path: "/asset_reviews/:id",
        component: () => import("../pages/asset_reviews/Show"),
        name: "asset_reviews.show",
        meta: {
            auth: true
        }
    }
];

export default asset_review_routes;
