import Vue from "vue";
import VueRouter from "vue-router";
import auth_routes from "./auth";
import pages_routes from "./pages";
import employee_routes from "./employees";
import permission_routes from "./permissions";
import work_order_type_routes from "./work_order_types";
import work_order_routes from "./work_orders";
import schedule_routes from "./schedules";
import report_routes from "./reports";
import setting_routes from "./settings";
import asset_routes from "./assets";
import notification_routes from "./notifications";
import accessory_routes from "./accessories";
import asset_model_routes from "./asset_models";
import asset_category_routes from "./asset_categories";
import component_routes from "./components";
import consumable_routes from "./consumables";
import customer_routes from "./customers";
import department_routes from "./departments";
import license_routes from "./licenses";
import location_routes from "./locations";
import manufacturer_routes from "./manufacturers";
import supplier_routes from "./suppliers";
import agreement_routes from "./agreements";
import asset_review_routes from "./asset_reviews";
import checkin_request_routes from "./checkin_requests";
import checkout_request_routes from "./checkout_requests";
import disposal_request_routes from "./disposal_requests";
import request_type_routes from "./request_types";
import review_category_routes from "./review_categories";
import feature_routes from "./features";

import store from "../store/index";

const baseRoutes = [];
const routes = baseRoutes.concat(
    auth_routes,
    pages_routes,
    employee_routes,
    permission_routes,
    work_order_type_routes,
    work_order_routes,
    schedule_routes,
    report_routes,
    setting_routes,
    asset_routes,
    notification_routes,
    accessory_routes,
    asset_model_routes,
    asset_category_routes,
    component_routes,
    consumable_routes,
    customer_routes,
    department_routes,
    license_routes,
    location_routes,
    manufacturer_routes,
    supplier_routes,
    agreement_routes,
    asset_review_routes,
    checkin_request_routes,
    checkout_request_routes,
    disposal_request_routes,
    request_type_routes,
    review_category_routes,
    feature_routes
);

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.auth)) {
        if (!store.getters["auth/authenticated"]) {
            next({ name: "login" });
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.guest)) {
        if (!store.getters["auth/authenticated"]) {
            next();
        } else {
            next({ name: "home" });
        }
    } else {
        next();
    }
});
