import { createApp } from 'vue'
import App from './App.vue'
import { createVbPlugin, VbModal, VbOffcanvas, VbTooltip } from 'vue3-plugin-bootstrap5'

let vbPlugins = createVbPlugin({VbModal, VbOffcanvas, VbTooltip})

let app = createApp(App)

app.use(vbPlugins)

app.mount('#app')
