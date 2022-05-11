import React from 'react';
import UserDisplay from '../UserDisplay/UserDisplay';
import './UserList.css';

const UserList = (props) => {
    return (
        <ul>
            {props.items.map(user =>
                <UserDisplay
                    key={Math.random()}
                    userName={user.userName}
                    userAge={user.userAge}
                />)}
        </ul>
    )
};

export default UserList;