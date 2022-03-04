import { useEffect } from 'react'
import EmployeeForm from './EmployeeForm'
import { useDispatch, useSelector } from 'react-redux'
import { detailEmployee, putEmployee } from '../../redux/actions/employeeAct'
import { useParams } from 'react-router-dom'

export default function EmployeeEdit() {
    const { employeeId } = useParams()
    const dispatch = useDispatch()
    const employee = useSelector(state => state.employees.detail)
    useEffect(() => {
        dispatch(detailEmployee(employeeId))
    }, [employeeId])

    const title = `Chỉnh sửa nhân viên: ${employee.name}`
    const handlerSubmit = (data) => {
        dispatch(putEmployee(employeeId, data))
    }
    return (
        <EmployeeForm employee={employee} title={title} addSubmit={handlerSubmit} />
    )
}
