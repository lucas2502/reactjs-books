import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Store from './pages/Store'

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/store" component={Store} />
        </Switch>
    )
}

export default Routes;