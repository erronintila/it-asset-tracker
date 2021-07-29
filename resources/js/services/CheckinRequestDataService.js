// import http from "../http-common";
import axios from "axios";

class CheckinRequestDataService {
    getAll(data) {
        return axios.get("/api/v1/checkin_requests", data);
    }

    show(id, data) {
        return axios.get(`/api/v1/checkin_requests/${id}`, data);
    }

    store(data) {
        return axios.post("/api/v1/checkin_requests", data);
    }

    update(id, data) {
        return axios.put(`/api/v1/checkin_requests/${id}`, data);
    }

    delete(id, data) {
        return axios.delete(`/api/v1/checkin_requests/${id}`, data);
    }

    deleteMany(data) {
        return axios.delete(`/api/v1/checkin_requests/multiple`, data);
    }

    approve(data) {
        return axios.put(`/api/v1/checkin_requests/approve`, data);
    }

    complete(data) {
        return axios.put(`/api/v1/checkin_requests/complete`, data);
    }

    post(data) {
        return axios.put(`/api/v1/checkin_requests/post`, data);
    }

    cancel(data) {
        return axios.put(`/api/v1/checkin_requests/cancel`, data);
    }
}

export default new CheckinRequestDataService();
