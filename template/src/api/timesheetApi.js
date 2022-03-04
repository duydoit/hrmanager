import axiosClient from "./axiosClient";

const timesheetApi = {
    getAll: (params) => {
        const url = "correctaccess/";
        return axiosClient.get(url, { params });
    },
    delete: (id) => {
        const url = `correctaccess/${id}/`;
        return axiosClient.delete(url);
    },
};

export default timesheetApi;