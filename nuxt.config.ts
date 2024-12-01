// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {
        enabled: false
    },
    devServer: {
        host: '0.0.0.0',
        port: 3000
    },
    //数据请求API配置
    runtimeConfig: {
        // 只能在服务端使用
        apiSecret: process.env.VITE_API_SYNC_URL,
        public: {
            apiUrl: process.env.VITE_API_URL
        }
    }
})
