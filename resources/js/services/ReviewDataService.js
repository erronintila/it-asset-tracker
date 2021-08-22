// import http from "../http-common";
import axios from "axios";

class ReviewDataService {
    getAll(data) {
        return axios.get("/api/v1/reviews", data);
    }

    show(id, data) {
        return axios.get(`/api/v1/reviews/${id}`, data);
    }

    store(data) {
        return axios.post("/api/v1/reviews", data);
    }

    update(id, data) {
        return axios.put(`/api/v1/reviews/${id}`, data);
    }

    delete(id, data = null) {
        return axios.delete(`/api/v1/reviews/${id}`, data);
    }

    deleteMany(data) {
        return axios.delete(`/api/v1/reviews/multiple`, data);
    }
}

export default new ReviewDataService();
