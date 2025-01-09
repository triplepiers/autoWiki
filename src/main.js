// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

// highlightJS CSS（这里可以选其他的样式）
import 'highlight.js/styles/obsidian.css'
// Markdown 样式
import './assets/solarized/theme.css'
// import './assets/solarized/theme-dark.css'

// 自定义样式
import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
