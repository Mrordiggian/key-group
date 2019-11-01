import {stopSubmit} from "redux-form";

const SEND_LOGIN = 'SEND_LOGIN'
const LOGOUT = 'LOGOUT'
let initialState = {
    isAuth: localStorage.getItem('username')
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_LOGIN :
                localStorage.setItem('username', 'Admin')
                localStorage.setItem('password', '123456')
                return {
                    ...state,
                    isAuth: true
                }

        case LOGOUT :
            localStorage.removeItem('username')
            return {
                ...state,
                isAuth: false
            }

        default:
            return state
    }

}
export const sendLoginSuccess= (dataLogin) => ({type: SEND_LOGIN, dataLogin})

export const sendLogin = (dataLogin) => (dispatch)=> {
    if (dataLogin.username === 'Admin' && dataLogin.password === '123456') {
        dispatch (sendLoginSuccess(dataLogin))
    }
    else dispatch(stopSubmit('login', {_error: 'Имя пользователя или пароль введены не верно '}))
}


export const logout = () => ({type: LOGOUT})
export default authReducer