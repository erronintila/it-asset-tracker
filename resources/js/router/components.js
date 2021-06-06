const component_routes = [
    {
        path: "/components",
        component: () => import("../pages/components/Index"),
        name: "components.index",
        meta: {
            auth: true
        }
    },
    {
        path: "/components/create",
        component: () => import("../pages/components/Create"),
        name: "components.create",
        meta: {
            auth: true
        }
    }
];

export default component_routes;
