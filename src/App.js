import React from 'react';
import { InputBar, List } from './components';
import styled from 'styled-components';
import './App.css';

const Title = styled.h1`
  text-align: center;
  font-weight: bold;
`;

const App = () => {
  return (
    <div className="App">
      <Title>To Do</Title>
      <InputBar />
      <List />
    </div>
  );
};

export default App;
