// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/layouts/Header';
import Home from './components/pages/Home';
import Terms from './components/pages/Terms';
import NotFound from './components/pages/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <div>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/mention-legales" component={Terms} />
            <Route path="*" component={NotFound} />
        </Switch>
    </div>
  </Router>
);

export default Routes;



// WEBPACK FOOTER //
// ./src/routes.js
