require("./bootstrap");

window.Vue = require("vue").default;

import Vue from "vue";
import VueRouter from "vue-router";
import vuetify from "./plugins/vuetify";
import store from "./store/index";
import router from "./router/index";
import App from "./components/layouts/App";
import ApexCharts from "apexcharts";
import Mixin from "./mixins/index";

Vue.use(VueRouter);
Vue.use(Mixin);

Vue.component(
    "loading-screen",
    require("./components/partials/LoadingScreen.vue").default
);

Vue.component(
    "subpage-header",
    require("./components/layouts/SubPageHeader.vue").default
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
