const checkout_request_routes = [
    {
        path: "/checkout_requests",
        component: () => import("../pages/checkout_requests/Index"),
        name: "checkout_requests.index",
        meta: {
            auth: true
        }
    },
    {
        path: "/checkout_requests/create",
        component: () => import("../pages/checkout_requests/Create"),
        name: "checkout_requests.create",
        meta: {
            auth: true
        }
    },
    {
        path: "/checkout_requests/:id",
        name: "checkout_requests.show",
        component: () => import("../pages/checkout_requests/Show"),
        meta: {
            auth: true
        }
    }
];

export default checkout_request_routes;
