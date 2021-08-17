// import http from "../http-common";
import axios from "axios";

class PermissionDataService {
    getAll(data) {
        return axios.get("/api/v1/permissions", data);
    }

    show(id, data) {
        return axios.get(`/api/v1/permissions/${id}`, data);
    }

    update(id, data) {
        return axios.put(`/api/v1/permissions/${id}`, data);
    }
}

export default new PermissionDataService();
