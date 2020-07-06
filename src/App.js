import React from 'react';
import './App.css';
import Timer from './Component/Timer/Timer'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Timer />
        </header>
      </div>
    );
  }
}

export default App;
