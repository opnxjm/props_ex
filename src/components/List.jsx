import React from 'react';
import Card from './Card';

function List({ users }) {
  return (
    <div>
      {users.map(user => (
        <Card key={user.id} users={user} />
      ))}
    </div>
  );
}

export default List;