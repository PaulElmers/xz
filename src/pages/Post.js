import React from 'react';
import { useParams } from 'react-router-dom';

function Post() {
  const { postId } = useParams();
  return <h2>Blog post ID: {postId}</h2>;
}

<Route path="/blog/:postId" component={Post} />
