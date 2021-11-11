import React, { Component } from "react";
import { formateDate } from "../../utils/dateUtils";
import {reqWeather} from '../../api'
import memoryUtils from "../../utils/memoryUtils";
import "./index.less";

export default class Header extends Component {
    state = {
        currentTime: formateDate(Date.now()), // 当前时间字符串
        dayPictureUrl: "", // 天气图片url
        weather: "", // 天气的文本
    };
    getTime = () => {
        setInterval(() => {
            const currentTime = formateDate(Date.now())
            this.setState({currentTime})
        }, 1000)
    }

    // getWeather = async () => {
    //     const result = await reqWeather("武汉")
    //     console.log(result);
    // }


    // 在第一次render()之后执行一次，一般执行异步操作：发ajax请求/启动定时器
    componentDidMount(){
        this.getTime()
        // this.getWeather()
    }

    render() {
        const { currentTime, dayPictureUrl, weather } = this.state;
        const username = memoryUtils.user.username;
        return (
            <div className="header">
                <div className="header-top">
                    <span>欢迎，{username}</span>
                    <a href="#!">退出</a>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">首页</div>
                    <div className="header-bottom-right">
                        <span>{currentTime}</span>
                        <img src={dayPictureUrl} alt="weather" />
                        <span>{weather}</span>
                    </div>
                </div>
            </div>
        );
    }
}
