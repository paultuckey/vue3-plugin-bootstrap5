# Vue 3 Plugin for Bootstrap 5

# ALPHA ALPHA ALPHA ALPHA ALPHA ALPHA ALPHA ALPHA

This plugin is designed to add directives to Vue 3 that can be used to create and control Bootstrap 5 JavaScript 
objects.

This is not intended to be a Bootstrap-Vue component library, but rather a plugin to allow easier control of Bootstrap
objects from Vue.

 - This library has zero dependencies (you inject Bootstrap yourself).
 - Supports Vue 3.x and Bootstrap 5.x

## Install

```shell
npm install vue3-plugin-bootstrap5
```

In your `main.js`:
```javascript

import { createVbPlugin } from 'vue3-plugin-bootstrap5'
import { Modal, Offcanvas, Tooltip } from 'bootstrap'

let vbPlugin = createVbPlugin({ Modal, Offcanvas, Tooltip })

app.use(vbPlugin)
```

See example [main.js](examples/basic/src/main.js)


## Modal

On the button replace the Bootstrap attributes
    `<button data-bs-toggle="modal" data-bs-target="#exampleModal" ...`

With `<button v-vb-toggle:modal data-bs-target="#exampleModal" ...`

See [ModalExamples.vue](examples/basic/src/components/ModalExamples.vue)


# Offcanvas

On the button replace the Bootstrap attributes
`<button data-bs-toggle="offcanvas" data-bs-target="#exampleOffcanvas" ...`

With `<button v-vb-toggle:offcanvas data-bs-target="#exampleOffcanvas" ...`

See [OffcanvasExamples.vue](examples/basic/src/components/OffcanvasExamples.vue)


# Tooltip

Replace this `<button data-bs-toggle="tooltip" title="Hello World" ...`

With `<button v-vb-toggle:tooltip="'Hello World'" ...`

See [TooltipExamples.vue](examples/basic/src/components/TooltipExamples.vue)


# Access to raw Bootstrap JavaScript objects

When `v-vb-is` is added to an element, this plugin will assign the raw Bootstrap object(s) to `$vb` the property.

```javascript

    // when `v-vb-is` is used on an element, add a ref (eg ref="exampleEl") then use $vb like this:
    this.$refs.exampleEl.$vb.modal.hide()

    // or if `v-vb-is` is used on the root element of a component use $vb like this:
    this.$el.$vb.modal.hide()

    // note, this is same as doing this:    
    bootstrap.Modal.getInstance(this.$refs.exampleEl).hide()

```