import store from "../store/index";

const permission_routes = [
    {
        path: "/permissions",
        component: () => import("../pages/permissions/Index"),
        name: "permissions.index",
        meta: {
            auth: true
        },
        beforeEnter: (to, from, next) => {
            let permissions = store.getters["auth/user"].permissions;
            if (permissions.includes("view all permissions")) {
                next();
            } else {
                next({ name: "error_403" });
            }
        }
    },
];

export default permission_routes;
