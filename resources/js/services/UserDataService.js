// import http from "../http-common";
import axios from "axios";

class UserDataService {
    getAll(data) {
        return axios.get("/api/v1/users", data);
    }

    show(id, data) {
        return axios.get(`/api/v1/users/${id}`, data);
    }

    store(data) {
        return axios.post("/api/v1/users", data);
    }

    update(id, data) {
        return axios.put(`/api/v1/users/${id}`, data);
    }

    delete(id, data) {
        return axios.delete(`/api/v1/users/${id}`, data);
    }

    updatePassword(id, data) {
        return axios.put(`/api/v1/users/update_password/${id}`, data);
    }
}

export default new UserDataService();
