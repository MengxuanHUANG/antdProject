export default{
    singular: true,
    plugins: [
        ["umi-plugin-react",{
            antd: true
        }]
    ],
    routes: [
        {
            path: '/',
            component: './login/index',
        },
        {
            path: '/home',
            component: '../layout',
            routes:[
                {
                    path: '/home',
                    component: './home/Home'
                }
            ]
        }
    ],
}