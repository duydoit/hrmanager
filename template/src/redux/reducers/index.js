import { combineReducers } from "redux";
import employeeReducer from "./employeesReducer";
import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
import departmentReducer from "./departmentReducer";
import timekeeperReducer from "./timekeeperReducer";
import approvalReducer from "./approvalReducer";
import timesheetReducer from "./timesheetReducer";
import accountReducer from "./accountReducers";
import wagerateReducer from "./wagerateReducers";
export default combineReducers({
  employees: employeeReducer,
  departments: departmentReducer,
  alert: alertReducer,
  auth: authReducer,
  timekeepers: timekeeperReducer,
  approvals: approvalReducer,
  timesheets: timesheetReducer,
  accounts: accountReducer,
  wagerates: wagerateReducer,
});
