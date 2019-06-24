import React from 'react';

const User = ({ login, avatar_url }) => {
    return (
        <ul>
            { login }
            <img src={avatar_url} style={{maxWidth: '100px'}}></img>
        </ul>
    )
}

export default User;