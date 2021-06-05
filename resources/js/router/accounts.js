const account_routes = [
    {
        path: "/accounts",
        component: () => import("../pages/accounts/Index"),
        name: "accounts.index",
        meta: {
            auth: true,
        }
    },
    {
        path: "/accounts/create",
        component: () => import("../pages/accounts/Create"),
        name: "accounts.create",
        meta: {
            auth: true,
        }
    },
    {
        path: "/accounts/:id/edit",
        component: () => import("../pages/accounts/Edit"),
        name: "accounts.edit",
        meta: {
            auth: true,
        }
    },
    {
        path: "/accounts/:id",
        component: () => import("../pages/accounts/Show"),
        name: "accounts.show",
        meta: {
            auth: true,
        }
    }
];

export default account_routes;
