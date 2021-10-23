import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import ProfileCreator from "./components/ProfileCreator";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/ProfileCreator" component={ProfileCreator} />
          <Route path="/ProfilePage" component={ProfilePage}/>
      </Switch>
    </div>
  );
}

export default App;
