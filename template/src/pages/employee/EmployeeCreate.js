import React from 'react'
import EmployeeForm from './EmployeeForm'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../../redux/actions/employeeAct'

export default function EmployeeCreate() {
    const dispatch = useDispatch()
    const title = "Tạo nhân viên mới"
    const handlerSubmit = (data) => {
        dispatch(addEmployee(data))
    }
    return (
        <EmployeeForm title={title} addSubmit={handlerSubmit} />
    )
}
