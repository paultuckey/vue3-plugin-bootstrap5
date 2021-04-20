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

On the button replace the default Bootstrap attributes: 
    `<button data-bs-toggle="modal" data-bs-target="#exampleModal" ...`

With 
    `<button v-vb-toggle:modal v-vb-target="'#renameModal'" ...`

Or in the Vue way, pass the ref name `<button v-vb-toggle:modal="'renameModal'" ...`

See `example/src/components/ModalExamples.vue`


# Tooltip

This `<button data-bs-toggle="tooltip" title="Hello World" ...`

to this: `<button v-vb-toggle:tooltip title="Hello World" ...`

See `example/src/components/ModalExamples.vue`
