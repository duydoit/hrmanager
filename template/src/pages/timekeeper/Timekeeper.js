import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTimekeeper } from "../../redux/actions/timekeeperActions";
import TableView from '../../components/table/tableView'
import Pagination from '../../components/pagination/Pagination'
import html2canvas from 'html2canvas';
import { useForm } from "react-hook-form";
import jsPDF from 'jspdf';
function Timekeeper() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTimekeeper());
    }, []);
    const timekeeperList = useSelector(state => state.timekeepers.list)
    const { register, handleSubmit, reset } = useForm()
    const [keySearch, setKeySearch] = useState({ "type-search": "employee_name", "value-search": "", "value-date": "" })

    const listSearch = searchItems(timekeeperList)
    //search
    const onSubmit = data => setKeySearch(data);
    function searchItems(data) {
        return data.filter((item) =>
            item[keySearch["type-search"]].toString().toLowerCase().indexOf(keySearch["value-search"].toLowerCase()) > -1 &&
            item["days"].toString().toLowerCase().indexOf(keySearch["value-date"].toLowerCase()) > -1
        )
    }
    const columns = [{
        title: "Mã nhân viên",
        dataIndex: "employee",
        key: "id",
    },
    {
        title: "Nhân viên",
        dataIndex: "employee_name",
        key: "employee",
    },
    {
        title: "Ngày",
        dataIndex: "days",
        key: "day",
    },
    {
        title: "thời gian",
        dataIndex: "time_show",
        key: "time",
    },
        // {
        //     title: "",
        //     dataIndex: "control",
        //     key: "control",
        //     render: (ojb) => (
        //         <div className="flex justify-end">
        //             <button className="font-medium text-white px-2 mx-1 py-1 bg-rose-500 hover:bg-rose-600" >Xoá</button>
        //         </div>
        //     ),
        // },
    ]
    // Pagination
    const [currentPage, setCurrentPage] = useState(1)
    const [amountPerPage, setAmountPerPage] = useState(10)
    const indexOfLastPage = currentPage * amountPerPage
    const indexOfFirstPage = indexOfLastPage - amountPerPage
    const currentList = listSearch.slice(indexOfFirstPage, indexOfLastPage)
    const totalPages = listSearch.length
    const handlesPaginate = (number) => setCurrentPage(number)
    const handlesAmountItem = (value) => setAmountPerPage(value)
    //Export PDF
    const exportPDF = () => {
        const input = document.getElementById('list-timekeeper');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('img/png');
                const pdf = new jsPDF('l', 'pt', 'a4');
                pdf.addImage(imgData, 'PNG', 1, 1);
                pdf.save("list-timekeeper.pdf");
            });
    }

    return (
        <div>
            <div className="h-12 text-sm bg-slate-200 flex justify-end items-center px-5 shadow border-b border-gray-300">
                <div className="text-white flex items-center ">
                    <Link
                        to="create"
                        className="font-medium bg-violet-500 px-2 py-1  hover:bg-violet-600 ml-2"
                    >
                        Chấm Công
                    </Link>
                    <button
                        onClick={exportPDF}
                        className="font-medium bg-violet-500 px-2 py-1  hover:bg-violet-600 ml-2"
                    >
                        Xuất PDF
                    </button>
                </div>
            </div>
            <div className="bg-white mt-5  w-full container mx-auto rounded shadow-md">
                <div className=" border-b px-5 py-3 border-gray-300">
                    <span className="font-medium text-xl text-violet-600">Lịch sử chấm công</span>
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
                        <div className="px-3 py-1 flex-none font-normal">Ngày chấm công</div>
                        <input type="date" {...register("value-date")} className="w-full px-3 py-1 rounded-r focus:outline-violet-500 border-gray-300  border" />
                    </div>
                    <button type="submit" className="font-medium  flex-none text-sm w-28 mx-2 text-white px-2.5 py-1.5 bg-violet-500 hover:bg-violet-600">Tìm kiếm</button>
                    <button type="button"
                        onClick={() => { setKeySearch({ "type-search": "employee_name", "value-search": "", "value-date": "" }); reset({ "value-search": "", "value-date": "" }) }}
                        className="font-medium  flex-none text-sm w-28 mx-2 px-2.5 py-1.5 bg-gray-100 border hover:bg-gray-200">Đặt lại</button>
                </form>
                <div className="px-5 py-6" id="list-timekeeper">
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
        </div >
    )
}

export default Timekeeper