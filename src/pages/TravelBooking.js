import React from 'react';
import { useParams } from 'react-router-dom';

function TravelBooking() {
  const { tripId } = useParams();
  return <h2>Booking details for trip ID: {tripId}</h2>;
}

<Route path="/travel/:tripId" component={TravelBooking} />
