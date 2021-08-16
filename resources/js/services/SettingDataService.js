// import http from "../http-common";
import axios from "axios";

class SettingDataService {
    getAll(data) {
        return axios.get("/api/v1/settings", data);
    }

    update(data) {
        return axios.put("/api/v1/settings/update", data);
    }
}

export default new SettingDataService();
