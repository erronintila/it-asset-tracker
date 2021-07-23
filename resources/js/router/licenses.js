const license_routes = [
    {
        path: "/licenses",
        component: () => import("../pages/licenses/Index"),
        name: "licenses.index",
        meta: {
            auth: true
        }
    },
    {
        path: "/licenses/create",
        component: () => import("../pages/licenses/Create"),
        name: "licenses.create",
        meta: {
            auth: true
        }
    },
    {
        path: "/licenses/:id/edit",
        component: () => import("../pages/licenses/Edit"),
        name: "licenses.edit",
        meta: {
            auth: true
        }
    },
    {
        path: "/licenses/:id",
        component: () => import("../pages/licenses/Show"),
        name: "licenses.show",
        meta: {
            auth: true
        }
    }
];

export default license_routes;
