const schedule_routes = [
    {
        path: "/schedules",
        component: () => import("../pages/schedules/Index"),
        name: "schedules.index",
        meta: {
            auth: true
        }
    }
];

export default schedule_routes;
