// import http from "../http-common";
import axios from "axios";

class CustomerDataService {
    getAll(data) {
        return axios.get("/api/v1/customers", data);
    }

    show(id, data) {
        return axios.get(`/api/v1/customers/${id}`, data);
    }

    store(data) {
        return axios.post("/api/v1/customers", data);
    }

    update(id, data) {
        return axios.put(`/api/v1/customers/${id}`, data);
    }

    delete(id, data) {
        return axios.delete(`/api/v1/customers/${id}`, data);
    }
}

export default new CustomerDataService();
