import store from "../store/index";

const schedule_routes = [
    {
        path: "/schedules",
        component: () => import("../pages/schedules/Index"),
        name: "schedules.index",
        meta: {
            auth: true,
            keepAlive: true
        },
        beforeEnter: (to, from, next) => {
            store.dispatch("auth/AUTH_NOTIFICATIONS");
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view all schedules")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    }
];

export default schedule_routes;
