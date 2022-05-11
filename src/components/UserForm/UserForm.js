import React, { useState } from 'react';
import IncorrectAge from '../ErrorMessages/IncorrectAge';
import NoDataProvided from '../ErrorMessages/NoDataProvided';

import './UserForm.css';

const UserForm = (props) => {
    const [userNameState, setUserNameState] = useState('');
    const [userAgeState, setUserAgeState] = useState('');
    const [areAllFieldsBlank, setAreAllFieldsBlank] = useState(false);
    const [isIncorrectAge, setIsIncorrectAge] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();

        const prepareTheUserObject = () => {
            const usersData = {
                userName: userNameState,
                userAge: userAgeState
            }

            props.onAddToUsersThroughForm(usersData);
        }

        // if (userNameState.length === 0 && userAgeState <= 0) props.isUserDataFilled(false);
        // else props.isUserDataFilled(true);

        // if (userNameState.length === 0) props.isUserNameFilled(false);
        // else props.isUserNameFilled(true);

        // if (userAgeState <= 0) props.isUserAgeFilled(false);
        // else props.isUserAgeFilled(true);

        if (userNameState.length === 0 && userAgeState == 0) setAreAllFieldsBlank(true);
        else {
            setAreAllFieldsBlank(false);
            prepareTheUserObject();
        }

        // if (userAgeState < 0) {
        //     setIsIncorrectAge(true);
        // } else {
        //     setIsIncorrectAge(false);
        //     // prepareTheUserObject();
        // }

        // if (userAgeState < 0) setIsError(true);

        // const usersData = {
        //     userName: userNameState,
        //     userAge: userAgeState
        // }

        // props.onAddToUsersThroughForm(usersData);

        setUserNameState('');
        setUserAgeState('');
        
    }

    const userNameHandler = (event) => {
        const enteredUserName = event.target.value.toString();
        setUserNameState(enteredUserName);
    }

    const userAgeHandler = (event) => {
        const enteredUserAge = event.target.value;
        setUserAgeState(enteredUserAge);
    }

    const manageButtonClickEmptyFields = (click) => {
        setAreAllFieldsBlank(!click);
    }

    const manageButtonClickIncorrectAge = (click) => {
        setIsIncorrectAge(!click);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="userForm">
                    <label>
                        UserName
                    </label>
                    <input type="text" value={userNameState} onChange={userNameHandler} />
                    <label>
                        Age (Years)
                    </label>
                    <input type="number" value={userAgeState} onChange={userAgeHandler} />
                    <button type="submit">Add User</button>
                </div>
            </form>

            {areAllFieldsBlank === true ? <NoDataProvided isButtonClicked={manageButtonClickEmptyFields}/> : ''}
            {isIncorrectAge === true ? <IncorrectAge isButtonClicked={manageButtonClickIncorrectAge}/> : ''}
        </div>
    )
}

export default UserForm;