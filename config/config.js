export default {
    plugins: [
        ["umi-plugin-react", {
            antd: true,
            dva: true,
        }]
    ],
    proxy: {
        '/servlet': {
            target: 'http://34.67.128.245:8080',
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
            component: '../layout',
            routes: [
                {
                    path: '/home',
                    component: './home/index'
                }
            ]
        },
        //temporary 404
        {
            path: '/404',
            component: './404'
        }
    ],
}