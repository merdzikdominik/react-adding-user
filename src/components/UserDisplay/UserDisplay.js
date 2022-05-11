import React from 'react';
import './UserDisplay.css';

const UserDisplay = (props) => {
    return (
        <div className="user-display__wrapper">
            <div className="user-display__single-user-wrapper">
                <div className="user-display__userName">
                    Username: <p>{props.userName}</p>
                </div>
                <div className="user-display__userAge">
                    Age: <p>{props.userAge}</p>
                </div>
            </div>
        </div>
    );
};

export default UserDisplay;