import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import Recpies from './Recpies'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/food" component={Recpies} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
