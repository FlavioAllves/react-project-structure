import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
// import Login from '../pages/login'
// import Logout from '../pages/logout'
// <Route exact path="/login" component={Login} />
// <Route exact path="/logout" component={Logout} />

const Routes = () => (
  <Switch>
    <Route component={Home} />
  </Switch>
)

export default Routes
