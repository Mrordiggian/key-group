import * as axios from 'axios'

export const AppAPI = {
    getPosts () {
        return axios.get('https://jsonplaceholder.typicode.com/posts')
    }
}