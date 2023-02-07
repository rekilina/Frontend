import React, { useState } from 'react';
import AddUser from './components/Users/AddUser/AddUser';
import UserList from './components/Users/UserList/UserList';
import ErrorModal from './components/UI/ErrorModal';

const globUsers = [
  {
    name: 'Ivan',
    age: 26,
    id: 1
  },
  {
    name: 'Nikita',
    age: 27,
    id: 2
  },
  {
    name: 'Pasha',
    age: 25,
    id: 3
  }
]

function App() {

  const [usersList, setUsersList] = useState(globUsers);

  const updateUserList = (userName, userAge) => {
    setUsersList(prevUserList => {
      return [
        {
          name: userName,
          age: userAge,
          id: Math.random().toString
        },
        ...prevUserList]
    });
  }

  return (
    <div>
      <AddUser onAddUser={updateUserList} />
      <UserList users={usersList}></UserList>
      {/* <ErrorModal title="test modal window" message="test modal window text" /> */}
    </div>
  );
}

export default App;
