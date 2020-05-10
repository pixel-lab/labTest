import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className=" ui container">
      <form action="">
        <div className="ui form">
        <div className="field">
          <label>Name</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Gift</label>
          <input type="text" />
        </div>
      </div>
      </form>
    </div>
  );
}

export default App;
