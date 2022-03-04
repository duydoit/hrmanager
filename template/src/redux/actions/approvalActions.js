import {
    SET_APPROVED,
    ADD_APPROVED,
    PUT_APPROVED
} from './types'
import approvalApi from '../../api/approvalApi';
import { getAlerts } from '../actions/alertAct'

export const setApproval = (items) => ({
    type: SET_APPROVED,
    payload: items,
});
// fetch all 
export const fetchApproval = () => async (dispatch) => {
    approvalApi.getAll()
        .then(res => dispatch(setApproval(res)))
        .catch(err => dispatch(getAlerts({ msg: `disconnect fetch : ${err.message} `, type: 'error' })))
};

// Create approval
export const addApproval = (data) => (dispatch) => {
    approvalApi.post(data)
        .then(res => {
            dispatch(getAlerts({ msg: `Đã tạo đơn xin nghỉ`, title: 'Success' }));
            dispatch({
                type: ADD_APPROVED,
                payload: res
            });
        })
        .catch(err => {
            dispatch(getAlerts({ msg: err.response.statusText, title: 'Error' }))
        });
}
// Put approval
export const editApproval = (id, data) => (dispatch) => {
    approvalApi.put(id, data)
        .then(res => {
            dispatch({
                type: PUT_APPROVED,
                payload: res
            });
        })
        .catch(err => {
            dispatch(getAlerts({ msg: err.response.statusText, title: 'Error' }))
        });
}