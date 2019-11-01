import React from 'react'
import {NavLink} from "react-router-dom";
import style from './Header.module.css'
import {connect} from "react-redux";
import {logout} from "../Redux/authReducer";

const Header = ({logout, isAuth}) => {
    return <div className={style.header}>
            <NavLink to='/'>Main</NavLink>
            <NavLink to='/posts'>Posts</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
        {isAuth && <span onClick={logout} className={style.logout}>Logout</span>}
        {!isAuth && <NavLink className={style.login} to={'/login'}>Login</NavLink>}
        </div>


}
const mapStateToProps =(state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {logout}) (Header)