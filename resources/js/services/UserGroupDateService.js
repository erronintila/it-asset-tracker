// import http from "../http-common";
import axios from "axios";

class UserGroupDataService {
    getAll(data) {
        return axios.get("/api/v1/user_groups", data);
    }

    show(id, data) {
        return axios.get(`/api/v1/user_groups/${id}`, data);
    }

    store(data) {
        return axios.post("/api/v1/user_groups", data);
    }

    update(id, data) {
        return axios.put(`/api/v1/user_groups/${id}`, data);
    }

    delete(id, data) {
        return axios.delete(`/api/v1/user_groups/${id}`, data);
    }

    restore(data) {
        return axios.put(`/api/v1/user_groups/restore`, data);
    }
}

export default new UserGroupDataService();
