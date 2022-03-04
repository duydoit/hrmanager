import {
  SET_EMPLOYEES,
  DELETE_EMPLOYEE,
  ADD_EMPLOYEE,
  DETAIL_EMPLOYEE,
  PUT_EMPLOYEE
} from "./types";
import employeeApi from "../../api/employeeApi";
import { getAlerts } from "./alertAct"
//getAll list Employee
export const setEmployee = (items) => ({
  type: SET_EMPLOYEES,
  payload: items,
});
// fetch all Employee
export const fetchEmployees = () => async (dispatch) => {
  employeeApi.getAll()
    .then(res => dispatch(setEmployee(res)))
    .catch(err => dispatch(getAlerts({ msg: "disconnect fetch", type: 'error' })))
};
//post employee
export const addEmployee = (employee) => (dispatch) => {
  employeeApi.post(employee)
    .then(res => {
      dispatch(getAlerts({ msg: `Đã tạo nhân viên có id ${res.id}`, title: 'Success' }));
      dispatch({
        type: ADD_EMPLOYEE,
        payload: res
      });
    })
    .catch(err => {
      dispatch(getAlerts({ msg: err.response.statusText, title: 'Error' }))
    });
}

//detail employee
export const detailEmployee = (id) => (dispatch) => {
  employeeApi.get(id)
    .then(res => {
      dispatch({
        type: DETAIL_EMPLOYEE,
        payload: res
      });
    })
    .catch(err => {
      dispatch(getAlerts({ msg: err.response.statusText, title: 'Error' }))
    });
}
//put employee
export const putEmployee = (id, data) => (dispatch) => {
  employeeApi.put(id, data)
    .then(res => {
      dispatch(getAlerts({ msg: `Nhân viên cập nhật thành công !`, title: 'Success' }));
      dispatch({
        type: PUT_EMPLOYEE,
        payload: res
      })
    })
    .catch(err => {
      dispatch(getAlerts({ msg: err.response.statusText, title: 'Error' }))
    })
}
// delete employee
export const deleteEmployee = (id) => (dispatch) => {
  employeeApi.delete(id)
    .then((res) => {
      dispatch(getAlerts({ msg: `Nhân viên đã được xoá !`, title: 'Success' }))
      dispatch({ type: DELETE_EMPLOYEE, payload: id, })
    })
    .catch(err => dispatch(getAlerts({ msg: err.response.statusText, type: 'error' })));
}