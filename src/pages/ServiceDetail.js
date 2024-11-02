import React from 'react';
import { useParams } from 'react-router-dom';

function ServiceDetail() {
  const { serviceId } = useParams();
  return <h2>Service details for ID: {serviceId}</h2>;
}

<Route path="/services/:serviceId" component={ServiceDetail} />
