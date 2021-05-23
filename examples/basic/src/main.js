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

app.directive('log-directive-lifecycle', {
    created: () => console.log('created'),
    beforeMount: () => console.log('beforeMount'),
    mounted: () => console.log('mounted'),
    beforeUpdate: () => console.log('beforeUpdate'),
    updated: () => console.log('updated'),
    beforeUnmount: () => console.log('beforeUnmount'),
    unmounted: () => console.log('unmounted')
})

app.use(vbPlugin)

app.mount('#app')
