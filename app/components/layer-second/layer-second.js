import React, { Component } from 'react'
import './layer-second.less'

export default class LayerSecond extends Component {
    render() {
        return (
            <div className="service">
                <div className="service-container">
                    <div className="title">平台服务</div>
                    <div className="block">
                        <img className="logo" src="//ae01.alicdn.com/kf/HTB1kCh1QXXXXXcAXVXX760XFXXXm.png" />
                        <a className="name" href="/service/core/list">noah-log</a>
                        <div className="detail">日志服务是一个海量日志数据分析处理平台，支持以可视化的方式定义及部署日志分析任务，对日志数据进行采集、拆分、过滤、聚合及存储一系列操作，最终提供结果数据查询服务。</div>
                    </div>
                    <div className="block">
                        <img className="logo" src="//ae01.alicdn.com/kf/HTB18LQjRXXXXXaSXpXX760XFXXXF.png" />
                        <a className="name" href="/service/core/list">noah-unicorn</a>
                        <div className="detail">为现有的前后端资源（动静态资源）都统一承载在同一处的后端应用提供一整套完整的静态资源上CDN的解决方案，实现前后端应用资源的动静分离，目前覆盖NodeJS with Koa, Java with WebX, Java with SpringBoot等类型。</div>
                    </div>
                    <div className="block">
                        <img className="logo" src="//ae01.alicdn.com/kf/HTB1NoWySVXXXXbaXVXX760XFXXXg.png" />
                        <a className="name" href="/service/core/list">noah-env</a>
                        <div className="detail">为有差异化业务场景需要的应用，提供一个不同维度选择、获取及校验的统一解决方案。</div>
                    </div>
                </div>
            </div>
        )
    }
}
