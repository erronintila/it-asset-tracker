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

    deleteMany(data) {
        return axios.delete(`/api/v1/customers/multiple`, data);
    }

    restore(data) {
        return axios.put(`/api/v1/customers/restore`, data);
    }

    activate(data) {
        return axios.put(`/api/v1/customers/activate`, data);
    }
}

export default new CustomerDataService();
