import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import demoAvt from "../../assets/img/avt_demo.jpg";
import TableView from "../../components/table/tableView";
import { useSelector, useDispatch } from "react-redux";
import { fetchEmployees, deleteEmployee } from "../../redux/actions/employeeAct";
import Pagination from '../../components/pagination/Pagination'
import { useAlert } from 'react-alert'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useForm } from "react-hook-form";

function EmployeePage() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);
  const employeeList = useSelector(state => state.employees.list)
  const { register, handleSubmit, reset } = useForm()
  const [keySearch, setKeySearch] = useState({ "type-search": "name", "value-search": "" })
  const alert = useAlert()
  const listSearch = searchItems(employeeList)
  function handleBtnDelete(id) {
    alert.show(`Bạn có muốn xoá nhân viên này !`, {
      closeCopy: "Huỷ",
      title: "Xoá nhân viên",
      actions: [
        {
          copy: "Đồng ý",
          onClick: () => dispatch(deleteEmployee(id)),
        },
      ],
    });
  }

  //search
  const onSubmit = data => setKeySearch(data);
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
      title: "Họ và tên",
      dataIndex: "name",
      key: "name",
      render: (ojb) => (
        <Link to={`/employee/${ojb.id}/detail`} className="flex items-center">
          <div className="flex-shrink-0">
            <img
              src={ojb.avatar ? ojb.avatar : demoAvt}
              alt="avt"
              className="w-9 h-9 rounded-full object-cover object-center"
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{ojb.name}</div>
            <div className="text-sm font-normal text-gray-500">{ojb.email}</div>
          </div>
        </Link>
      ),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (ojb) => (
        <div
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${ojb.status
            ? "bg-green-100 text-green-600"
            : "bg-rose-100 text-rose-600"
            }`}
        >
          {ojb.status ? "Hoạt động" : "Tạm dừng"}
        </div>
      ),
    },
    {
      title: "Phòng ban",
      dataIndex: "department_name",
      key: "department",
    },
    {
      title: "Quản lý",
      dataIndex: "manager_name",
      key: "manager",
    },
    {
      title: "Ngày tham gia",
      dataIndex: "joindate",
      key: "joindate",
    },
    {
      title: "",
      dataIndex: "control",
      key: "control",
      render: (ojb) => (
        <div className="flex justify-end">

          <button onClick={() => handleBtnDelete(ojb.id)} className="text-sm font-medium text-white px-2.5 mx-1 py-1.5 bg-rose-500 hover:bg-rose-600" >Xoá</button>
        </div>
      ),
    },
  ];
  //print pDF
  const exportPDF = () => {
    const input = document.getElementById('content-employee-list');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('img/png');
        const pdf = new jsPDF('l', 'pt', 'a4');
        pdf.addImage(imgData, 'PNG', 1, 1);
        pdf.save("employee-list.pdf");
      });
  }

  return (
    <div>
      <div className="font-medium h-12 text-sm bg-slate-200 flex justify-end items-center px-5 shadow border-b border-gray-300">
        <div className="text-white flex items-center ">
          <Link
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
          </button>
        </div>
      </div>

      {/* content */}
      <div className="bg-white mt-5  w-full container mx-auto rounded shadow-md">
        <div className=" border-b px-5 py-3 border-gray-300">
          <span className="text-xl font-medium text-violet-600">Nhân viên</span>
        </div>
        {/* search */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex items-center px-5 w-full mt-5">
          <div className="flex w-full border-gray-300 rounded divide-gray-300 divide-x border mr-3">
            <select className="px-3 py-1 rounded-l w-44 focus:outline-violet-500"  {...register("type-search")}>
              <option value="name">Tên nhân viên</option>
              <option value="id">Mã nhân viên</option>
              <option value="department_name">Tên phòng ban</option>
              <option value="manager_name">Tên quản lý</option>
            </select>
            <input type="text" className="w-full px-3 py-1 rounded-r focus:outline-violet-500 "  {...register("value-search")} />
          </div>
          <button type="submit" className="font-medium text-sm w-28 mx-2 text-white px-2.5 py-1.5 bg-violet-500 hover:bg-violet-600">Tìm kiếm</button>
          <button type="button" onClick={() => { setKeySearch({ "type-search": "name", "value-search": "" }); reset({ "value-search": "" }) }} className="font-medium text-sm w-28 mx-2 px-2.5 py-1.5 bg-gray-100 border hover:bg-gray-200">Đặt lại</button>
        </form>
        <div className="px-5 py-6" id="content-employee-list">
          <div className="px-2 pb-5 text-2xl text-gray-700 font-medium">
            {totalPages} Nhân viên
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
  );
}

export default EmployeePage;
