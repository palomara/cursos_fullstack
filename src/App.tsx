import React from 'react';
import { Container } from '@material-ui/core';

import './App.css';

import useCourse from './useCourse';
import CourseList, { CourseListItem } from './components/CourseList';

function App() {
  const { items } = useCourse();

  return (
    <div className="App">
      <Container maxWidth="lg">
        <CourseList>
          {items.map(course => <CourseListItem {...course} />)}
        </CourseList>
      </Container>
    </div>
  );
}

export default App;
