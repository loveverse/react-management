import React, { Component } from 'react'
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Redirect } from 'react-router-dom'


import './login.less'
import logo from '../../assets/images/avator.jpg'
// 分别暴露需要结构，默认暴露直接引入
import { reqLogin } from '../../api'
import memoryUtils from '../../utils/memoryUtils';
import storageUtils from '../../utils/storageUtils'



export default class Login extends Component {
    render() {

        // 如果用户已经登录,自动跳转到管理界面
        const user = memoryUtils.user
        if (user && user._id) {
            return <Redirect to="/" />
        }
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo" />
                    {/* 1、加入今日诗词API */}
                    <h1>React项目：后台管理</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        // 不记录上次输入的内容
                        autoComplete="off"
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                // 配置输入框提示信息
                                // 声明式验证:直接使用别人定义好的验证规则进行验证
                                { required: true, whitespace: true, message: '用户名必须输入!' },
                                { min: 4, message: '用户名至少4位!' },
                                { max: 12, message: '用户名最多12位!' },
                                { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成!' },
                                // { initialValues: "admin" }
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                // 自定义校验的函数
                                { validator: this.validatePwd }
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="密码"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }

    // 	提交表单且数据验证成功后回调事件
    onFinish = async (values) => {
        // console.log("校验成功", values);

        // 请求登录
        const { username, password } = values
        const result = await reqLogin(username, password)
        // console.log(result);
        if (result.status === 0) {
            message.success("登录成功")
            // 保存user
            const user = result.data
            memoryUtils.user = user // 保存在内存
            storageUtils.saveUser(user) // 保存在localStorage中


            // 登录成功需要跳转到管理界面
            // 不需要回退回来，需要回退用push
            this.props.history.replace('/')
        } else {
            // 提示错误信息
            message.error(result.msg)
        }
        // .then(response => {
        //     console.log("成功",response.data);
        // }).catch(error => {
        //     console.log("失败了", error);
        // })
    };


    // 自定义校验，接收 Promise 作为返回值
    validatePwd = (rule, value) => {
        if (!value) {
            return Promise.reject("密码必须输入")
        } else if (value.length < 4) {
            return Promise.reject("密码不能小于4位")
        } else if (value.length > 12) {
            return Promise.reject("密码不能大于12位")
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
            return Promise.reject("用户名必须是英文、数字或下划线组成!")
        } else {
            // 验证通过
            return Promise.resolve()
        }
    }
}

/*
    高阶函数
        Form.create()是一个高阶函数
        接收函数类型的参数
        返回值是函数
        常见：
            setTimeout/setInterval
            Promise
            forEash/filter/map/find
            bind()
    高阶组件
        包装组件生成一个新组件
        接收一个组件，返回一个新组件，包装组件会向被包装组件传入特定属性
        扩展组件功能
*/
