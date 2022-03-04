import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchEmployees } from '../../redux/actions/employeeAct'
import { detailDeparment, deleteDepartment } from '../../redux/actions/departmentAction'
import Pagination from '../../components/pagination/Pagination';
import TableView from "../../components/table/tableView";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useAlert } from 'react-alert'

function DepartmentDetail() {
  const { departmentId } = useParams();
  const detail = useSelector(state => state.departments.detail)
  const listEmployee = useSelector(state => state.employees.list).filter(item => item.department == departmentId)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(detailDeparment(departmentId));
    dispatch(fetchEmployees());
  }, [departmentId])

  const navigate = useNavigate()
  const alert = useAlert()

  const handlesDeleteItem = () => {
    alert.show(`Bạn có muốn xoá phòng ban này !`, {
      title: "Xoá phòng ban",
      closeCopy: "Huỷ",
      actions: [
        {
          copy: "Đồng ý",
          onClick: () => dispatch(deleteDepartment(departmentId)),
        },
      ],
    });
  }
  // Get current list
  const columns = [
    {
      title: "Mã số",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên nhân viên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1)
  const [amountPerPage, setAmountPerPage] = useState(10)
  const indexOfLastPage = currentPage * amountPerPage
  const indexOfFirstPage = indexOfLastPage - amountPerPage
  const currentList = listEmployee.slice(indexOfFirstPage, indexOfLastPage)
  const totalPages = listEmployee.length
  const handlesPaginate = (number) => setCurrentPage(number)
  const handlesAmountItem = (value) => setAmountPerPage(value)
  const handlesEditItem = () => { navigate(`/department/${departmentId}/edit`) }
  // export PDF
  const handlerExportPDF = () => {
    const input = document.getElementById('content-department-detail');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('img/png');
        const pdf = new jsPDF('l', 'pt', 'a4');
        pdf.addImage(imgData, 'PNG', 1, 1);
        pdf.save(`department-detail-id-${departmentId}.pdf`);
      });
  }

  return (
    <div>
      <div className="font-medium h-12 text-sm bg-slate-200 flex justify-end items-center px-5 shadow border-b border-gray-300">
        <div className="text-white flex items-center ">
          <button
            onClick={handlesEditItem}
            className="font-medium bg-violet-500 px-2 py-1  hover:bg-violet-600 ml-2"
          >
            Sửa
          </button>
          <button
            onClick={handlesDeleteItem}
            className="font-medium bg-rose-500 px-2 py-1  hover:bg-rose-600 ml-2"
          >
            Xoá
          </button >
          <button
            onClick={handlerExportPDF}
            className="font-medium bg-violet-500 px-2 py-1  hover:bg-violet-600 ml-2"
          >
            Xuất PDF
          </button>
        </div>
      </div>
      {/* content */}
      <div className="bg-white mt-5 w-full container mx-auto rounded shadow-md" id="content-department-detail">
        {/* "header name" */}
        <div className=" border-b px-5 py-3 border-gray-300">
          <span className="font-medium text-xl text-violet-600">Chi tiết phòng ban</span>
        </div>

        <div className="grid grid-cols-4 gap-4 border-b border-gray-300">
          <div className="col-span-4 bg-violet-600 text-xl text-white px-3 py-2 flex justify-center items-center font-medium">
            <span className=" font-normal mr-2">Tên phòng:</span>
            <span>{detail && detail.name}</span>
          </div>
          <div className="px-5 py-2 col-span-2">
            <span className=" font-normal mr-2">Số điện thoại :</span>
            <span>{detail && detail.phone}</span>
          </div>
          <div className="px-5 py-2 col-span-2">
            <span className=" font-normal mr-2">Quản lý :</span>
            <span>{detail && detail.department_name}</span>
          </div>
        </div>

        <div className="px-5 py-6">
          <div className="px-2 pb-5 text-2xl text-gray-700 font-medium">
            {totalPages} nhân viên
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

export default DepartmentDetail