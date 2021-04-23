import { createApp } from 'vue'
import App from './App.vue'
import { createVbPlugin } from 'vue3-plugin-bootstrap5'
import { Alert, Offcanvas, Modal, Tooltip } from 'bootstrap'

let vbPlugin = createVbPlugin({ Alert, Offcanvas, Modal, Tooltip })

let app = createApp(App)

app.use(vbPlugin)

app.mount('#app')
