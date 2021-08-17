// import http from "../http-common";
import axios from "axios";

class GeneralSettingDataService {
    getAll(data) {
        return axios.get("/api/v1/settings/general", data);
    }

    update(data) {
        return axios.put("/api/v1/settings/general/update", data);
    }
}

export default new GeneralSettingDataService();
