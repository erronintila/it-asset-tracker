const report_routes = [
    {
        path: "/reports",
        component: () => import("../pages/reports/Index"),
        name: "reports.index",
        meta: {
            auth: true
        }
    }
];

export default report_routes;
