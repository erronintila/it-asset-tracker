const auth_routes = [
    {
        path: "/login",
        component: () => import("../pages/auth/Login"),
        name: "login",
        meta: {
            guest: true,
        }
    },
    {
        path: "/register",
        component: () => import("../pages/auth/Register"),
        name: "register",
        meta: {
            guest: true,
        }
    }
];

export default auth_routes;
