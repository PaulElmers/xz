import React from 'react';
import { useParams } from 'react-router-dom';

function Category() {
  const { category } = useParams();
  return <h2>Category: {category}</h2>;
}

<Route path="/shop/:category" component={Category} />
