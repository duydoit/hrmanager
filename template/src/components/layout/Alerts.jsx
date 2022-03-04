import { useEffect, Fragment } from 'react'
import { withAlert } from "react-alert"
import { useSelector } from 'react-redux'
import { useAlert } from 'react-alert'

function Alerts() {
  const alertNew = useSelector(state => state.alert)
  const alert = useAlert()
  useEffect(() => {
    if (alertNew.msg !== null) alert.show(alertNew.msg, { title: alertNew.title })
  }, [alertNew])

  return (
    <Fragment />
  )
}

export default withAlert()(Alerts);
