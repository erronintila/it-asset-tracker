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

    deleteMany(data) {
        return axios.delete(`/api/v1/work_orders/multiple`, data);
    }

    approve(data) {
        return axios.put(`/api/v1/work_orders/approve`, data);
    }

    complete(data) {
        return axios.put(`/api/v1/work_orders/complete`, data);
    }

    post(data) {
        return axios.put(`/api/v1/work_orders/post`, data);
    }

    cancel(data) {
        return axios.put(`/api/v1/work_orders/cancel`, data);
    }
}

export default new WorkOrderDataService();
