
import { Link } from 'react-router-dom'
import TableView from '../../components/table/tableView'
import { useSelector, useDispatch } from "react-redux"
import Pagination from '../../components/pagination/Pagination'
import { useEffect, useState } from 'react'
import { fetchApproval, editApproval } from "../../redux/actions/approvalActions"
import { useAlert } from 'react-alert'
import { useForm } from "react-hook-form";
function ApprovalPage() {
    const listApproval = useSelector(state => state.approvals.list)
    const auth = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchApproval());
    }, []);
    const { register, handleSubmit, reset } = useForm()
    const [keySearch, setKeySearch] = useState({ "type-search": "employee_name", "value-search": "", "value-date": "" })

    const alert = useAlert()
    const listSearch = searchItems(listApproval)
    //search
    const onSubmit = data => setKeySearch(data);
    function searchItems(data) {
        return data.filter((item) =>
            item[keySearch["type-search"]].toString().toLowerCase().indexOf(keySearch["value-search"].toLowerCase()) > -1 &&
            item["date_approved"].toString().toLowerCase().indexOf(keySearch["value-date"].toLowerCase()) > -1
        )
    }

    const columns = [
        {
            title: "Nhân viên",
            dataIndex: "employee_name",
            key: "name",
        },
        {
            title: "Tiêu đề",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "Ngày xin nghỉ",
            dataIndex: "date_approved",
            key: "date_approved",
        },
        {
            title: "Người duyệt",
            dataIndex: "approver_name",
            key: "approver_name",
        },
        {
            title: "Trạng thái",
            dataIndex: "status",
            render: (ojb) => (
                <>
                    {ojb.status == "new" && <span className="text-blue-500 font-medium" >Mới</span>}
                    {ojb.status == "approve" && <span className="text-green-500 font-medium" >Duyệt đơn</span>}
                    {ojb.status == "cancel" && <span className="text-rose-500 font-medium" >Từ chối</span>}
                </>
            )
        },
        {
            title: "",
            dataIndex: "control",
            key: "control",
            render: (ojb) => (
                <>
                    {ojb.status == "new" && auth.id == ojb.owner_id &&
                        <div className="flex justify-end">
                            <button
                                onClick={() => {
                                    let data = { "status": "approve" }
                                    alert.show(`Đồng ý phê duyệt đơn !`, {
                                        title: "Xác nhận đơn",
                                        closeCopy: "Huỷ",
                                        actions: [
                                            {
                                                copy: "Đồng ý",
                                                onClick: () => dispatch(editApproval(ojb.id, data))
                                            },
                                        ],
                                    });
                                }}
                                className="font-medium text-white px-2 mx-1 py-1 bg-blue-500 hover:bg-blue-600" >Duyệt</button>
                            <button
                                onClick={() => {
                                    {
                                        let data = { "status": "cancel" }
                                        alert.show(`Từ chối phê duyệt đơn !`, {
                                            title: "Xác nhận đơn",
                                            closeCopy: "Huỷ",
                                            actions: [
                                                {
                                                    copy: "Đồng ý",
                                                    onClick: () => dispatch(editApproval(ojb.id, data))
                                                },
                                            ],
                                        });
                                    }
                                }}
                                className="font-medium text-white px-2 mx-1 py-1 bg-amber-400 hover:bg-amber-500" >Từ chối</button>
                        </div>
                    }
                </>
            ),
        },
    ]

    const [currentPage, setCurrentPage] = useState(1)
    const [amountPerPage, setAmountPerPage] = useState(10)

    const indexOfLastPage = currentPage * amountPerPage
    const indexOfFirstPage = indexOfLastPage - amountPerPage
    const currentList = listSearch.slice(indexOfFirstPage, indexOfLastPage) || []
    const totalPages = listSearch.length
    const handlesPaginate = (pageNumber) => setCurrentPage(pageNumber)
    const handlesAmountItem = (value) => setAmountPerPage(value)
    return (
        <div className="">
            <div className="h-12 text-sm bg-slate-200 flex justify-end items-center px-5 shadow border-b border-gray-300">
                <div className="text-white flex items-center ">
                    <Link
                        to="create"
                        className="font-medium bg-violet-500 px-2 py-1  hover:bg-violet-600 ml-2"
                    >
                        Tạo đơn
                    </Link>
                    <button
                        className="font-medium bg-violet-500 px-2 py-1  hover:bg-violet-600 ml-2"
                    >
                        Xuất PDF
                    </button>
                </div>
            </div>
            <div className="bg-white mt-5  w-full container mx-auto rounded shadow-md">
                <div className=" border-b px-5 py-3 border-gray-300">
                    <span className="text-xl text-violet-600 font-medium">Đơn xin nghỉ</span>
                </div>
                {/* search */}
                <form onSubmit={handleSubmit(onSubmit)} className="flex items-center px-5 w-full mt-5">
                    <div className="flex w-full border-gray-300 rounded divide-gray-300 divide-x border mr-3">
                        <select  {...register("type-search")} className="px-3 py-1 rounded-l w-44 focus:outline-violet-500">
                            <option value="employee_name">Tên nhân viên</option>
                            <option value="employee">Mã nhân viên</option>
                        </select>
                        <input type="text" {...register("value-search")} className="w-full px-3 py-1 rounded-r focus:outline-violet-500 " />
                    </div>
                    <div className="flex w-80 items-center mr-5 flex-none">
                        <div className="px-3 py-1 flex-none font-normal">Ngày xin nghỉ</div>
                        <input type="date" {...register("value-date")} className="w-full px-3 py-1 rounded-r focus:outline-violet-500 border-gray-300  border" />
                    </div>

                    <button type="submit" className="font-medium  flex-none text-sm w-28 mx-2 text-white px-2.5 py-1.5 bg-violet-500 hover:bg-violet-600">Tìm kiếm</button>
                    <button type="button" onClick={() => { setKeySearch({ "type-search": "employee_name", "value-search": "", "value-date": "" }); reset({ "value-search": "", "value-date": "" }) }}
                        className="font-medium  flex-none text-sm w-28 mx-2 px-2.5 py-1.5 bg-gray-100 border hover:bg-gray-200">Đặt lại</button>
                </form>
                <div className="px-5 py-6">
                    <div className="px-2 pb-5 text-2xl text-gray-700 font-medium">
                        {totalPages} Bản ghi
                    </div>
                    <TableView datas={currentList} columns={columns} />
                    <div className="mt-4">
                        <Pagination
                            amountPerPage={amountPerPage}
                            currentPage={currentPage}
                            totalPages={totalPages}
                            paginate={handlesPaginate}
                            amountItem={handlesAmountItem}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApprovalPage