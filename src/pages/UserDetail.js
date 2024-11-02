import React from 'react';
import { useParams } from 'react-router-dom';

function UserDetail() {
  const { userId } = useParams();
  return <h2>Details for user with ID: {userId}</h2>;
}

<Route path="/user/:userId" component={UserDetail} />
