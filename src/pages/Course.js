import React from 'react';
import { useParams } from 'react-router-dom';

function Course() {
  const { courseId } = useParams();
  return <h2>Course ID: {courseId}</h2>;
}

<Route path="/courses/:courseId" component={Course} />
