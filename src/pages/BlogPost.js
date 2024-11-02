import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { category, postId } = useParams();
  return <h2>Category: {category} - Post ID: {postId}</h2>;
}
<Route path="/blog/:category/:postId" component={BlogPost} />
