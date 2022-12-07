import React from 'react';
import styles from './UsersList.module.scss';
import { UsersListProps } from './UsersListProps';

import Card from 'components/Card/Card';

function UsersList({ users }: UsersListProps) {
  return (
    <Card className={styles.users}>
      {users.length === 0 && <p>There is no users</p>}
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} {user.age} years old
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}

export default UsersList;
