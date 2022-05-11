import React, { useState } from 'react';
import UserFormHolder from './components/UserForm/UserFormHolder';
import './App.css';

const INITIAL_USER_DATA = [
  {
    userName: 'Max',
    userAge: '31'
  }
];

const App = () => {

  const [usersArray, setUsersArray] = useState(INITIAL_USER_DATA)

  const userAdd = (userObject) => {
    setUsersArray((prevUsers => {
      return [userObject, ...prevUsers];
    }));
  }

  return (
    <div>
      <UserFormHolder 
        className="userFormHolder" 
        onReceiveUsersData={userAdd}
        users={usersArray}
      />
    </div>
  );
}

export default App;
