import store from "../store/index";

const accessory_routes = [
    {
        path: "/accessories",
        component: () => import("../pages/accessories/Index"),
        name: "accessories.index",
        meta: {
            auth: true
        }
    },
    {
        path: "/accessories/create",
        component: () => import("../pages/accessories/Create"),
        name: "accessories.create",
        meta: {
            auth: true
        }
    }
];

export default accessory_routes;
