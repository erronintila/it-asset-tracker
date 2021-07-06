// import http from "../http-common";
import axios from "axios";

class TransactionDataService {
    getAll(data) {
        return axios.get("/api/v1/transactions", data);
    }

    show(id, data) {
        return axios.get(`/api/v1/transactions/${id}`, data);
    }

    store(data) {
        return axios.post("/api/v1/transactions", data);
    }

    update(id, data) {
        return axios.put(`/api/v1/transactions/${id}`, data);
    }

    delete(id, data) {
        return axios.delete(`/api/v1/transactions/${id}`, data);
    }
}

export default new TransactionDataService();
