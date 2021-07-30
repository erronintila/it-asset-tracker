const disposal_request_routes = [
    {
        path: "/disposal_requests",
        component: () => import("../pages/disposal_requests/Index"),
        name: "disposal_requests.index",
        meta: {
            auth: true
        }
    },
    {
        path: "/disposal_requests/create",
        component: () => import("../pages/disposal_requests/Create"),
        name: "disposal_requests.create",
        meta: {
            auth: true
        }
    },
    {
        path: "/disposal_requests/:id/edit",
        name: "disposal_requests.edit",
        component: () => import("../pages/disposal_requests/Edit"),
        meta: {
            auth: true
        }
    },
    {
        path: "/disposal_requests/:id",
        name: "disposal_requests.show",
        component: () => import("../pages/disposal_requests/Show"),
        meta: {
            auth: true
        }
    }
];

export default disposal_request_routes;
