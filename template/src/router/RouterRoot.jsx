import LazyLoading from "../components/lazy/LazyLoading";
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import React from 'react'
import AccountEdit from "../pages/account/AccountEdit";
import AccountDetail from "../pages/account/AccountDetail";

const LoginLayout = LazyLoading(() => import("../components/login/Login"));
const MainLayout = LazyLoading(() => import("../components/layout/MainLayout"))

const EmployeePage = LazyLoading(() => import("../pages/employee/EmployeePage"))
const EmployeeCreate = LazyLoading(() => import("../pages/employee/EmployeeCreate"))
const EmployeeDetail = LazyLoading(() => import("../pages/employee/EmployeeDetail"))
const EmployeeEdit = LazyLoading(() => import("../pages/employee/EmployeeEdit"))
const DepartmentCreate = LazyLoading(() => import("../pages/department/DepartmentCreate"))
const DepartmentPage = LazyLoading(() => import("../pages/department/DepartmentPage"))
const DepartmentEdit = LazyLoading(() => import("../pages/department/DepartmentEdit"))
const DepartmentDetail = LazyLoading(() => import("../pages/department/DepartmentDetail"))
const TimekeeperPage = LazyLoading(() => import("../pages/timekeeper/Timekeeper"))
const TimesheetPage = LazyLoading(() => import("../pages/timesheet/TimeSheetPage"))
const ApprovalPage = LazyLoading(() => import("../pages/approval/ApprovalPage"))
const ApprovalCreate = LazyLoading(() => import("../pages/approval/ApprovalCreate"))
const SalaryPage = LazyLoading(() => import("../pages/salary/Salary"))
const NotFoundPage = LazyLoading(() => import("../pages/notfound/NotFound"))
const AccountPage = LazyLoading(() => import("../pages/account/AccountPage"))
const AccountCreate = LazyLoading(() => import("../pages/account/AccountCreate"))
function RouteRoot({ auth }) {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    return (
        <React.Fragment>
            <Routes>
                {!isAuthenticated &&
                    <Route path="/" element={<LoginLayout />} >
                        <Route path="*" element={<LoginLayout />} />
                    </Route>
                }
                {isAuthenticated &&
                    <Route path="/" element={<MainLayout />} >
                        <Route path="/employee" element={<EmployeePage />} />
                        {auth.role != 'user' && <Route path="/employee/create" element={<EmployeeCreate />} />}
                        <Route path="/employee/:employeeId/detail" element={<EmployeeDetail />} />
                        {auth.role != 'user' && <Route path="/employee/:employeeId/edit" element={<EmployeeEdit />} />}
                        <Route path="/department" element={<DepartmentPage />} />
                        {auth.role != 'user' && <Route path="/department/create" element={<DepartmentCreate />} />}
                        <Route path="/department/:departmentId/detail" element={<DepartmentDetail />} />
                        {auth.role != 'user' && <Route path="/department/:departmentId/edit" element={<DepartmentEdit />} />}
                        <Route path="/timesheet" element={<TimekeeperPage />} />
                        <Route path="/approval" element={<ApprovalPage />} />
                        <Route path="/approval/create" element={<ApprovalCreate />} />
                        <Route path="/salary" element={<SalaryPage />} />
                        <Route path="/statistic" element={<TimesheetPage />} />
                        {auth.role === 'admin' && <Route path="/account" element={<AccountPage />} />}
                        {auth.role === 'admin' && <Route path="/account/create" element={<AccountCreate />} />}
                        {auth.role === 'admin' && <Route path="/account/:accId/edit" element={<AccountEdit />} />}
                        {auth.role === 'admin' && <Route path="/account/:accId/detail" element={<AccountDetail />} />}
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                }
            </Routes>
        </React.Fragment>
    )
}

export default RouteRoot;