import UserItem from 'components/UserItem/UserItem';
import React from 'react';
import { UserListProps } from './UserListProps';

function UserList({ users }: UserListProps) {
  return (
    <div className="users">
      {users.length === 0 && <p>No users</p>}

      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <UserItem user={user} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
