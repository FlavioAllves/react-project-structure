import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Quiz from '../pages/Quiz'

// import Logout from '../pages/logout'
// <Route exact path="/login" component={Login} />
// <Route exact path="/logout" component={Logout} />

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/quiz" component={Quiz} />
  </Switch>
)

export default Routes
