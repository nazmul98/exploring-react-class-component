import React from 'react';
import './App.css';
import Timer from './Component/Timer/Timer';
import Event from './Component/Event/Event';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Timer />
            <Event />
        </header>
      </div>
    );
  }
}

export default App;
