import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
