// import http from "../http-common";
import axios from "axios";

class EmployeeDataService {
    getAll(data) {
        return axios.get("/api/v1/employees", data);
    }

    show(id, data) {
        return axios.get(`/api/v1/employees/${id}`, data);
    }

    store(data) {
        return axios.post("/api/v1/employees", data);
    }

    update(id, data) {
        return axios.put(`/api/v1/employees/${id}`, data);
    }

    delete(id, data) {
        return axios.delete(`/api/v1/employees/${id}`, data);
    }

    deleteMany(data) {
        return axios.delete(`/api/v1/employees/multiple`, data);
    }

    restore(data) {
        return axios.put(`/api/v1/employees/restore`, data);
    }

    activate(data) {
        return axios.put(`/api/v1/employees/activate`, data);
    }
}

export default new EmployeeDataService();
