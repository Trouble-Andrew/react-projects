import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import AddUser from 'components/AddUser/AddUser';
import UsersList from 'components/UsersList/UsersList';
import { User } from 'interfaces';

function App() {
  const [users, setUsers] = useState<User[]>([]);

  function addUserHandler(userName: string, userAge: number) {
    setUsers((prevUsers) => {
      return [...prevUsers, { name: userName, age: userAge, id: nanoid() }];
    });
  }

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </>
  );
}

export default App;
