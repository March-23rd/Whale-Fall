import React from 'react'
// import { Router, Route, IndexRoute, hashHistory/* , Redirect */ } from 'react-router'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default () => (
    // <BrowserRouter>
    //       <Route path="/login" component={Header} />
    //  </BrowserRouter>

    <HashRouter>
        <Switch>
            <Route path="/login" component={Header} />
            <Route path="/footer" component={Footer} />
            
        </Switch>
    </HashRouter>
     
)