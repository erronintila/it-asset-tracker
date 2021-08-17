// import http from "../http-common";
import axios from "axios";

class PrintSettingDataService {
    getAll(data) {
        return axios.get("/api/v1/settings/print", data);
    }

    update(data) {
        return axios.put("/api/v1/settings/print/update", data);
    }
}

export default new PrintSettingDataService();
