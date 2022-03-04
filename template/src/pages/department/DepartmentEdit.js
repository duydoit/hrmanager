import { useEffect } from 'react'
import DepartmentForm from './DepartmentForm'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { detailDeparment, editDepartment } from '../../redux/actions/departmentAction'

export default function DepartmentEdit() {
    const { departmentId } = useParams();
    const dispatch = useDispatch()
    const department = useSelector(state => state.departments.detail)
    const title = `Chỉnh sửa phòng ban: ${department && department.name}`

    useEffect(() => {
        dispatch(detailDeparment(departmentId))
    }, [departmentId])
    const handlerSubmit = (data) => {
        dispatch(editDepartment(departmentId, data))
    }
    return (
        <DepartmentForm detail={department} title={title} addSubmit={handlerSubmit} />
    )
}
