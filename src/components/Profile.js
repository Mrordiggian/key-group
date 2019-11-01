import React from 'react'
import {compose} from "redux";
import {withAuthRedirect} from "../HOC";


const Profile = () => {
    return <div className={'profile'}>
        <h1>Profile</h1>
    </div>
}

export default compose(withAuthRedirect)(Profile)