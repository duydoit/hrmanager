import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAlert } from 'react-alert'
import { useDispatch } from 'react-redux';
import { addApproval } from "../../redux/actions/approvalActions"

export default function ApprovalCreate() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const alert = useAlert()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit = (data) => {
        alert.show("Bạn có chắc chắn muốn hoàn thành không?", {
            closeCopy: "Huỷ",
            title: "Tạo mới?",
            actions: [
                {
                    copy: "Đồng ý",
                    onClick: async () => {
                        dispatch(addApproval(data))
                    }
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
                    onClick: () => navigate('/approval'),
                },
            ],
        });
    }
    return (
        <div>
            <div className="font-medium h-12 text-sm bg-slate-200 flex justify-end items-center px-5 shadow border-b border-gray-300">
                <div className="text-white flex items-center ">
                </div>
            </div>
            <div className="bg-white my-5  w-full container mx-auto rounded shadow-md">
                <div className=" border-b px-5 py-3 border-gray-300">
                    <span className="text-xl font-medium text-violet-600">Tạo đơn xin nghỉ</span>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="px-10 py-5">
                    <div className="grid grid-cols-6 gap-4 ">
                        <div className="col-span-4 flex flex-col">
                            <span className="text-sm mb-2">Tiêu đề</span>
                            <input type="text" className="px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500"
                                {...register("title", { required: true })}
                            />
                        </div>
                        <div className="col-span-4 flex flex-col">
                            <span className="text-sm mb-2">Nội dung chi tiết</span>
                            <input type="text" className="px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500"
                                {...register("description")}
                            />
                        </div>
                        <div className="col-span-4 flex flex-col">
                            <span className="text-sm mb-2">Nội dung chi tiết</span>
                            <input type="date" className="px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500"
                                {...register("date_approved", { required: true })}
                            />
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
