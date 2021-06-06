const department_routes = [
    {
        path: "/departments",
        component: () => import("../pages/departments/Index"),
        name: "departments.index",
        meta: {
            auth: true
        }
    },
    {
        path: "/departments/create",
        component: () => import("../pages/departments/Create"),
        name: "departments.create",
        meta: {
            auth: true
        }
    }
];

export default department_routes;
