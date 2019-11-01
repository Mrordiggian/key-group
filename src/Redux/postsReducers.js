import {AppAPI} from "../API/api";

const SET_POSTS = "SET_POSTS"
const SET_NEW_PART_POSTS = "SET_NEW_PART_POSTS"

let initialState = {
    posts: null,
    pertOfPosts: null,
    counter: null
}

const postsReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.posts,
                pertOfPosts: action.posts.slice(0, 19),
                counter: 9
            }
        case SET_NEW_PART_POSTS:
            if(state.counter === state.posts.length - 1 || state.counter > state.posts.length - 1) return state
            return {
                ...state,
                counter: (state.counter + 10),
                pertOfPosts: state.posts.slice(0, state.counter)
            }
        default:
            return state
    }

}

const getPostSuccess = (posts) => ({type: SET_POSTS, posts})
export const getNewPartPosts = () => ({type: SET_NEW_PART_POSTS})
export const getPosts = () => async (dispatch) => {

    let response = await AppAPI.getPosts()

    dispatch(getPostSuccess(response.data))

}
export default postsReducers