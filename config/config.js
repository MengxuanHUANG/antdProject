export default {
    plugins: [
        ["umi-plugin-react", {
            antd: true,
            dva: true,
            locale:{
                enable: true,
                default: 'zh-CN',
                baseNavigator: true,
                antd: true,
            }
        }]
    ],
    proxy: {
        //for testing service api
        '/api': {
            target: 'http://34.67.128.245:8080',
            changeOrigin: true,
        },
        //only for local debugging
        //test local api
        '/firstProject_war_exploded':{
            target: 'http://localhost:8080',
            changeOrigin: true,
        },
    },
    routes: [
        {
            path: '/',
            component: './login/index',
        },
        {
            path: '/home',
            component: '../layout/home',
            routes: [
                {
                    path: 'barbecue',
                    component: './barbecue/index',
                }
            ]
        },
        //temporary 404 route
        {
            path: '/404',
            component: './404'
        }
    ],
}