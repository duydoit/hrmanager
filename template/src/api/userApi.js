import axiosClient from "./axiosClient"
const userApi = {
    register: (data) => {
        const url = 'v1/register/';
        return axiosClient.post(url, data)
    },

    login: (data) => {
        const url = 'v1/token/';
        return axiosClient.post(url, data);
    },
    getAll: () => {
        const url = "v1/users/";
        return axiosClient.get(url);
    },
    get: (id) => {
        const url = `v1/users/${id}/`;
        return axiosClient.get(url);
    },
    put: (id, data) => {
        const url = `v1/users/${id}/`;
        return axiosClient.put(url, data);
    },
    delete: (id) => {
        const url = `v1/users/${id}/`;
        return axiosClient.delete(url);
    },
}
export default userApi