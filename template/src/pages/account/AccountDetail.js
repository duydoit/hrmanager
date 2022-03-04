import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { detailAccount, deleteAccount } from '../../redux/actions/accountActions'
import { useAlert } from 'react-alert'

function AccountDetail() {
    const dispatch = useDispatch()
    const { accId } = useParams();
    const detail = useSelector(state => state.accounts.detail)
    const navigate = useNavigate()
    const alert = useAlert()
    useEffect(() => {
        dispatch(detailAccount(accId))
    }, [])

    const handlesEditItem = () => {
        navigate(`/account/${accId}/edit`)
    }
    const handlesDeleteItem = () => {
        alert.show(`Bạn có muốn xoá phòng ban này !`, {
            title: "Xoá phòng ban",
            closeCopy: "Huỷ",
            actions: [
                {
                    copy: "Đồng ý",
                    onClick: () => dispatch(deleteAccount(accId)),
                },
            ],
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
                </div>
            </div>
            {/* content */}
            <div className="bg-white mt-5 w-full container mx-auto rounded shadow-md" id="content-department-detail">
                {/* "header name" */}
                <div className=" border-b px-5 py-3 border-gray-300">
                    <span className="font-medium text-xl text-violet-600">Chi tiết tài khoản</span>
                </div>
                <div className="grid grid-cols-4 gap-4 border-b border-gray-300 pb-5">
                    <div className="col-span-4 bg-violet-600 text-xl text-white px-3 py-2 flex justify-center items-center font-medium">
                        <span className=" font-normal mr-2">Tên tài khoản:</span>
                        <span>{detail && detail.username}</span>
                    </div>
                    <div className="px-5 py-2 col-span-2">
                        <span className=" font-normal mr-2">Email:</span>
                        <span>{detail && detail.email}</span>
                    </div>
                    <div className="px-5 py-2 col-span-2">
                        <span className=" font-normal mr-2">Quyền :</span>
                        <span>{detail && detail.role}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountDetail