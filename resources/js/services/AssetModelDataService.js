// import http from "../http-common";
import axios from "axios";

class AssetModelDataService {
    getAll(data) {
        return axios.get("/api/v1/asset_models", data);
    }

    show(id, data) {
        return axios.get(`/api/v1/asset_models/${id}`, data);
    }

    store(data) {
        return axios.post("/api/v1/asset_models", data);
    }

    update(id, data) {
        return axios.put(`/api/v1/asset_models/${id}`, data);
    }

    delete(id, data) {
        return axios.delete(`/api/v1/asset_models/${id}`, data);
    }

    deleteMany(data) {
        return axios.delete(`/api/v1/asset_models/multiple`, data);
    }

    restore(data) {
        return axios.put(`/api/v1/asset_models/restore`, data);
    }

    activate(data) {
        return axios.put(`/api/v1/asset_models/activate`, data);
    }
}

export default new AssetModelDataService();
