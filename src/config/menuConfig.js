const menuList = [
    {
        title: "首页",
        key: "/home",
        icon: "",
    },
    {
        title: "商品",
        key: "/products",
        icon: "",
        children: [
            {
                title: "品类管理",
                key: "/category",
                icon: ""
            },
            {
                title: "商品管理",
                key: "/product",
                icon: ""
            }
        ]
    },
    {
        title: "用户管理",
        key: "/user",
        icon: ""
    },
    {
        title: "角色管理",
        key: "/role"
    },
    {
        title: "图形图表",
        key: "/charts",
        icon: "",
        children: [
            {
                title: "柱形图",
                key: "/bar",
                icon: ""
            },
            {
                title: "折线图",
                key: "/line",
                icon: ""
            },
            {
                title: "饼图",
                key: "/pie",
                icon: ""
            }
        ]
    }
]

export default menuList