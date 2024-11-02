import React from 'react';
import { useParams } from 'react-router-dom';

function Reviews() {
  const { category } = useParams();
  return <h2>Reviews for category: {category}</h2>;
}

<Route path="/reviews/:category" component={Reviews} />
