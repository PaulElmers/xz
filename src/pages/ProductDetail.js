import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { productId } = useParams();
  return <h2>Product details for ID: {productId}</h2>;
}

<Route path="/product/:productId" component={ProductDetail} />
