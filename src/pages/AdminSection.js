import React from 'react';
import { useParams } from 'react-router-dom';

function AdminSection() {
  const { section } = useParams();
  return <h2>Admin section: {section}</h2>;
}

<Route path="/admin/:section" component={AdminSection} />
