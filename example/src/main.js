import { createApp } from 'vue'
import App from './App.vue'
import { createVbPlugins, VbModal } from 'vue3-bootstrap5-plugins'

let vbPlugins = createVbPlugins({VbModal})

let app = createApp(App)

app.use(vbPlugins)

app.mount('#app')
