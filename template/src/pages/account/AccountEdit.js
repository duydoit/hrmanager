import AccountForm from './AccountForm'
import { useDispatch, useSelector } from 'react-redux'
import { detailAccount, editAccount } from '../../redux/actions/accountActions'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
function AccountEdit() {
    const { accId } = useParams()
    console.log(accId)
    const detail = useSelector(state => state.accounts.detail)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(detailAccount(accId))
    }, [])
    const title = 'Chỉnh sửa tài khoản'
    const handlerSubmit = (data) => {
        dispatch(editAccount(accId, data))
    }
    return (
        <AccountForm title={title} detail={detail} addSubmit={handlerSubmit} />
    )
}

export default AccountEdit