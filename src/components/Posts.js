import React, {useEffect} from 'react'
import {getNewPartPosts, getPosts} from "../Redux/postsReducers";
import {connect} from "react-redux";


const Posts = ({pertOfPosts, getPosts, getNewPartPosts}) => {
    useEffect(
        () => {
            getPosts()
        }, []
    )

    function populate() {
            let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
            if (windowRelativeBottom < document.documentElement.clientHeight + 100) {getNewPartPosts()};
    }
    window.addEventListener('scroll', populate)
    return <div className={'posts'}>
        {pertOfPosts && pertOfPosts.map(p => <Post key={p.id} title={p.title} body={p.body}/>)}
    </div>
}
const mapStateToProps = (state) => ({
    pertOfPosts: state.posts.pertOfPosts
})

export default connect(mapStateToProps, {getPosts, getNewPartPosts})(Posts)

const Post = ({title, body}) => {
    return <div className={'post'}>
        <div className={'post_title'}>{title}</div>
        <div className={'post_body'}>{body}</div>
    </div>
}