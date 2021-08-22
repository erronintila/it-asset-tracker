// import http from "../http-common";
import axios from "axios";

class LocationDataService {
    getAll(data) {
        return axios.get("/api/v1/review_categories", data);
    }

    show(id, data) {
        return axios.get(`/api/v1/review_categories/${id}`, data);
    }

    store(data) {
        return axios.post("/api/v1/review_categories", data);
    }

    update(id, data) {
        return axios.put(`/api/v1/review_categories/${id}`, data);
    }

    delete(id, data) {
        return axios.delete(`/api/v1/review_categories/${id}`, data);
    }

    deleteMany(data) {
        return axios.delete(`/api/v1/review_categories/multiple`, data);
    }
}

export default new LocationDataService();
