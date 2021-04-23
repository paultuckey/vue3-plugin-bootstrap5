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


# Bootstrap Components in Vue

## Alerts

Add `v-vb-is:alert` to your alert element.

On close buttons replace `data-bs-dismiss="alert"` with `v-vb-dismiss:alert`

Listen for events on your alert element with: `v-vb-on:close.bs.alert="someMethod""` and `v-vb-on:closed.bs.alert="someMethod"`

See [AlertExamples.vue](examples/basic/src/components/AlertExamples.vue)



## Carousel

TODO


## Collapse

TODO


## Dropdowns

TODO


## Modal

On the button replace the Bootstrap attributes
    `<button data-bs-toggle="modal" data-bs-target="#exampleModal" ...`

With `<button v-vb-toggle:modal data-bs-target="#exampleModal" ...`

See [ModalExamples.vue](examples/basic/src/components/ModalExamples.vue)


## Offcanvas

On the button replace the Bootstrap attributes
`<button data-bs-toggle="offcanvas" data-bs-target="#exampleOffcanvas" ...`

With `<button v-vb-toggle:offcanvas data-bs-target="#exampleOffcanvas" ...`

See [OffcanvasExamples.vue](examples/basic/src/components/OffcanvasExamples.vue)


## Popover

TODO


## ScrollSpy

TODO


## Tab (Listgroup, Navs)

TODO


## Toast

TODO


## Tooltip

Replace this `<button data-bs-toggle="tooltip" title="Hello World" ...`

With `<button v-vb-toggle:tooltip="'Hello World'" ...`

See [TooltipExamples.vue](examples/basic/src/components/TooltipExamples.vue)


# General

## Bootstrap JavaScript Objects

When `v-vb-is` is added to an element, this plugin will assign the raw Bootstrap object(s) to `$vb` the property.

```javascript

    // when `v-vb-is` is used on an element, add a ref (eg ref="exampleEl") then use $vb like this:
    this.$refs.exampleEl.$vb.modal.hide()

    // note, this is same as doing this:    
    bootstrap.Modal.getInstance(this.$refs.exampleEl).hide()

    // if `v-vb-is` is used on the root element of a component use $vb like this:
    this.$el.$vb.modal.hide()

```


## Events

Are added to an element using `v-vb-on:[eventName]="methodToCall""`.  Your method will be called by bootstrap when the 
event it triggered by Bootstrap.

```html
<div ref="exampleModalEvents" 
     v-vb-is:modal 
     v-vb-on:hidden.bs.modal="modalHiddenMethod">...</div>
 ```

All bootstrap events are supported (so long as `v-vb-on:` is specified the same element as `v-vb-is:`).  See bootstrap 
documentation for the full list for each component:

  - [Alerts Events](https://getbootstrap.com/docs/5.0/components/alerts/#events)
  - [Carousel Events](https://getbootstrap.com/docs/5.0/components/carousel/#events)
  - [Collapse Events](https://getbootstrap.com/docs/5.0/components/collapse/#events)
  - [Dropdowns Events](https://getbootstrap.com/docs/5.0/components/dropdowns/#events)
  - [List Group Events](https://getbootstrap.com/docs/5.0/components/list-group/#events)
  - [Modal Events](https://getbootstrap.com/docs/5.0/components/modal/#events)
  - [Navs & Tabs Events](https://getbootstrap.com/docs/5.0/components/navs-tabs/#events)
  - [Offcanvas Events](https://getbootstrap.com/docs/5.0/components/offcanvas/#events)
