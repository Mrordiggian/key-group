import React from 'react'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {sendLogin} from "../Redux/authReducer";
import {Redirect} from "react-router-dom";


const Login = ({isAuth, sendLogin}) => {
    const submitLogin = (dataLogin) => {
        sendLogin(dataLogin)
    }
    return isAuth? <Redirect to={'/profile'}/> :
    <div className={'main'}>
        <ReduxLoginForm onSubmit={submitLogin}/>
    </div>
}
const mapStateToProps =(state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {sendLogin}) (Login)

const LoginForm = ({handleSubmit, error})=>{
    return <form onSubmit = {handleSubmit}>
        <div>Username</div>
        <Field validate={[]} name='username' type="text" placeholder={'username'} component={'input'}/>
        <div>Password</div>
        <Field validate={[]} name='password' type="password" placeholder={'password'} component={'input'}/>
        {error && <div>{error}</div>}
        <div><button>Login</button></div>
    </form>
}

const ReduxLoginForm = reduxForm({form: 'login'}) (LoginForm)
