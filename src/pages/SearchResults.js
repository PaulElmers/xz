import React from 'react';
import { useParams } from 'react-router-dom';

function SearchResults() {
  const { searchTerm } = useParams();
  return <h2>Search Results for: {searchTerm}</h2>;
}

<Route path="/search/:searchTerm" component={SearchResults} />
