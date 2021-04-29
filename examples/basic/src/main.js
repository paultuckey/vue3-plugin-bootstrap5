import { createApp } from 'vue'
import App from './App.vue'
import { createVbPlugin } from 'vue3-plugin-bootstrap5'
import {
    Alert, Button, Carousel, Collapse, Dropdown, Modal,
    Offcanvas, Popover, ScrollSpy, Tab, Toast, Tooltip } from 'bootstrap'

let vbPlugin = createVbPlugin({
    Alert, Button, Carousel, Collapse, Dropdown, Modal,
    Offcanvas, Popover, ScrollSpy, Tab, Toast, Tooltip  })

let app = createApp(App)

app.use(vbPlugin)

app.mount('#app')
