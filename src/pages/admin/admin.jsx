import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd';


import memoryUtils from '../../utils/memoryUtils'
import LeftNav from '../../components/left-nav/left-nav';
import Header from '../../components/header/header';
import Home from '../home/home'
import Category from '../category/category'
import Product from '../product/product'
import User from '../user/user'
import Role from '../role/role'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'

const { Footer, Sider, Content } = Layout;


export default class Admin extends Component {
    render() {
        const user = memoryUtils.user
        // 如果内存中没有user，当前没有登录
        if (!user || !user._id) {
            // 自动跳转到登录
            return <Redirect to="/login"></Redirect>
        }
        return (
            <Layout style={{ height: '100%' }}>
                <Sider>
                    <LeftNav />
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content style={{ margin: 20, backgroundColor: "fff" }}>
                        <Switch>
                            <Route path='/home' component={Home} />
                            <Route path='/category' component={Category} />
                            <Route path='/product' component={Product} />
                            <Route path='/user' component={User} />
                            <Route path='/role' component={Role} />
                            <Route path='/bar' component={Bar} />
                            <Route path='/line' component={Line} />
                            <Route path='/pie' component={Pie} />
                            <Redirect to="/home" />
                        </Switch>

                    </Content>
                    <Footer style={{ textAlign: "center", color: "#ccc" }}>Footer</Footer>
                </Layout>
            </Layout>
        )
    }
}
