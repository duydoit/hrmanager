import RouteRoot from './router/RouterRoot'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadUser } from "./redux/actions/authActions";
import { BrowserRouter } from "react-router-dom";
import Alerts from './components/layout/Alerts'
function App() {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth.user)
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch])

  return (
    <BrowserRouter>
      <Alerts />
      <RouteRoot auth={auth} />
    </BrowserRouter>
  );
}

export default App;
