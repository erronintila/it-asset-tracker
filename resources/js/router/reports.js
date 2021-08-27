import store from "../store/index";

const report_routes = [
    {
        path: "/reports/activity_logs",
        component: () => import("../pages/reports/activity_logs/Index"),
        name: "reports.activity_logs.index",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view all activity logs")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
    {
        path: "/reports/asset_maintenance",
        component: () => import("../pages/reports/asset_maintenance/Index"),
        name: "reports.asset_maintenance.index",
        meta: {
            auth: true
        }
    }
];

export default report_routes;
