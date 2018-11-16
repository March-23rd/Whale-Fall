import React, { Component } from 'react'
import './home.less'
import LayerFirst from '../../components/layer-first/layer-first'
import LayerSecond from '../../components/layer-second/layer-second'
import LayerThird from '../../components/layer-third/layer-third'
import SiderSpot from '../../components/sider-spot/sider-spot'
import reactDom from 'react-dom';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 1,
        }
    }
    // moveWheel1 = true;
    // moveWheel2 = false;
    // wheelClock;
    // direction;
    // count = 0;
    // stopWheelContainer(self) {
    //     return function () {
    //         if (self.moveWheel2 == true) {
    //             self.moveWheel2 = false;
    //             self.moveWheel1 = true;
    //             //这里写停止时调用的方法 
    //             if (self.count < 30) return;
    //             self.count = 0;
    //             if (self.direction === 'up') {
    //                 self.setState({ 'position': self.state.position === 1 ? 1 : self.state.position - 1 })
    //             } else {
    //                 self.setState({ 'position': self.state.position === 3 ? 3 : self.state.position + 1 })
    //             }
    //         }
    //     }
    // }

    // handleScroll(e) {
    //     this.direction = e.nativeEvent.deltaY <= 0 ? 'up' : 'down';
    //     this.count++;
    //     if (this.moveWheel1 == true) {
    //         this.moveWheel1 = false;
    //         this.moveWheel2 = true;
    //         //这里写开始滚动时调用的方法 
    //         this.wheelClock = setTimeout(this.stopWheelContainer(this), 200);
    //     }
    //     else {
    //         clearTimeout(this.wheelClock);
    //         this.wheelClock = setTimeout(this.stopWheelContainer(this), 150);
    //     }
    // }

    handleSpotClick(position) {
        window.scrollTo(0, document.body.clientHeight * position)
    }

    render() {
        return (
            <div className="page-control">
                <LayerFirst />
                <LayerSecond />
                <LayerThird />
                <SiderSpot spotClick={this.handleSpotClick}>
                    <a></a>
                    <a></a>
                    <a></a>
                </SiderSpot>
            </div>
        )
    }
}
