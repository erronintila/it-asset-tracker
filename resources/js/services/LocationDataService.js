// import http from "../http-common";
import axios from "axios";

class LocationDataService {
    getAll(data = null) {
        return axios.get("/api/v1/locations", data);
    }

    show(id, data = null) {
        return axios.get(`/api/v1/locations/${id}`, data);
    }

    store(data) {
        return axios.post("/api/v1/locations", data);
    }

    update(id, data) {
        return axios.put(`/api/v1/locations/${id}`, data);
    }

    delete(id, data = null) {
        return axios.delete(`/api/v1/locations/${id}`, data);
    }
}

export default new LocationDataService();
