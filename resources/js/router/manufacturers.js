const manufacturer_routes = [
    {
        path: "/manufacturers",
        component: () => import("../pages/manufacturers/Index"),
        name: "manufacturers.index",
        meta: {
            auth: true
        }
    },
    {
        path: "/manufacturers/create",
        component: () => import("../pages/manufacturers/Create"),
        name: "manufacturers.create",
        meta: {
            auth: true
        }
    },
    {
        path: "/manufacturers/:id",
        component: () => import("../pages/manufacturers/Show"),
        name: "manufacturers.show",
        meta: {
            auth: true
        }
    },
    {
        path: "/manufacturers/:id/edit",
        component: () => import("../pages/manufacturers/Edit"),
        name: "manufacturers.edit",
        meta: {
            auth: true
        }
    }
];

export default manufacturer_routes;
