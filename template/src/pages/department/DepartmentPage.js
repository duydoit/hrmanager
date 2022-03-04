import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Pagination from '../../components/pagination/Pagination'
import { useSelector, useDispatch } from "react-redux"
import { fetchDerpartments } from "../../redux/actions/departmentAction"
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function DepartmentPage() {
  const departmentList = useSelector(state => state.departments.list)
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchList = async () => {
      dispatch(fetchDerpartments());
    }
    fetchList()
  }, []);
  const [currentPage, setCurrentPage] = useState(1)
  const [amountPerPage, setAmountPerPage] = useState(10)
  // Get current list
  const indexOfLastPage = currentPage * amountPerPage
  const indexOfFirstPage = indexOfLastPage - amountPerPage
  const currentList = departmentList.slice(indexOfFirstPage, indexOfLastPage)
  const totalPages = departmentList.length
  const handlesPaginate = (number) => setCurrentPage(number)
  const handlesAmountItem = (value) => setAmountPerPage(value)

  const handlerExportPDF = () => {
    const input = document.getElementById('content-department');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('img/png');
        const pdf = new jsPDF('l', 'px', 'a4');
        pdf.addImage(imgData, 'PNG', 1, 1);
        pdf.save("list-department.pdf");
      });
  }
  return (
    <div className="font-medium">
      {/* header */}
      <div className="h-12 text-sm bg-slate-200 flex justify-end items-center px-5 shadow border-b border-gray-300">
        <div className="text-white flex items-center ">
          <Link
            to="create"
            className=" bg-violet-500 px-2 py-1  hover:bg-violet-600 ml-2"
          >
            Tạo mới
          </Link>
          <button
            onClick={handlerExportPDF}
            className="font-medium bg-violet-500 px-2 py-1  hover:bg-violet-600 ml-2"
          >
            Xuất PDF
          </button>
        </div>
      </div>

      {/* content */}
      <div className="bg-white mt-5  w-full container mx-auto rounded shadow-md">
        <div className=" border-b px-5 py-3 border-gray-300">
          <span className="text-xl text-violet-600">Phòng Ban</span>
        </div>
        <div className="px-5 py-6" id="content-department">
          <div className="px-2 pb-5 text-2xl text-gray-700">
            {totalPages} Phòng ban
          </div>
          <ul className="grid grid-cols-4 gap-10 text-white">
            {currentList.map(item => {
              return (
                <li key={item.id} className="w-64 divide-y bg-gray-100 shadow">
                  <Link to={`${item.id}/detail`}>
                    <div className="bg-gray-500 text-lg px-3 py-2 flex justify-between items-center">
                      <span>{item.name}</span>
                      <span className={`${item.status ? "bg-green-400" : "bg-rose-500"} inline-flex rounded-full h-4 w-4 `}></span>
                    </div>
                    <div className="text-gray-800 font-normal px-3 py-2 flex justify-between"> <span>Số điện thoại</span> <span>{item.phone}</span>  </div>
                    <div className="text-gray-800 font-normal px-3 py-2 flex justify-between"> <span>Số lượng nhân viên</span> <span>{item.count}</span>  </div>
                    <div className="text-gray-800 font-normal px-3 py-2 flex justify-between"> <span>Quản lý</span> <span>{item.department_name}</span>  </div>
                  </Link>
                </li>
              )
            }
            )}
          </ul>
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

export default DepartmentPage