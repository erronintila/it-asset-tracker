// import http from "../http-common";
import axios from "axios";

class ManufacturerDataService {
    getAll(data) {
        return axios.get("/api/v1/manufacturers", data);
    }

    show(id, data) {
        return axios.get(`/api/v1/manufacturers/${id}`, data);
    }

    store(data) {
        return axios.post("/api/v1/manufacturers", data);
    }

    update(id, data) {
        return axios.put(`/api/v1/manufacturers/${id}`, data);
    }

    delete(id, data) {
        return axios.delete(`/api/v1/manufacturers/${id}`, data);
    }

    deleteMany(data) {
        return axios.delete(`/api/v1/manufacturers/multiple`, data);
    }
}

export default new ManufacturerDataService();
