const notification_routes = [
    {
        path: "/notifications",
        component: () => import("../pages/notifications/Index"),
        name: "notifications.index",
        meta: {
            auth: true
        }
    }
];

export default notification_routes;
