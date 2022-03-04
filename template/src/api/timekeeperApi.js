import axiosClient from "./axiosClient";

const timekeeperApi = {
    getAll: (params) => {
        const url = "timekeeper/";
        return axiosClient.get(url, { params });
    },
    post: (data) => {
        const url = "timekeeper/";
        return axiosClient.post(url, data);
    },
    delete: (id) => {
        const url = `timekeeper/${id}/`;
        return axiosClient.delete(url);
    },
};

export default timekeeperApi;