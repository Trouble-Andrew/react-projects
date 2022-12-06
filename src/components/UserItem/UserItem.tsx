import React from 'react';
import { UserItemProps } from './UserItemProps';

function UserItem({ user }: UserItemProps) {
  return (
    <div>
      <p> {`${user.username} (${user.age} years old)`}</p>
    </div>
  );
}

export default UserItem;
