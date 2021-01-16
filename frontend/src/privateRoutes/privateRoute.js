import React from 'react'
import {  useSelector } from 'react-redux'
import {Route,Redirect} from 'react-router-dom'


const PrivateRoute = ({component:Component,...rest}) => {
    const userLogin = useSelector((state) => state.userLogin)

    const { userInfo } = userLogin

    return (
    <Route {...rest} component={(props)=>(userInfo ? (<Component {...props}/>): (<Redirect to='/login'/>) )}/>
    )
}

export default PrivateRoute