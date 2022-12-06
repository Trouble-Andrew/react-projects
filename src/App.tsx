import Form from 'components/Form/Form';
import UserList from 'components/UserList/UserList';
import { User } from 'interfaces';
import React from 'react';

function App() {
  const [users, setUsers] = React.useState<User[]>([]);

  function submitFormHandler(userData: User) {
    console.log(userData);
    setUsers([...users, userData]);
  }

  return (
    <>
      <Form onSubmitForm={submitFormHandler} />
      <UserList users={users} />
    </>
  );
}

export default App;
