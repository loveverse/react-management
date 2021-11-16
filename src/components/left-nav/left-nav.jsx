import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './index.less'
import logo from '../../assets/images/avator.jpg'

import { Menu } from 'antd';
// import {
//     AppstoreOutlined,
//     MenuUnfoldOutlined,
//     MenuFoldOutlined,
//     PieChartOutlined,
//     DesktopOutlined,
//     ContainerOutlined,
//     MailOutlined,
// } from '@ant-design/icons';
import menuList from '../../config/menuConfig'

const { SubMenu } = Menu;




class LeftNav extends Component {
    state = {
        menuList: []
    }
    getMenuNodes = (menuList) => {
        // 得到当前的请求路径
        const path = this.props.location.pathname
        return menuList.reduce((pre, item) => {
            // 向pre添加<Menu.Item>
            if (!item.children) {
                pre.push((
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.key}>{item.title}</Link>
                    </Menu.Item>
                ))
            } else {
                // 查找一个与当前请求路径匹配的子Item
                const cItem = item.children.find(cItem => cItem.key === path)
                // 如果存在，说明当前item的子列表需要打开
                if (cItem) {
                    this.openKey = item.key
                }

                pre.push((
                    <SubMenu key={item.key} icon={item.icon} title={item.title}>
                        {
                            this.getMenuNodes(item.children)
                        }
                    </SubMenu>
                ))
            }
            return pre

        }, [])
    }

    /* 
        在第一次render()之前执行一次
        为第一个render()准备数据(同步的)
    */
    /* constructor(){
        super()  
        this.menuNodes = this.getMenuNodes(menuList)
    } */

    UNSAFE_componentWillMount(){
        this.menuNodes = this.getMenuNodes(menuList)
    }


    render() {
        // 得到当前的请求路径
        const path = this.props.location.pathname
        // console.log(this.props);
        // 得到需要打开菜单项的key
        const openKey = this.openKey

        return (
            <div className="left-nav">
                <Link to="/" className="left-nav-header">
                    <img src={logo} alt="logo" />
                    <h1>后台界面</h1>
                </Link>
                <div style={{ width: 200 }}>
                    <Menu
                        defaultSelectedKeys={[path]}
                        defaultOpenKeys={[openKey]}
                        mode="inline"
                        theme="dark"
                    // inlineCollapsed={this.state.collapsed}
                    >
                        {
                            this.menuNodes
                        }
                    </Menu>
                </div>
            </div>
        )
    }
}

/* 
    withRouter高阶组件：
        包装非路由组件，返回一个新的组件
        新组件中传了history/location/match
*/
export default withRouter(LeftNav)