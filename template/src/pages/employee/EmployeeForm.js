import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees } from "../../redux/actions/employeeAct"
import { fetchDerpartments } from '../../redux/actions/departmentAction';
import { fetchWagerate } from '../../redux/actions/wagerateActions';
import { fetchAccounts } from '../../redux/actions/accountActions';
function EmployeeForm({ title, employee, addSubmit }) {
    const listManager = useSelector(state => state.employees.list).filter(item => item.status == true)
    const listDepartment = useSelector(state => state.departments.list).filter(item => item.status == true)
    const listWage = useSelector(state => state.wagerates.list)
    const listAccount = useSelector(state => state.accounts.list)
    const auth = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchEmployees());
        dispatch(fetchDerpartments())
        dispatch(fetchWagerate())
        dispatch(fetchAccounts())
    }, [])
    const alert = useAlert()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: employee })

    const onSubmit = (data) => {
        alert.show("Bạn có chắc chắn muốn hoàn thành không?", {
            closeCopy: "Huỷ",
            title: "Tạo mới?",
            actions: [
                {
                    copy: "Đồng ý",
                    onClick: () => addSubmit(data),
                },
            ],
        });
    }
    const handlerCancel = () => {
        alert.show("Bạn chưa hoàn thành tạo mới. Bạn có chắc chắn muốn rời khỏi khi chưa hoàn thành không?", {
            closeCopy: "Huỷ",
            title: "Rời khỏi trang?",
            actions: [
                {
                    copy: "Đồng ý",
                    onClick: () => navigate('/employee'),
                },
            ],
        });
    }
    return (
        <div className="mx-10 my-8 text-gray-600">
            <div className="text-xl text-violet-600 font-medium mb-10">{title}</div>
            <div className="text-rose-600">
                {errors.name && errors.birthday && errors.joindate && errors.email && errors.phone &&
                    <span>Vui lòng nhập đầy đủ thông tin</span>}
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="">
                <div className="grid-cols-2 grid my-3">
                    <div className="grid grid-cols-6 gap-4 ">

                        <div className="col-span-6 flex flex-col">
                            <span className="text-sm mb-2">Họ và tên</span>
                            <input type="text" className="px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500"
                                {...register("name", { required: true })}
                            />
                        </div>
                        <div className="col-span-3 flex flex-col">
                            <span className="text-sm mb-2">Giới tính</span>
                            <select {...register("gender")} className="px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500">
                                <option value="male">Nam</option>
                                <option value="female">Nữ</option>
                                <option value="other">Khác</option>
                            </select>
                        </div>
                        <div className="col-span-3 flex flex-col">
                            <span className="text-sm mb-2">Trình trạng hôn nhân</span>
                            <select {...register("marital")} className="px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500">
                                <option value="single">Độc thân</option>
                                <option value="married">Kết hôn</option>
                                <option value="cohabitant">Sống thử</option>
                                <option value="divorced">Ly dị</option>
                            </select>
                        </div>
                        <div className="col-span-3 flex flex-col">
                            <span className="text-sm mb-2">Ngày sinh</span>
                            <input type="date" className="px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500"
                                {...register("birthday", { required: true })}
                            />
                        </div>
                        <div className="col-span-3 flex flex-col">
                            <span className="text-sm mb-2">Số điện thoại</span>
                            <input type="text" className="px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500"
                                {...register("phone", { required: true })}
                            />
                        </div>
                        <div className="col-span-6 flex flex-col">
                            <span className="text-sm mb-2">Email</span>
                            <input type="text" className="px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500"
                                {...register("email", { required: true })}
                            />
                        </div>
                        <div className="col-span-3 flex flex-col">
                            <span className="text-sm mb-2">Thể loại</span>
                            <select {...register("employee_type")} className="px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500">
                                <option value="employee">Nhân viên</option>
                                <option value="student">Học sinh</option>
                                <option value="intern">Thực tập</option>
                                <option value="freelancer">Làm tự do</option>
                            </select>
                        </div>
                        <div className="col-span-3 flex flex-col">
                            <span className="text-sm mb-2">Join Date</span>
                            <input type="date" className="px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500"
                                {...register("joindate", { required: true })}
                            />
                        </div>
                        <div className="col-span-3 flex flex-col">
                            <span className="text-sm mb-2">Maneger</span>
                            <select {...register("parent", { setValueAs: v => v != "0" ? parseInt(v) : null })} className="px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500 overflow-y-auto">
                                <option value="0">None</option>
                                {listManager.map(item => {
                                    return (<option key={item.id} value={item.id}>{item.name}</option>)
                                })}
                            </select>

                        </div>
                        <div className="col-span-3 flex flex-col">
                            <span className="text-sm mb-2">Mức Lương</span>
                            <select {...register("wage_rate", { setValueAs: v => v ? parseInt(v) : null })} className="px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500 overflow-y-auto">
                                <option value="0">None</option>
                                {listWage.map(item => {
                                    return (<option key={item.wage_rate} value={item.wage_rate}>{`Bậc: ${item.wage_rate} - Lương: ${item.basic_wage}000đ`}</option>)
                                })}
                            </select>

                        </div>
                        <div className="col-span-6 flex flex-col">
                            <span className="text-sm mb-2">Department</span>
                            <select {...register("department", { setValueAs: v => v != "0" ? parseInt(v) : null })} className="overflow-y-auto px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500">
                                <option value="0">None</option>
                                {listDepartment.map(item => {
                                    return (<option key={item.id} value={item.id}>{item.name}</option>)
                                })}
                            </select>
                        </div>
                        {auth.role === 'admin' && <div className="col-span-6 flex flex-col">
                            <span className="text-sm mb-2">Liên kết tài khoản</span>
                            <select {...register("owner", { setValueAs: v => v != "0" ? parseInt(v) : null })} className="overflow-y-auto px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500">
                                <option value="0">None</option>
                                {listAccount.map(item => {
                                    return (<option key={item.id} value={item.id}>{item.username}</option>)
                                })}
                            </select>
                        </div>}
                        <div className="col-span-6">
                            <span className="text-sm mr-5">
                                Active Employee
                            </span>
                            <div className="relative inline-block w-10 mr-2 align-middle select-none">
                                <input  {...register("status")} type="checkbox" className="checked:bg-violet-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                                <label className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                                </label>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <button type="submit" className="mr-2 text-white font-medium w-36 h-10 bg-violet-500 rounded-full hover:bg-violet-600">Save</button>
                    <button type="button" onClick={handlerCancel} className="mr-2 text-gray-500  w-36 h-10 font-medium bg-gray-200 rounded-full hover:bg-gray-300">Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EmployeeForm
