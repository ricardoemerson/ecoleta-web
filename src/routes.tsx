import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CreatePoint from './pages/CreatePoint';
import Home from './pages/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route component={ Home } path="/" exact />
    <Route component={ CreatePoint } path="/create-point" />
  </Switch>
);

export default Routes;
