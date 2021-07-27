// import http from "../http-common";
import axios from "axios";

class DashboardDataService {
    getAll(data) {
        return axios.get("/api/v1/dashboard", data);
    }
}

export default new DashboardDataService();
