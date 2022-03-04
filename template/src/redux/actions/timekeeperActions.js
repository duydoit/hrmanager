import { SET_TIMEKEEPER } from './types'
import timekeeperApi from '../../api/timekeeperApi';
import { getAlerts } from '../actions/alertAct'
//getAll list Employee
export const setTimekeepers = (items) => ({
    type: SET_TIMEKEEPER,
    payload: items,
});

// fetch all Employee
export const fetchTimekeeper = () => async (dispatch) => {
    timekeeperApi.getAll()
        .then(res => dispatch(setTimekeepers(res)))
        .catch(err => dispatch(getAlerts({ msg: `Không kết nối : ${err.message} `, title: 'error' })))
};