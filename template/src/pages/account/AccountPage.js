import { useEffect, useState } from "react";
import Pagination from '../../components/pagination/Pagination'
import { useAlert } from 'react-alert'
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import TableView from "../../components/table/tableView";
import { Link } from "react-router-dom";
import { fetchAccounts } from "../../redux/actions/accountActions";
import { deleteAccount } from '../../redux/actions/accountActions'
function AccountPage() {
    const alert = useAlert()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAccounts());
    }, []);
    const accList = useSelector(state => state.accounts.list)
    const { register, handleSubmit, reset } = useForm()
    const [keySearch, setKeySearch] = useState({ "type-search": "username", "value-search": "" })

    const onSubmit = data => setKeySearch(data)
    const listSearch = searchItems(accList)
    console.log(listSearch)
    function searchItems(data) {
        return data.filter((item) =>
            item[keySearch["type-search"]].toString().toLowerCase().indexOf(keySearch["value-search"].toLowerCase()) > -1
        )
    }
    // Get current list
    const [currentPage, setCurrentPage] = useState(1)
    const [amountPerPage, setAmountPerPage] = useState(10)
    const indexOfLastPage = currentPage * amountPerPage
    const indexOfFirstPage = indexOfLastPage - amountPerPage
    const currentList = listSearch.slice(indexOfFirstPage, indexOfLastPage)
    const totalPages = listSearch.length
    const handlesPaginate = (number) => setCurrentPage(number)
    const handlesAmountItem = (value) => setAmountPerPage(value)
    // columns table
    const columns = [
        {
            title: "Trạng thái",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Tên đăng nhập",
            dataIndex: "username",
            key: "username",
            render: (ojb) => (
                <Link to={`/account/${ojb.id}/detail`} className="text-blue-500 hover:text-blue-700" >
                    {ojb.username}
                </Link>
            )
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Phần quyền",
            dataIndex: "role",
            key: "role",
        },
        {
            title: "",
            dataIndex: "control",
            key: "control",
            render: (ojb) => (
                <div className="flex justify-end">
                    <button
                        onClick={() => {
                            alert.show(`Bạn có muốn xoá tài khoản này này !`, {
                                title: "Xoá tài khoản",
                                closeCopy: "Huỷ",
                                actions: [
                                    {
                                        copy: "Đồng ý",
                                        onClick: () => dispatch(deleteAccount(ojb.id)),
                                    },
                                ],
                            });
                        }}
                        className="text-sm font-medium text-white px-2.5 mx-1 py-1.5 bg-rose-500 hover:bg-rose-600" >Xoá</button>
                </div>
            ),
        },
    ];

    return (
        <div className="font-medium text-gray-700">
            {/* Header */}
            <div className="h-12 text-sm bg-slate-200 flex justify-end items-center px-5 shadow border-b border-gray-300">
                <div className="text-white flex items-center ">
                    <Link to='/account/create'
                        className="font-medium bg-violet-500 px-2 py-1  hover:bg-violet-600 ml-2"
                    >
                        Tạo Mới
                    </Link>
                </div>
            </div>
            <div className="bg-white mt-5  w-full container mx-auto rounded shadow-md">
                <div className=" border-b px-5 py-3 border-gray-300">
                    <span className="text-xl font-medium text-violet-600">Tài khoản</span>
                </div>
                {/* search */}
                <form onSubmit={handleSubmit(onSubmit)} className="flex items-center px-5 w-full mt-5">
                    <div className="flex w-full border-gray-300 rounded divide-gray-300 divide-x border mr-3">
                        <select className="px-3 py-1 rounded-l w-44 focus:outline-violet-500"  {...register("type-search")}>
                            <option value="username">Tên đăng nhập</option>
                            <option value="id">Mã tài khoản</option>
                            <option value="email">Email</option>
                        </select>
                        <input type="text" className="w-full px-3 py-1 rounded-r focus:outline-violet-500 "  {...register("value-search")} />
                    </div>
                    <button type="submit" className="font-medium text-sm w-28 mx-2 text-white px-2.5 py-1.5 bg-violet-500 hover:bg-violet-600">Tìm kiếm</button>
                    <button type="button" onClick={() => { setKeySearch({ "type-search": "name", "value-search": "" }); reset({ "value-search": "" }) }} className="font-medium text-sm w-28 mx-2 px-2.5 py-1.5 bg-gray-100 border hover:bg-gray-200">Đặt lại</button>
                </form>

                <div className="px-5 py-6" id="content-employee-list">
                    <div className="px-2 pb-5 text-2xl text-gray-700 font-medium">
                        {totalPages} Tài khoản
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

export default AccountPage