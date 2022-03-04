import { useState } from 'react'
import { Link } from 'react-router-dom'
import TableView from '../../components/table/tableView'
import Pagination from '../../components/pagination/Pagination'

function SalaryEmployee() {
    const salaryList = [{
        "id": "11",
        "employee_name": "Đỗ Anh Duy",
        "ware": "3",
        "luong": 12000,
        "thuong": 500,
        "workday": 18,
        "count": Math.floor((12000 + 500) * 18 / 20),
    }]
    const columns = [
        {
            title: "Mã nhân viên",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Nhân viên",
            dataIndex: "employee_name",
            key: "employee",
        },
        {
            title: "Bậc lương",
            dataIndex: "ware",
            key: "ware",
        },
        {
            title: "Lương cơ bản (1:1000)",
            dataIndex: "luong",
            key: "luong",
        },
        {
            title: "Trợ cấp (1:1000)",
            dataIndex: "thuong",
            key: "thuong",
        },
        {
            title: "Số ngày công",
            dataIndex: "workday",
            key: "workday",
        },
        {
            title: "Tổng lương (1:1000)",
            dataIndex: "count",
            key: "count",
        },
    ]

    const [currentPage, setCurrentPage] = useState(1)
    const [amountPerPage, setAmountPerPage] = useState(10)

    const indexOfLastPage = currentPage * amountPerPage
    const indexOfFirstPage = indexOfLastPage - amountPerPage
    const currentList = salaryList.slice(indexOfFirstPage, indexOfLastPage)
    const totalPages = salaryList.length
    const handlesPaginate = (pageNumber) => setCurrentPage(pageNumber)
    const handlesAmountItem = (value) => setAmountPerPage(value)

    return (
        <div className="font-medium">
            <div className="h-12 text-sm bg-slate-200 flex justify-end items-center px-5 shadow border-b border-gray-300">
                <div className="text-white flex items-center ">
                    <Link
                        to="add"
                        className=" bg-violet-500 px-2 py-1  hover:bg-violet-600 ml-2"
                    >
                        Xuất PDF
                    </Link>
                </div>
            </div>
            <div className="bg-white mt-5  w-full container mx-auto rounded shadow-md">
                <div className=" border-b px-5 py-3 border-gray-300">
                    <span className="text-xl text-violet-600">Tra cứu lương</span>
                </div>
                {/* search */}
                <form className="flex items-center px-5 w-full mt-5">
                    <div className="flex w-full border-gray-300 rounded divide-gray-300 divide-x border mr-3">
                        <select className="px-3 py-1 rounded-l w-44 focus:outline-violet-500">
                            <option value="name">Tên nhân viên</option>
                            <option value="id">Mã nhân viên</option>
                        </select>
                        <input type="text" className="w-full px-3 py-1 rounded-r focus:outline-violet-500 " />
                    </div>
                    <div className="flex w-60 items-center mr-5 flex-none">
                        <div className="px-3 py-1 flex-none font-normal">Tháng</div>
                        <input type="type" className="w-full px-3 py-1 rounded-r focus:outline-violet-500 border-gray-300  border" />
                    </div>
                    <div className="flex w-60 items-center mr-5 flex-none">
                        <div className="px-3 py-1 flex-none font-normal">Năm</div>
                        <input type="type" className="w-full px-3 py-1 rounded-r focus:outline-violet-500 border-gray-300  border" />
                    </div>
                    <button className="font-medium  flex-none text-sm w-28 mx-2 text-white px-2.5 py-1.5 bg-violet-500 hover:bg-violet-600">Tìm kiếm</button>
                    <button className="font-medium  flex-none text-sm w-28 mx-2 px-2.5 py-1.5 bg-gray-100 border hover:bg-gray-200">Đặt lại</button>
                </form>
                <div className="px-5 py-6">
                    <div className="px-2 pb-5 text-2xl text-gray-700">
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

export default SalaryEmployee