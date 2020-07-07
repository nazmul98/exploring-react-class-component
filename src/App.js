import React from 'react';
import './App.css';
import Timer from './Component/Timer/Timer';
import Event from './Component/Event/Event';
import UncontrolledForm from './Component/UncontrolledForm/UncontrolledForm';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Form from './Component/Form/Form';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <div>
              <Switch>
                <Route path="/form">
                  <Form />
                </Route>
                <Route path="/uncform">
                  <UncontrolledForm />
                </Route>
                <Route path="/">
                  <Timer />
                  <Event />
                </Route>
              </Switch>
            </div>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
