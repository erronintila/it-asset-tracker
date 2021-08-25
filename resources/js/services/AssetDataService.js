// import http from "../http-common";
import axios from "axios";

class AssetDataService {
    getAll(data) {
        return axios.get("/api/v1/assets", data);
    }

    show(id, data) {
        return axios.get(`/api/v1/assets/${id}`, data);
    }

    store(data) {
        return axios.post("/api/v1/assets", data);
    }

    update(id, data) {
        return axios.put(`/api/v1/assets/${id}`, data);
    }

    delete(id, data) {
        return axios.delete(`/api/v1/assets/${id}`, data);
    }

    restore(data) {
        return axios.put(`/api/v1/assets/restore`, data);
    }

    deleteMany(data) {
        return axios.delete(`/api/v1/assets/multiple`, data);
    }
}

export default new AssetDataService();
