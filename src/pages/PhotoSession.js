import React from 'react';
import { useParams } from 'react-router-dom';

function PhotoSession() {
  const { sessionId } = useParams();
  return <h2>Photo session ID: {sessionId}</h2>;
}

<Route path="/portfolio/:sessionId" component={PhotoSession} />
