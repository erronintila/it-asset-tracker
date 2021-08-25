// import http from "../http-common";
import axios from "axios";

class SupplierDataService {
    getAll(data) {
        return axios.get("/api/v1/suppliers", data);
    }

    show(id, data) {
        return axios.get(`/api/v1/suppliers/${id}`, data);
    }

    store(data) {
        return axios.post("/api/v1/suppliers", data);
    }

    update(id, data) {
        return axios.put(`/api/v1/suppliers/${id}`, data);
    }

    delete(id, data = null) {
        return axios.delete(`/api/v1/suppliers/${id}`, data);
    }

    deleteMany(data) {
        return axios.delete(`/api/v1/suppliers/multiple`, data);
    }

    restore(data) {
        return axios.put(`/api/v1/suppliers/restore`, data);
    }

    activate(data) {
        return axios.put(`/api/v1/suppliers/activate`, data);
    }
}

export default new SupplierDataService();
