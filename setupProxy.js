// import { createProxyMiddleware } from 'http-proxy-middleware';
// export default function (app) {
//     app.use(
//         "/api",                                 // 代理路径
//         createProxyMiddleware({
//             target: "http://loaclhost:5000",    // 目标路径
//             changeOrigin: true,
//             pathRewrite: {
//                 '^/api': ''                     // 重写原路径
//             }
//         })
//     )
// }
