import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './route/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// app创建
const app = createApp(App)
// 使用路由
app.use(router)
// ElementUI Plus引入
app.use(ElementPlus)
// 挂载
app.mount('#app')