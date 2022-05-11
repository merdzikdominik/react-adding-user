import React from 'react';
import UserForm from './UserForm';
import Card from '../Card/Card';
import UserList from '../UserList/UserList';

import './UserFormHolder.css';

const UserFormHolder = (props) => {

    const passUsersDataToArray = (usersObject) => {
        console.log(usersObject);
        props.onReceiveUsersData(usersObject);
    }

    return (
        <div>
            <Card className={props.className}>
                <UserForm
                    onAddToUsersThroughForm={passUsersDataToArray}
                />
                <UserList items={props.users}/>
            </Card>
        </div>
    );
}

export default UserFormHolder;