import {
  SET_DEPARTMENT,
  REMOVE_DEPARTMENT,
  DETAIL_DEPARTMENT,
  EDIT_DEPARTMENT,
  ADD_DEPARTMENT,
} from './types'
import departmentApi from '../../api/departmentApi';
import { getAlerts } from '../actions/alertAct'
//getAll list Department
export const setDerpartments = (items) => ({
  type: SET_DEPARTMENT,
  payload: items,
});

// fetch all Department
export const fetchDerpartments = () => async (dispatch) => {
  departmentApi.getAll()
    .then(res => dispatch(setDerpartments(res)))
    .catch(err => dispatch(getAlerts({ msg: `disconnect fetch : ${err.message} `, type: 'error' })))
};

export const detailDeparment = (id) => (dispatch) => {
  departmentApi.get(id)
    .then(res => {
      dispatch({
        type: DETAIL_DEPARTMENT,
        payload: res
      });
    })
    .catch(err => {
      dispatch(getAlerts({ msg: err.response.statusText, title: 'Error' }))
    });
}

export const addDepartment = (data) => (dispatch) => {
  departmentApi.post(data)
    .then(res => {
      dispatch(getAlerts({ msg: `Đã tạo phòng ban có id ${res.id}`, title: 'Success' }));
      dispatch({
        type: ADD_DEPARTMENT,
        payload: res
      });
    })
    .catch(err => {
      dispatch(getAlerts({ msg: err.response.statusText, title: 'Error' }))
    });
}

export const deleteDepartment = (id) => (dispatch) => {
  departmentApi.delete(id)
    .then((res) => {
      dispatch(getAlerts({ msg: `Phòng ban đã được xoá !`, title: 'Success' }))
      dispatch({ type: REMOVE_DEPARTMENT, payload: id, })
    })
    .catch(err => dispatch(getAlerts({ msg: err.response.statusText, type: 'error' })));
}

export const editDepartment = (id, data) => (dispatch) => {
  departmentApi.put(id, data)
    .then(res => {
      dispatch({
        type: EDIT_DEPARTMENT,
        payload: res
      })
    })
    .catch(err => {
      dispatch(getAlerts({ msg: err.response.statusText, title: 'Error' }))
    })
}