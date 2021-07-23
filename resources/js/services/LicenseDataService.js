// import http from "../http-common";
import axios from "axios";

class LicenseDataService {
    getAll(data) {
        return axios.get("/api/v1/licenses", data);
    }

    show(id, data) {
        return axios.get(`/api/v1/licenses/${id}`, data);
    }

    store(data) {
        return axios.post("/api/v1/licenses", data);
    }

    update(id, data) {
        return axios.put(`/api/v1/licenses/${id}`, data);
    }

    delete(id, data) {
        return axios.delete(`/api/v1/licenses/${id}`, data);
    }

    deleteMany(data) {
        return axios.delete(`/api/v1/licenses/multiple`, data);
    }
}

export default new LicenseDataService();
