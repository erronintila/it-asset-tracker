const agreement_routes = [
    {
        path: "/agreements",
        component: () => import("../pages/agreements/Index"),
        name: "agreements.index",
        meta: {
            auth: true
        }
    },
    {
        path: "/agreements/create",
        component: () => import("../pages/agreements/Create"),
        name: "agreements.create",
        meta: {
            auth: true
        }
    }
];

export default agreement_routes;
