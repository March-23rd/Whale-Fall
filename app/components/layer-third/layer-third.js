import React, { Component } from 'react'
import './layer-third.less'

export default class LayerThird extends Component {
    render() {
        return (
            <div className="about">
                <div className="container-block">
                    <div className="about-container">
                        <div className="block">
                            <div className="role-content">
                                <div className="manager-img">
                                </div>
                                <div className="role-title">服务贡献者</div>
                                <div className="sub-role-title">Manager</div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="content">
                                <p>Noah非常欢迎大家提交你们认为牛B的服务，贡献到平台上</p>
                                <ul>
                                    <li>服务贡献到平台后， 你将成为<strong>服务管理员</strong></li>
                                    <li>当用户接入你的服务后的， <strong>只有你</strong>有权限对接入服务的用户做相关操作</li>
                                    <li>当然你也可以从平台内删除你的服务</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="about-container">
                        <div className="block">
                            <div className="role-content">
                                <div className="user-img">
                                </div>
                                <div className="role-title">服务使用者</div>
                                <div className="sub-role-title">User</div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="content">
                                <p>Noah平台的所有服务以<strong>应用</strong>为基础</p>
                                <ul>
                                    <li>在接入服务前，请确保在Noah中注册了应用， 并且你是该应用的owner</li>
                                    <li>如果没有应用， 可以让已在Noah注册的Owener将你添加为<strong>应用成员</strong></li>
                                    <li>接入权限审批经该<strong>服务管理员</strong>审批通过后，即可访问相关服务</li>
                                    <li>如果之后要部署SDK，或者进行相关的API调用，具体详见各个子服务系统</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
