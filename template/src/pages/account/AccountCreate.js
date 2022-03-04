import React from 'react'
import AccountForm from './AccountForm'
import { useDispatch } from 'react-redux'
import { addAccount } from '../../redux/actions/accountActions'
function AccountCreate() {
    const dispatch = useDispatch()
    const title = 'Tạo mới tài khoản'
    const handlerSubmit = (data) => {
        dispatch(addAccount(data))
    }
    return (
        <AccountForm title={title} addSubmit={handlerSubmit} />
    )
}

export default AccountCreate
