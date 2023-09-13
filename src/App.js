import './App.css';
import React from 'react';
import DividePage from './components/Dividepage';

function App() {
  return (
    <div className="article-container">
      <div className="article">
        <h3>title1</h3>
        <p>article1</p>
      </div>
      <div className="article">
        <h3>title2</h3>
        <p>article2</p>
      </div>
    </div>
  );
}

export default App;
