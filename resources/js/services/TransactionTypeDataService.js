// import http from "../http-common";
import axios from "axios";

class TransactionTypeDataService {
    getAll(data) {
        return axios.get("/api/v1/transaction_types", data);
    }

    show(id, data) {
        return axios.get(`/api/v1/transaction_types/${id}`, data);
    }

    store(data) {
        return axios.post("/api/v1/transaction_types", data);
    }

    update(id, data) {
        return axios.put(`/api/v1/transaction_types/${id}`, data);
    }

    delete(id, data) {
        return axios.delete(`/api/v1/transaction_types/${id}`, data);
    }

    deleteMany(data) {
        return axios.delete(`/api/v1/transaction_types/multiple`, data);
    }
}

export default new TransactionTypeDataService();
