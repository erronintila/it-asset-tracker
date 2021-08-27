const notification_routes = [
    {
        path: "/notifications",
        component: () => import("../pages/notifications/Index"),
        name: "notifications.index",
        meta: {
            auth: true,
            keepAlive: true
        }
    }
];

export default notification_routes;
