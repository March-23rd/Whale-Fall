import React, { Component } from 'react'
import { findDomNode } from 'react-dom';
import './sider-spot.less'

export default class SiderSpot extends Component {

    spotClick(e) {
        this.props.spotClick(e.target.dataset.index)
    }

    render() {
        return (
            <div className="jump-container">
                {React.Children.map(this.props.children, (child, i) => {
                    return React.cloneElement(child, {
                        onClick: this.spotClick.bind(this),
                        'data-index': i
                      });
                })}
            </div>
        )
    }
}
