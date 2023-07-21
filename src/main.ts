import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import {setThirdToolLibrary, setupGlobalComponents, initFunction} from './plugins'

async function init () {
    const app = createApp(App)
    // 添加router
    app.use(router)

    // 添加第三方工具类
    setThirdToolLibrary(app)

    // 添加全局组件
    setupGlobalComponents(app)

    // 挂载到页面
    app.mount('#app')

    // 挂载到 window
    window['$vue'] = app
}

init().then(() =>{
    initFunction
})

