import { Outlet } from 'react-router-dom'
import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { signOut } from '../../redux/actions/authActions'
import { useSelector, useDispatch } from 'react-redux'
import { useAlert } from 'react-alert'
function MainLayout() {
    const alert = useAlert()
    const currentUser = useSelector(state => state.auth.user)
    const dispath = useDispatch()
    const handleSignout = () => {
        alert.show(`Bạn có chắc chắn muốn đăng xuất khỏi hệ thống!`, {
            closeCopy: "Huỷ",
            actions: [
                {
                    copy: "Đồng ý",
                    onClick: () => dispath(signOut()),
                },
            ],
        });
    }

    return (
        <React.Fragment>
            <div className="relative">
                <Navbar currentUser={currentUser} signOut={handleSignout} />
                <Sidebar currentUser={currentUser} />
                <div className="flex">
                    <div className="w-[240px] flex-none"></div>
                    <div className="w-full">
                        <Outlet />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default MainLayout