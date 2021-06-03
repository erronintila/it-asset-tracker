const user_routes = [
    {
        path: "/users",
        component: () => import("../pages/users/Index"),
        name: "users.index",
        meta: {
            auth: true,
        }
    },
    {
        path: "/users/create",
        component: () => import("../pages/users/Create"),
        name: "users.create",
        meta: {
            auth: true,
        }
    },
    {
        path: "/users/:id/edit",
        component: () => import("../pages/users/Edit"),
        name: "users.edit",
        meta: {
            auth: true,
        }
    },
    {
        path: "/users/:id",
        component: () => import("../pages/users/Show"),
        name: "users.show",
        meta: {
            auth: true,
        }
    }
];

export default user_routes;
