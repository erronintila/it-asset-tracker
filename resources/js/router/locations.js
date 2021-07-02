const location_routes = [
    {
        path: "/locations",
        component: () => import("../pages/locations/Index"),
        name: "locations.index",
        meta: {
            auth: true
        }
    },
    {
        path: "/locations/create",
        component: () => import("../pages/locations/Create"),
        name: "locations.create",
        meta: {
            auth: true
        }
    },
    {
        path: "/locations/:id",
        component: () => import("../pages/locations/Show"),
        name: "locations.show",
        meta: {
            auth: true
        }
    }
];

export default location_routes;
