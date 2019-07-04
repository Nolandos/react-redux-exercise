import React from 'react';
import './User.scss';

const User = ({ login, avatar_url }) => {
    return (
        <ul className="user-record">
            { login }
            <img src={avatar_url} style={{maxWidth: '100px'}}></img>
        </ul>
    )
}

export default User;