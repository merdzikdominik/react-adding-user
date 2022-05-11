import React from 'react';
import './UserDisplay.css';

const UserDisplay = (props) => {
    return (
        <div className="user-display__wrapper">
            <div className="user-display__single-user-wrapper">
                <div className="user-display__userName">
                    {props.userName}
                </div>
                <div className="user-display__userAge">
                    {props.userAge}
                </div>
            </div>
        </div>
    );
};

export default UserDisplay;