import { SET_TIMESHEET } from './types'
import timesheetApi from '../../api/timesheetApi';
import { getAlerts } from './alertAct'
//getAll list Employee
export const setTimesheet = (items) => ({
    type: SET_TIMESHEET,
    payload: items,
});

// fetch all Employee
export const fetchTimesheet = () => async (dispatch) => {
    timesheetApi.getAll()
        .then(res => dispatch(setTimesheet(res)))
        .catch(err => dispatch(getAlerts({ msg: `Không kết nối : ${err.message} `, title: 'error' })))
};