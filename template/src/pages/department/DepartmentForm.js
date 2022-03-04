import { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { fetchEmployees } from "../../redux/actions/employeeAct"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useAlert } from 'react-alert'

function DepartmentForm({ title, detail, addSubmit }) {
    const listManager = useSelector(state => state.employees.list).filter(item => item.status == true)
    const dispatch = useDispatch()
    const alert = useAlert()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(fetchEmployees());
    }, [])
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: detail })
    const handlerCancel = () => {
        alert.show("Bạn chưa hoàn thành tạo mới. Bạn có chắc chắn muốn rời khỏi khi chưa hoàn thành không?", {
            closeCopy: "Huỷ",
            title: "Rời khỏi trang?",
            actions: [
                {
                    copy: "Đồng ý",
                    onClick: () => navigate('/department'),
                },
            ],
        });
    }
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
    return (
        <div>
            <div className="font-medium h-12 text-sm bg-slate-200 flex justify-end items-center px-5 shadow border-b border-gray-300">
                <div className="text-white flex items-center ">
                    {/* <Link
                        to="create"
                        className=" bg-violet-500 px-2 py-1  hover:bg-violet-600 ml-2"
                    >
                        Tạo mới
                    </Link>
                    <button
                        onClick={exportPDF}
                        className="font-medium bg-violet-500 px-2 py-1  hover:bg-violet-600 ml-2"
                    >
                        Xuất PDF
                    </button> */}
                </div>
            </div>
            {/* content */}
            <div className="bg-white my-5  w-full container mx-auto rounded shadow-md">
                <div className=" border-b px-5 py-3 border-gray-300">
                    <span className="text-xl font-medium text-violet-600">{title}</span>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="px-10 py-5">
                    <div className="grid grid-cols-6 gap-4 ">
                        <div className="col-span-6">
                            <span className="text-sm mr-5">
                                Kích hoạt phòng ban
                            </span>
                            <div className="relative inline-block w-10 mr-2 align-middle select-none">
                                <input  {...register("status")} type="checkbox" className="checked:bg-green-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-gray-200 border-4 border-white appearance-none cursor-pointer" />
                                <label className="block overflow-hidden h-6 rounded-full bg-gray-300 ursor-pointer">
                                </label>
                            </div>
                        </div>
                        <div className="col-span-4 flex flex-col">
                            <span className="text-sm mb-2">Tên phòng ban</span>
                            <input type="text" className="px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500"
                                {...register("name", { required: true })}
                            />
                        </div>
                        <div className="col-span-4 flex flex-col">
                            <span className="text-sm mb-2">Số điện thoại</span>
                            <input type="text" className="px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500"
                                {...register("phone", { required: true })}
                            />
                        </div>
                        <div className="col-span-4 flex flex-col">
                            <span className="text-sm mb-2">Maneger</span>
                            <select {...register("manager", { setValueAs: v => v != "0" ? v : null })} className="px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500 overflow-y-auto">
                                <option value="0">None</option>
                                {listManager.map(item => {
                                    return (<option key={item.id} value={item.id}>{item.name}</option>)
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="my-8">
                        <button type="submit" className="mr-2 text-white font-medium w-36 h-10 bg-violet-500 rounded-full hover:bg-violet-600">Save</button>
                        <button type="button" onClick={handlerCancel} className="mr-2 text-gray-500  w-36 h-10 font-medium bg-gray-200 rounded-full hover:bg-gray-300">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DepartmentForm