// import http from "../http-common";
import axios from "axios";

class FeatureDataService {
    getAll(data) {
        return axios.get("/api/v1/features", data);
    }

    show(id, data) {
        return axios.get(`/api/v1/features/${id}`, data);
    }

    store(data) {
        return axios.post("/api/v1/features", data);
    }

    update(id, data) {
        return axios.put(`/api/v1/features/${id}`, data);
    }

    delete(id, data = null) {
        return axios.delete(`/api/v1/features/${id}`, data);
    }

    deleteMany(data) {
        return axios.delete(`/api/v1/features/multiple`, data);
    }

    restore(data) {
        return axios.put(`/api/v1/features/restore`, data);
    }
}

export default new FeatureDataService();
