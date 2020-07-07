import React from 'react';
import './App.css';
// Connect child Component
import Timer from './Component/Timer/Timer';
import Event from './Component/Event/Event';
import ReduxConcept from "./Component/ReduxConcept/ReduxConcept";
import UncontrolledForm from './Component/UncontrolledForm/UncontrolledForm';
import ControlledForm from './Component/Controlled/Controlled';
// for connecting redux
import { Provider } from 'react-redux';
import store from "./store";
// react router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Form from './Component/Form/Form';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
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
                  <Route path="/controlled">
                    <ControlledForm />
                  </Route>
                  <Route path="/simpleredux">
                    <ReduxConcept />
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
      </Provider>
    );
  }
}

export default App;
