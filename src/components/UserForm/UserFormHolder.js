import React from 'react';
import UserForm from './UserForm';
import Card from '../Card/Card';
import UserDisplay from '../UserDisplay/UserDisplay';
// import NoDataProvided from '../ErrorMessages/NoDataProvided';

import './UserFormHolder.css';

const UserFormHolder = (props) => {

    // const [isDataProvided, setIsDataProvided] = useState(true);


    const passUsersDataToArray = (usersObject) => {
        console.log(usersObject);
        props.onReceiveUsersData(usersObject);
    }

    // const manageProvidedData = (userData) => {
    //     setIsDataProvided(userData);
    // }

    return (
        <div>
            <Card className={props.className}>
                <UserForm
                    onAddToUsersThroughForm={passUsersDataToArray}
                    // isUserDataFilled={manageProvidedData}
                    // isButtonClicked={manageButtonClick}
                />
                {props.users.map(user =>
                    <UserDisplay
                        key={Math.random()}
                        userName={user.userName}
                        userAge={user.userAge}
                    />)
                }
            </Card>
            {/* {isDataProvided === true ? '' : <NoDataProvided />} */}
        </div>
    );
}

export default UserFormHolder;