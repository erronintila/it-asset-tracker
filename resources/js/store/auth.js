import axios from "axios";
import router from "../router";

export default {
    namespaced: true,
    state: {
        authenticated: false,
        user: {}
    },
    getters: {
        authenticated(state) {
            return state.authenticated;
        },
        user(state) {
            return state.user;
        }
    },
    mutations: {
        SET_AUTHENTICATED(state, value) {
            state.authenticated = value;
        },
        SET_USER(state, value) {
            state.user = value;
        }
    },
    actions: {
        async AUTH_LOGIN({ dispatch }, payload) {
            await axios.get("/sanctum/csrf-cookie");
            await axios.post("/login", payload);

            return dispatch("AUTH_USER");
        },

        async AUTH_REGISTER({ dispatch }, payload) {
            await axios.get("/sanctum/csrf-cookie");
            await axios.post("/register", payload);

            return dispatch("AUTH_USER");
        },

        async AUTH_LOGOUT({ dispatch }) {
            await axios.post("/logout");

            return dispatch("AUTH_USER");
        },

        AUTH_USER({ commit }) {
            return axios
                .get("/api/v1/user")
                .then(response => {
                    let isValid = response.data.data ? true : false;
                    commit("SET_AUTHENTICATED", isValid);
                    commit(
                        "SET_USER",
                        isValid ? response.data.data || null : null
                    );
                })
                .catch(error => {
                    console.log(error);
                    commit("SET_AUTHENTICATED", false);
                    commit("SET_USER", null);
                });
        }
    }
};
