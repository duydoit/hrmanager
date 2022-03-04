import axiosClient from "./axiosClient";

const wagerateApi = {
    getAll: (params) => {
        const url = "wagerate/";
        return axiosClient.get(url, { params });
    },
};

export default wagerateApi;