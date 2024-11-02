import React from 'react';
import { useParams } from 'react-router-dom';

function SubCategory() {
  const { category, subCategory } = useParams();
  return <h2>{category} - {subCategory}</h2>;
}

<Route path="/shop/:category/:subCategory" component={SubCategory} />
