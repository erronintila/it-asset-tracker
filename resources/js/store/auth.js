import axios from "axios";

export default {
    namespaced: true,
    state: {
        authenticated: false,
        user: {},
        notifications: null || null
    },
    getters: {
        authenticated(state) {
            return state.authenticated;
        },
        user(state) {
            return state.user;
        },
        notifications(state) {
            return state.notifications;
        }
    },
    mutations: {
        SET_AUTHENTICATED(state, value) {
            state.authenticated = value;
        },
        SET_USER(state, value) {
            state.user = value;
        },
        SET_NOTIFICATIONS(state, value) {
            state.notifications = value;
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
                    console.log(error.response);
                    commit("SET_AUTHENTICATED", false);
                    commit("SET_USER", null);
                });
        },
        AUTH_NOTIFICATIONS(context) {
            return new Promise((resolve, reject) => {
                axios
                    .get(`/api/v1/notifications`, {
                        params: {
                            total_unread_only: true
                        }
                    })
                    .then(function(response) {
                        context.commit("SET_NOTIFICATIONS", response.data.data);
                        resolve(response.data.data);
                    })
                    .catch(function(error) {
                        console.log(error.response);
                        context.commit("SET_NOTIFICATIONS", null);
                        reject(error);
                    });
            });
        }
    }
};
