# Vue 3 Plugin for Bootstrap 5

Supported version is: Vue 3, Bootstrap 5.


# ALPHA ALPHA ALPHA ALPHA ALPHA ALPHA ALPHA ALPHA

This plugin is designed to add directives to Vue 3 that can be used to create and control Bootstrap 5 JavaScript 
objects.

## Install

In your main.js:
```vue

import { createVbPlugin, VbModal } from "vue3-plugin-bootstrap5";

const createVbPlugin = createVbPlugin({VbModal});

app.use(createVbPlugin);
```


## Modal

On the button replace the Bootstrap attributes
    `<button data-bs-toggle="modal" data-bs-target="#exampleModal" ...`

With `<button v-vb-toggle:modal data-bs-target="#exampleModal" ...`

See [ModalExamples.vue](examples/basic/src/components/ModalExamples.vue)


# Tooltip

Replace this `<button data-bs-toggle="tooltip" title="Hello World" ...`

With `<button v-vb-toggle:tooltip="'Hello World'" ...`

See [TooltipExamples.vue](examples/basic/src/components/TooltipExamples.vue)


# Offcanvas

On the button replace the Bootstrap attributes
`<button data-bs-toggle="offcanvas" data-bs-target="#exampleOffcanvas" ...`

With `<button v-vb-toggle:offcanvas data-bs-target="#exampleOffcanvas" ...`

See [OffcanvasExamples.vue](examples/basic/src/components/OffcanvasExamples.vue)
