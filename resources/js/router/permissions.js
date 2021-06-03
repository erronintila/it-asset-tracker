const permission_routes = [
    {
        path: "/permissions",
        component: () => import("../pages/permissions/Index"),
        name: "permissions.index",
        meta: {
            auth: true
        }
    }
];

export default permission_routes;
