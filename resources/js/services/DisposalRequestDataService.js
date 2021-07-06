// import http from "../http-common";
import axios from "axios";

class DisposalRequestDataService {
    getAll(data) {
        return axios.get("/api/v1/disposal_requests", data);
    }

    show(id, data) {
        return axios.get(`/api/v1/disposal_requests/${id}`, data);
    }

    store(data) {
        return axios.post("/api/v1/disposal_requests", data);
    }

    update(id, data) {
        return axios.put(`/api/v1/disposal_requests/${id}`, data);
    }

    delete(id, data) {
        return axios.delete(`/api/v1/disposal_requests/${id}`, data);
    }
}

export default new DisposalRequestDataService();
