import React from 'react';
import styled from 'styled-components';
import ToDoListContainer from './containers/ToDoListContainer';
import './App.css';

const Title = styled.h1`
  text-align: center;
  font-weight: bold;
`;

const App = () => {
  return (
    <div className="App">
      <Title>To Do</Title>
      <ToDoListContainer />
    </div>
  );
};

export default App;
