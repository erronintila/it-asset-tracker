// import http from "../http-common";
import axios from "axios";

class NotificationDataService {
    getAll(data) {
        return axios.get("/api/v1/notifications", data);
    }

    show(id, data) {
        return axios.get(`/api/v1/notifications/${id}`, data);
    }

    mark_read(data) {
        return axios.put(`/api/v1/notifications/mark_read`, data);
    }

    mark_unread(data) {
        return axios.put(`/api/v1/notifications/mark_unread`, data);
    }
}

export default new NotificationDataService();
