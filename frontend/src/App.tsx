import React from 'react';
import Header from './Header';
import './App.css';
import BowlList from './Bowl/BowlList';

function App() {
  return (
    <div className="App">
      <Header title="See all the pertinent members of the bowlerball baller boyz league:" />
      <BowlList />
    </div>
  );
}

export default App;
