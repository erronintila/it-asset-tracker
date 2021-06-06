const consumable_routes = [
    {
        path: "/consumables",
        component: () => import("../pages/consumables/Index"),
        name: "consumables.index",
        meta: {
            auth: true
        }
    },
    {
        path: "/consumables/create",
        component: () => import("../pages/consumables/Create"),
        name: "consumables.create",
        meta: {
            auth: true
        }
    }
];

export default consumable_routes;
