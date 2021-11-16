import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { message, Modal } from "antd";
import { ExclamationCircleOutlined } from '@ant-design/icons';

import LinkButton from '../link-button/link-button';
import menuList from '../../config/menuConfig'
import { formateDate } from "../../utils/dateUtils";
import { reqWeather } from '../../api'
import memoryUtils from "../../utils/memoryUtils";
import storageUtils from "../../utils/storageUtils";

import "./index.less";

class Header extends Component {
    state = {
        currentTime: formateDate(Date.now()), // 当前时间字符串
        dayPictureUrl: "", // 天气图片url
        weather: "", // 天气的文本
    };
    getTime = () => {
        this.intervalId = setInterval(() => {
            const currentTime = formateDate(Date.now())
            this.setState({ currentTime })
        }, 1000)
    }

    getWeather = async () => {
        console.log("获取天气");
        // const result = await reqWeather("武汉")
        // console.log(result);
        // try {
        //     const { weather_icon, weather } = result.data[0]
        //     this.setState({ dayPictureUrl: weather_icon, weather })
        // } catch (error) {
        //     message.error("天气获取失败", error.message)
        // }
    }


    // 动态显示标题，------------------------标题的文本会挪动---------------------------
    getTitle = () => {
        // 得到当前请求路径
        const path = this.props.location.pathname
        let title
        menuList.forEach(item => {
            // 如果当前item对象的key于path一样，item的title就是需要显示的title
            if (item.key === path) {
                title = item.title
            } else if (item.children) {
                // 在所有子item中查找匹配的
                const cItem = item.children.find(cItem => cItem.key === path)
                // 如果有值说明有匹配的
                if (cItem) title = cItem.title
            }
        })
        return title
    }

    // 退出登录
    logout = () => {
        // 显示确认框
        Modal.confirm({
            content: '确定退出吗?',
            icon: <ExclamationCircleOutlined />,
            onOk:() => {
                console.log('OK');
                // 删除保存的user数据
                storageUtils.removeUser()
                memoryUtils.user = {}

                this.props.history.replace("/login")
            }
        });
    }


    // 在第一次render()之后执行一次，一般执行异步操作：发ajax请求/启动定时器
    componentDidMount() {
        this.getTime()
        this.getWeather()
    }

    // 在当前组件卸载之前调用
    componentWillUnmount(){
        // 清除定时器
        clearInterval(this.intervalId)
    }

    render() {
        const { currentTime, dayPictureUrl, weather } = this.state;
        const username = memoryUtils.user.username;

        // 得到当前需要现实的title
        const title = this.getTitle()
        return (
            <div className="header">
                <div className="header-top">
                    <span>欢迎，{username}</span>
                    <LinkButton href="#!" onClick={this.logout}>退出</LinkButton>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">{title}</div>
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
export default withRouter(Header)
