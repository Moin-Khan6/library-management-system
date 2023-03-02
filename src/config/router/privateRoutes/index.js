import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'


const LoginPrivateRoutes = () => {

    const auth = useSelector(state => state.auth.auth)
    return(
        auth ? <Outlet/> :<Navigate to="/"/>
    )
}

export default LoginPrivateRoutes;


