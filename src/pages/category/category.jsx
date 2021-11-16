import React, { Component } from 'react'
import { Card, Table, Button, Icon, message } from 'antd'
import LinkButton from '../../components/link-button/link-button'
import { reqCategorys } from '../../api'

/* 商品分类路由 */
export default class Category extends Component {
    state = {
        category: [],       // 一级分类列表
        loading: false,
        subCategorys: [],   // 二级分类列表
        parentId: '0',      // 当前需要显示的分类列表的父分类ID
        parentNname: '',    // 当前需要显示的分类列表的父分类
    }

    // 初始化Table所有列的数据
    initColums = () => {
        this.columns = [
            {
                title: '分类的名称',
                dataIndex: 'name',
            },
            {
                title: '操作',
                width: 300,
                // 返回需要显示的界面标签
                render: () => {
                    <span>
                        <LinkButton>修改分类</LinkButton>
                        <LinkButton>查看子分类</LinkButton>
                    </span>
                }
            }
        ];
    }
    // 异步获取一级分类列表显示
    getCategorys = async () => {
        // 在发请求前，显示loading
        this.setState({loading: true})
        const {parentId} = this.state

        const result = await reqCategorys(parentId)
        // 在请求完成后，隐藏loading
        this.setState({loading: false})
        console.log(result);
        if(result.status === 0){
            const categorys = result.data
            this.setState({categorys})
        }else{
            message.error("获取分类列表失败")
        }
    }

    componentDidMount() {
        this.initColums()
        this.getCategorys()
    }

    render() {
        // 读取状态数据
        const { category, loading } = this.state
        const title = "一级分类列表"
        const extra = (
            <Button type="primary">
                <Icon type="plus"></Icon>
            </Button>
        )


        return (
            <div>
                <Card title={title} extra={extra}>
                    <Table rowKey="key" bordered dataSource={category} loading={loading} columns={this.columns} pagination={{defaultPageSize: 5, showQuickJumper: true}} />
                </Card>
            </div>
        )
    }
}
