import React from 'react';
import { useParams } from 'react-router-dom';

function OrderDetail() {
  const { orderId } = useParams();
  return <h2>Order details for order ID: {orderId}</h2>;
}
<Route path="/order/:orderId" component={OrderDetail} />
