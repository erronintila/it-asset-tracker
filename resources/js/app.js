require("./bootstrap");

window.Vue = require("vue").default;

import Vue from "vue";
import VueRouter from "vue-router";
import vuetify from "./plugins/vuetify";
import store from "./store/index";
import router from "./router/index";
import App from "./components/layouts/App";

Vue.use(VueRouter);

store.dispatch("auth/AUTH_USER").then(() => {
    new Vue({
        el: "#app",
        store,
        router,
        vuetify,
        components: { App }
    });
});
