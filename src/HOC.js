import {connect} from "react-redux";
import React from "react";
import {Redirect} from "react-router-dom";

export const withAuthRedirect = (Component) => {
    const newComponent = (props) => {
        if(!props.isAuth) return <Redirect to={'/login'}/>
        else return <Component {...props}/>
    }
    let mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth
    })
    return connect(mapStateToProps)(newComponent)
}