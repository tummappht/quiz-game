import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import { connect, useSelector } from 'react-redux'
// import maps from 'lodash/map'

import Home from 'pages/Home'
import Question from 'pages/Question'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/question/:id" component={Question} />
        <Route exact path="/summary" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
