import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import DashHome from './pages/DashHome';

function Routers() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <DashHome {...props} />} />
      </Switch>
    </Router>
  )
}

export default Routers;
