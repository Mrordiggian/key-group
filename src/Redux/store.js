import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./authReducer";
import postsReducers from "./postsReducers";
import ThunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
const reducers = combineReducers({
    auth: authReducer,
    posts: postsReducers,
    form: formReducer
})
const store = createStore(reducers, applyMiddleware(ThunkMiddleware))
export default store