import React from 'react';
import { useParams } from 'react-router-dom';

function BlogSection() {
  const { section } = useParams();
  return <h2>Blog section: {section}</h2>;
}

<Route path="/blog/:section" component={BlogSection} />
