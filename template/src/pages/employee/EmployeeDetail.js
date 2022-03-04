import { useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { detailEmployee, deleteEmployee } from "../../redux/actions/employeeAct"
import { useAlert } from 'react-alert'
import demoAvt from "../../assets/img/avt_demo.jpg";
import jsPDF from "jspdf"
import html2canvas from 'html2canvas';

function EmployeeDetail() {
    const textGander = { "other": "Khác", "male": "Nam", "female": "Nữ" }
    const textMarital = { "single": "Độc thân", "married": "Đã kết hôn", "cohabitant": "Sống thử", "divorced": "Ly hôn", }
    const textEmployeeType = { "employee": "Nhân viên", "student": "Học sinh", "intern": "Thực tập", "freelancer": "Freelancer" }

    const alert = useAlert()
    const navigate = useNavigate()
    const { employeeId } = useParams()
    const detail = useSelector(state => state.employees.detail)
    const dispatch = useDispatch()

    const generatePDF = () => {
        const input = document.getElementById('content-detail-employee');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('img/png');
                const pdf = new jsPDF('l', 'pt', 'a4');
                pdf.addImage(imgData, 'PNG', 1, 1);
                pdf.save(`detail-employee-${detail.id}.pdf`);
            });
    }

    useEffect(() => {
        dispatch(detailEmployee(employeeId))
    }, [employeeId])

    const handlerDeletel = () => {
        alert.show(`Bạn có muốn xoá nhân viên này !`, {
            title: "Xoá nhân viên",
            closeCopy: "Huỷ",
            actions: [
                {
                    copy: "Đồng ý",
                    onClick: () => dispatch(deleteEmployee(employeeId)),
                },
            ],
        });
    }
    const handlerEdit = () => {
        navigate(`/employee/${employeeId}/edit`)
    }
    return (
        <div className="font-medium text-gray-700">
            {/* Header */}
            <div className="h-12 text-sm bg-slate-200 flex justify-end items-center px-5 shadow border-b border-gray-300">
                <div className="text-white flex items-center ">
                    <button
                        onClick={handlerEdit}
                        className="font-medium bg-violet-500 px-2 py-1  hover:bg-violet-600 ml-2"
                    >
                        Sửa
                    </button>
                    <button
                        onClick={handlerDeletel}
                        className="font-medium bg-rose-500 px-2 py-1  hover:bg-rose-600 ml-2"
                    >
                        Xoá
                    </button>
                    <button
                        onClick={generatePDF}
                        className="font-medium bg-violet-500 px-2 py-1  hover:bg-violet-600 ml-2"
                    >
                        Xuất PDF
                    </button>
                </div>
            </div>
            {/* Content */}

            <div className="bg-white mt-5 w-full container mx-auto rounded shadow-md">
                {/* "header name" */}
                <div className=" border-b px-5 py-3 border-gray-300">
                    <span className="text-xl text-violet-600">Chi tiết nhân viên</span>
                </div>

                <div className="flex px-5 py-10" id="content-detail-employee">
                    <div className="text-center flex-none mx-6">
                        <img src={detail && detail.avatar ? detail.avatar : demoAvt}
                            className="w-40 h-40 inline-block rounded-md object-cover object-center"
                            alt="avt" />
                        <div className="text-2xl my-5" >{detail && detail.name}</div>
                        <div className="py-1.5 px-2 rounded-full bg-green-100 text-green-600 my-3" >Hoạt động</div>
                    </div>
                    <div className="w-full h-fit mx-5 grid grid-cols-4 gap-4 ">
                        <div className="col-span-4 p-1 flex flex-col bg-gray-100">
                            <span className="mx-1 text-gray-600">Họ và tên</span>
                            <span className="px-3 py-1 text-lg">{detail && detail.name}</span>
                        </div>
                        <div className="col-span-2 p-1 flex flex-col bg-gray-100">
                            <span className="mx-1 text-gray-600">Giới tính</span>
                            <span className="px-3 py-1 text-lg">{textGander[`${detail && detail.gander}`]}</span>
                        </div>
                        <div className="col-span-2 p-1 flex flex-col bg-gray-100">
                            <span className="mx-1 text-gray-600">Hôn nhân</span>
                            <span className="px-3 py-1 text-lg">{textMarital[`${detail && detail.marital}`]}</span>
                        </div>
                        <div className="col-span-2 p-1 flex flex-col bg-gray-100">
                            <span className="mx-1 text-gray-600">Ngày sinh</span>
                            <span className="px-3 py-1 text-lg">{detail && detail.birthday}</span>
                        </div>
                        <div className="col-span-2 p-1 flex flex-col bg-gray-100">
                            <span className="mx-1 text-gray-600">Số điện thoại</span>
                            <span className="px-3 py-1 text-lg">{detail && detail.phone}</span>
                        </div>
                        <div className="col-span-4 p-1 flex flex-col bg-gray-100">
                            <span className="mx-1 text-gray-600">Email</span>
                            <span className="px-3 py-1 text-lg">{detail && detail.email}</span>
                        </div>
                        <div className="col-span-2 p-1 flex flex-col bg-gray-100">
                            <span className="mx-1 text-gray-600">Mã nhân viên</span>
                            <span className="px-3 py-1 text-lg">{detail && detail.id}</span>
                        </div>
                        <div className="col-span-2 p-1 flex flex-col bg-gray-100">
                            <span className="mx-1 text-gray-600">Thể loại</span>
                            <span className="px-3 py-1 text-lg">{textEmployeeType[`${detail && detail.employee_type}`]}</span>
                        </div>
                        <div className="col-span-2 p-1 flex flex-col bg-gray-100">
                            <span className="mx-1 text-gray-600">Ngày vào</span>
                            <span className="px-3 py-1 text-lg">{detail && detail.joindate}</span>
                        </div>
                        <div className="col-span-2 p-1 flex flex-col bg-gray-100">
                            <span className="mx-1 text-gray-600">Quản lý</span>
                            <span className="px-3 py-1 text-lg">{detail && detail.manager_name}</span>
                        </div>
                        <div className="col-span-2 p-1 flex flex-col bg-gray-100">
                            <span className="mx-1 text-gray-600">Bậc lương</span>
                            <span className="px-3 py-1 text-lg">{detail && detail.wage_rate}</span>
                        </div>
                        <div className="col-span-2 p-1 flex flex-col bg-gray-100">
                            <span className="mx-1 text-gray-600">Phòng ban</span>
                            <span className="px-3 py-1 text-lg">{detail && detail.department_name}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeDetail