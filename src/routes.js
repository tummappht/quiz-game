import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from 'pages/Home'
import Difficulty from 'pages/Difficulty'
import Question from 'pages/Question'
import Summary from 'pages/Summary'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/difficulty" component={Difficulty} />
        <Route exact path="/question" component={Question} />
        <Route exact path="/summary" component={Summary} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
