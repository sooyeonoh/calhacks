import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import ProfileCreator from "./components/ProfileCreator";

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/ProfileCreator" component={ProfileCreator} />
      </Switch>
    </div>
  );
}

export default App;
