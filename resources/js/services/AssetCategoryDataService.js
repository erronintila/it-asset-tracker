// import http from "../http-common";
import axios from "axios";

class AssetCategoryDataService {
    getAll(data) {
        return axios.get("/api/v1/asset_categories", data);
    }

    show(id, data) {
        return axios.get(`/api/v1/asset_categories/${id}`, data);
    }

    store(data) {
        return axios.post("/api/v1/asset_categories", data);
    }

    update(id, data) {
        return axios.put(`/api/v1/asset_categories/${id}`, data);
    }

    delete(id, data) {
        return axios.delete(`/api/v1/asset_categories/${id}`, data);
    }
}

export default new AssetCategoryDataService();
