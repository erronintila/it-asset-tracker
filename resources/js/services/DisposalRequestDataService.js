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

    deleteMany(data) {
        return axios.delete(`/api/v1/disposal_requests/multiple`, data);
    }

    restore(data) {
        return axios.put(`/api/v1/disposal_requests/restore`, data);
    }

    approve(data) {
        return axios.put(`/api/v1/disposal_requests/approve`, data);
    }

    complete(data) {
        return axios.put(`/api/v1/disposal_requests/complete`, data);
    }

    post(data) {
        return axios.put(`/api/v1/disposal_requests/post`, data);
    }

    cancel(data) {
        return axios.put(`/api/v1/disposal_requests/cancel`, data);
    }
}

export default new DisposalRequestDataService();
