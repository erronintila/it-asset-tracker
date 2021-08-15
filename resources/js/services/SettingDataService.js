// import http from "../http-common";
import axios from "axios";

class SettingDataService {
    getAll(data) {
        return axios.get("/api/v1/settings", data);
    }

    show(id, data) {
        return axios.get(`/api/v1/settings/${id}`, data);
    }

    update(id, data) {
        return axios.put(`/api/v1/settings/${id}`, data);
    }

    updatePassword(id, data) {
        return axios.put(`/api/v1/settings/update_password/${id}`, data);
    }
}

export default new SettingDataService();
