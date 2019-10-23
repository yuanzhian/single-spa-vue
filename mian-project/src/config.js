export default {
    goods:{
        title:"商品管理",
        icon:'el-icon-s-goods',
        children:[
            {
                path:'/goods/list',
                name:'商品列表'
            },
            {
                path:'/goods/new',
                name:'新增商品'
            }
        ]
    },
    customers:{
        title:'顾客管理',
        icon:'el-icon-user-solid',
        children:[
            {
                path:'/customers/list',
                name:'顾客列表'
            },
            {
                path:'/customers/new',
                name:'新增顾客'
            }
        ]
    }
}
