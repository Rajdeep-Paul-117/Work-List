import React from 'react';
import './App.css';
import Todoitem from './components/Todoitem';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Todoitem/>
    </div>
  );
}

export default App;
