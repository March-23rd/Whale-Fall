import React from 'react'
// import { Router, Route, IndexRoute, hashHistory/* , Redirect */ } from 'react-router'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

import LayerFirst from '../components/LayerFirst/LayerFirst'

import './initstyle.less'

export default () => (
    // <BrowserRouter>
    //       <Route path="/login" component={Header} />
    //  </BrowserRouter>

    <HashRouter>
        <Switch>
            <Route path="/home" component={LayerFirst} /> 
            
        </Switch>
    </HashRouter>
     
)