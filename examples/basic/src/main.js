import { createApp } from 'vue'
import App from './App.vue'
import { createVbPlugin } from 'vue3-plugin-bootstrap5'
import { Modal, Offcanvas, Tooltip } from 'bootstrap'

let vbPlugin = createVbPlugin({ Modal, Offcanvas, Tooltip })

let app = createApp(App)

app.use(vbPlugin)

app.mount('#app')
