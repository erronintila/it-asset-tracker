// import http from "../http-common";
import axios from "axios";

class AgreementDataService {
    getAll(data) {
        return axios.get("/api/v1/agreements", data);
    }

    show(id, data) {
        return axios.get(`/api/v1/agreements/${id}`, data);
    }

    store(data) {
        return axios.post("/api/v1/agreements", data);
    }

    update(id, data) {
        return axios.put(`/api/v1/agreements/${id}`, data);
    }

    delete(id, data) {
        return axios.delete(`/api/v1/agreements/${id}`, data);
    }

    deleteMany(data) {
        return axios.delete(`/api/v1/agreements/multiple`, data);
    }

    restore(data) {
        return axios.put(`/api/v1/agreements/restore`, data);
    }
}

export default new AgreementDataService();
