require("./bootstrap");

window.Vue = require("vue").default;

import Vue from "vue";
import store from "./store/index";
import VueRouter from "vue-router";
import vuetify from "./plugins/vuetify";
import router from "./router/index";
import App from "./components/layouts/App";
import ApexCharts from "apexcharts";
import Mixin from "./mixins/index";
import VueMoment from "vue-moment";

Vue.use(VueRouter);
Vue.use(Mixin);
Vue.use(VueMoment);

Vue.component(
    "loading-screen",
    require("./components/partials/LoadingScreen.vue").default
);

Vue.component(
    "page-header",
    require("./components/layouts/PageHeader.vue").default
);

axios.interceptors.response.use(
    function(response) {
        return response;
    },
    function(error) {
        switch (error.response.status) {
            case 401:
                store.dispatch("AUTH_LOGOUT");
                window.location.replace("/login");
                break;
            case 404:
                router.push({ name: "error_404" });
                break;
            case 403:
                router.push({ name: "error_403" });
                break;
            case 500:
                router.push({ name: "error_500" });
                break;
            case 503:
                router.push({ name: "error_503" });
                break;
            default:
                break;
        }
        return Promise.reject(error);
    }
);

store.dispatch("auth/AUTH_USER").then(() => {
    new Vue({
        el: "#app",
        store,
        router,
        vuetify,
        components: { App }
    });
});
