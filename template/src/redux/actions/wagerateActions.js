import { SET_WAGERATE } from './types'
import wagerateApi from '../../api/wagerateApi';
import { getAlerts } from './alertAct'
//getAll list Employee
export const setWagerate = (items) => ({
    type: SET_WAGERATE,
    payload: items,
});

// fetch all Employee
export const fetchWagerate = () => async (dispatch) => {
    wagerateApi.getAll()
        .then(res => dispatch(setWagerate(res)))
        .catch(err => dispatch(getAlerts({ msg: `Không kết nối : ${err.message} `, title: 'error' })))
};