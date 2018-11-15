
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Routes from './configs/router.config'

ReactDOM.render(
    <Routes />, document.getElementById('root'),
)

if (module.hot) {
    module.hot.accept();
}