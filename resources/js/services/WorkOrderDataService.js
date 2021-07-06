// import http from "../http-common";
import axios from "axios";

class WorkOrderDataService {
    getAll(data) {
        return axios.get("/api/v1/work_orders", data);
    }

    show(id, data) {
        return axios.get(`/api/v1/work_orders/${id}`, data);
    }

    store(data) {
        return axios.post("/api/v1/work_orders", data);
    }

    update(id, data) {
        return axios.put(`/api/v1/work_orders/${id}`, data);
    }

    delete(id, data) {
        return axios.delete(`/api/v1/work_orders/${id}`, data);
    }
}

export default new WorkOrderDataService();
