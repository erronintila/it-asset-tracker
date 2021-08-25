// import http from "../http-common";
import axios from "axios";

class LocationDataService {
    getAll(data) {
        return axios.get("/api/v1/locations", data);
    }

    show(id, data) {
        return axios.get(`/api/v1/locations/${id}`, data);
    }

    store(data) {
        return axios.post("/api/v1/locations", data);
    }

    update(id, data) {
        return axios.put(`/api/v1/locations/${id}`, data);
    }

    delete(id, data) {
        return axios.delete(`/api/v1/locations/${id}`, data);
    }

    deleteMany(data) {
        return axios.delete(`/api/v1/locations/multiple`, data);
    }

    restore(data) {
        return axios.put(`/api/v1/locations/restore`, data);
    }

    activate(data) {
        return axios.put(`/api/v1/locations/activate`, data);
    }
}

export default new LocationDataService();
