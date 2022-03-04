import {
    SET_ACCOUNT,
    ADD_ACCOUNT,
    DETAIL_ACCOUNT,
    DELETE_ACCOUNT,
    EDIT_ACCOUNT,
} from './types'
import userApi from '../../api/userApi';
import { getAlerts } from '../actions/alertAct'

export const setAccount = (items) => ({
    type: SET_ACCOUNT,
    payload: items,
});
// fetch all 
export const fetchAccounts = () => (dispatch) => {
    userApi.getAll()
        .then(res => dispatch(setAccount(res)))
        .catch(err => dispatch(getAlerts({ msg: `disconnect fetch : ${err.message} `, type: 'error' })))
};

export const addAccount = (data) => (dispatch) => {
    userApi.register(data)
        .then(res => {
            dispatch(getAlerts({ msg: `Đã tạo tài khoản có username: ${res.username}`, title: 'Success' }));
            dispatch({
                type: ADD_ACCOUNT,
                payload: res
            });
        })
        .catch(err => {
            dispatch(getAlerts({ msg: err.response.statusText, title: 'Error' }))
        });
}

//detail account
export const detailAccount = (id) => (dispatch) => {
    userApi.get(id)
        .then(res => {
            dispatch({
                type: DETAIL_ACCOUNT,
                payload: res
            });
        })
        .catch(err => {
            dispatch(getAlerts({ msg: err.response.statusText, title: 'Error' }))
        });
}
export const deleteAccount = (id) => (dispatch) => {
    userApi.delete(id)
        .then((res) => {
            dispatch(getAlerts({ msg: `Tài khoản đã bị xoá !`, title: 'Success' }))
            dispatch({ type: DELETE_ACCOUNT, payload: id, })
        })
        .catch(err => dispatch(getAlerts({ msg: err.response.statusText, type: 'error' })));
}

export const editAccount = (id, data) => (dispatch) => {
    userApi.put(id, data)
        .then(res => {
            dispatch(getAlerts({ msg: `Tài khoản cập nhật thành công !`, title: 'Success' }));
            dispatch({
                type: EDIT_ACCOUNT,
                payload: res
            })
        })
        .catch(err => {
            dispatch(getAlerts({ msg: err.response.statusText, title: 'Error' }))
        })
}