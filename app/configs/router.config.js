import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/home/home'

import './initstyle.less'

export default () => (
    <HashRouter>
        <Switch>
            <Route path="/home" component={Home} /> 
        </Switch>
    </HashRouter>
     
)