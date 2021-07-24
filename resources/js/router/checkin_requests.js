const checkin_request_routes = [
    {
        path: "/checkin_requests",
        component: () => import("../pages/checkin_requests/Index"),
        name: "checkin_requests.index",
        meta: {
            auth: true
        }
    },
    {
        path: "/checkin_requests/create",
        component: () => import("../pages/checkin_requests/Create"),
        name: "checkin_requests.create",
        meta: {
            auth: true
        }
    },
    {
        path: "/checkin_requests/:id/edit",
        name: "checkin_requests.edit",
        component: () => import("../pages/checkin_requests/Edit"),
        meta: {
            auth: true
        }
    },
    {
        path: "/checkin_requests/:id",
        name: "checkin_requests.show",
        component: () => import("../pages/checkin_requests/Show"),
        meta: {
            auth: true
        }
    }
];

export default checkin_request_routes;
