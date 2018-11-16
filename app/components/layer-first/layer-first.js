import React, { Component } from 'react'
import './layer-first.less'

export default class LayerFirst extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 1,
        }
    }

    render() {
        return (
            <div className="banner">
                <div className="banner-container">
                    <div className="banner-content">
                        <p className="title">Noah BaaS</p>
                        <p>全方位一体化的后端服务平台。</p>
                        <p>应用开发的解决方案，专注于为应用开发者提供一流的工具、平台和服务。</p>
                        <div>
                            <a className="btn go" href="/apps/list">立刻使用</a>
                        </div>
                    </div>
                    <div className="banner-img"></div>
                </div>
            </div>
        )
    }
}
