// import http from "../http-common";
import axios from "axios";

class DepartmentDataService {
    getAll(data) {
        return axios.get("/api/v1/departments", data);
    }

    show(id, data) {
        return axios.get(`/api/v1/departments/${id}`, data);
    }

    store(data) {
        return axios.post("/api/v1/departments", data);
    }

    update(id, data) {
        return axios.put(`/api/v1/departments/${id}`, data);
    }

    delete(id, data) {
        return axios.delete(`/api/v1/departments/${id}`, data);
    }

    deleteMany(data) {
        return axios.delete(`/api/v1/departments/multiple`, data);
    }

    activate(data) {
        return axios.put(`/api/v1/departments/activate`, data);
    }
}

export default new DepartmentDataService();
