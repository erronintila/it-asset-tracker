const employee_routes = [
    {
        path: "/employees",
        component: () => import("../pages/employees/Index"),
        name: "employees.index",
        meta: {
            auth: true,
        }
    },
    {
        path: "/employees/create",
        component: () => import("../pages/employees/Create"),
        name: "employees.create",
        meta: {
            auth: true,
        }
    },
    {
        path: "/employees/:id/edit",
        component: () => import("../pages/employees/Edit"),
        name: "employees.edit",
        meta: {
            auth: true,
        }
    },
    {
        path: "/employees/:id",
        component: () => import("../pages/employees/Show"),
        name: "employees.show",
        meta: {
            auth: true,
        }
    }
];

export default employee_routes;
