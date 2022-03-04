// import { useState } from 'react'
import { UilAngleLeft, UilAngleRight } from '@iconscout/react-unicons'


function Pagination({ amountPerPage, currentPage, totalPages, paginate, amountItem }) {
    const pageNumber = Math.ceil(totalPages / amountPerPage)
    const toItem = (currentPage - 1) * amountPerPage + 1
    const endItem = currentPage * amountPerPage
    return (
        <div className="flex item-content w-full justify-between">
            <div className="py-1.5 px-2 font-normal">
                Hiển thị kết quả từ {toItem} - {endItem > totalPages ? totalPages : endItem} trên tổng {totalPages} mục
            </div>
            <div className="flex">
                <ul className="flex divide-x divide-violet-400 border border-violet-400 items-center w-fit">
                    <li key="0">
                        <button disabled={currentPage <= 1} onClick={() => paginate(currentPage - 1)} className={`${currentPage <= 1 ? "text-gray-400 bg-gray-100" : "hover:bg-gray-200 text-violet-600"}  py-1.5 px-2  `}>
                            <UilAngleLeft />
                        </button>
                    </li>
                    <li key={pageNumber + 1}>
                        <button disabled={currentPage >= pageNumber} onClick={() => paginate(currentPage + 1)} className={`${currentPage >= pageNumber ? "text-gray-400 bg-gray-100" : "hover:bg-gray-200 text-violet-600"}  py-1.5 px-2  `}>
                            <UilAngleRight />
                        </button>
                    </li>
                </ul>
                <select onChange={(e) => amountItem(parseInt(e.target.value))} className="ml-3 border border-violet-400 py-1.5 px-2 bg-gray-50 font-medium text-violet-600 focus:outline-none">
                    <option value="10">10 / page </option>
                    <option value="15">15 / page</option>
                    <option value="25">25 / page</option>
                </select>
            </div>
        </div >
    )
}

export default Pagination