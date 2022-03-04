import axiosClient from "./axiosClient";

const approvalApi = {
    getAll: (params) => {
        const url = "approval/";
        return axiosClient.get(url, { params });
    },
    post: (data) => {
        const url = "approval/";
        return axiosClient.post(url, data);
    },
    get: (id) => {
        const url = `approval/${id}/`;
        return axiosClient.get(url);
    },
    put: (id, data) => {
        const url = `approval/${id}/`;
        return axiosClient.put(url, data);
    },
    delete: (id) => {
        const url = `approval/${id}/`;
        return axiosClient.delete(url);
    },
};

export default approvalApi;