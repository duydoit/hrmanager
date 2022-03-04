import React from 'react'
import DepartmentForm from './DepartmentForm'
import { useDispatch } from 'react-redux'
import { addDepartment } from '../../redux/actions/departmentAction'
function DepartmentCreate() {
    const dispatch = useDispatch()
    const title = "Tạo phòng ban mới"
    const handlerSubmit = (data) => {
        dispatch(addDepartment(data))
    }
    return (
        <DepartmentForm title={title} addSubmit={handlerSubmit} />
    )
}

export default DepartmentCreate