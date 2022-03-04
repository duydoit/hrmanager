import React from 'react'
import Image404 from '../../assets/img/404.png'
function NotFound() {
    return (
        <div className="text-center">
            <div className="bg-white h-96 w-[620px] text-center my-32 py-10 shadow inline-block">
                <img className="my-9 inline-block w-40 h-40 object-cover object-center" src={Image404} alt="404" />
                <div>Đây không phải là trang web bạn đang tìm kiếm.</div>
            </div>
        </div>
    )
}

export default NotFound