import React from 'react';
import { InputBar, List } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>오늘의 할 일</h1>
      <InputBar />
      <List />
    </div>
  );
};

export default App;
