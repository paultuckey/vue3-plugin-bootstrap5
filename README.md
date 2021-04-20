# Vue 3 Plugin for Bootstrap 5

Supported version is: Vue 3, Bootstrap 5.


# ALPHA ALPHA ALPHA ALPHA ALPHA ALPHA ALPHA ALPHA

## Install

In your main.js:
```vue

import { createVbPlugin, VbModal } from "vue3-plugin-bootstrap5";

const createVbPlugin = createVbPlugin({VbModal});

app.use(createVbPlugin);
```


## Modal

On the button replace the default Bootstrap attributes: `data-bs-toggle="modal" data-bs-target="#exampleModal"`
With `<button v-vb-toggle:modal v-vb-target="'#renameModal'" ...` pass selector

Or in the Vue way, pass the ref name `<button v-vb-toggle:modal="'renameModal'" ...` pass ref


```vue

<template>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" v-bs-toggle:modal="'exampleModal'">
      Launch demo modal
    </button>
    
    <!-- Modal -->
    <div v-vb-is:modal v-bs-on:hide.bs.modal="modalHideMethod" ref="exampleModal"
         class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" v-bs-dismiss:modal aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
</template>
<script>

export default {
  name: "ExampleModal",
  methods: {
    modalHideMethod(e) {
        //
    }
  }
}

</script>

```


# Tooltip

This `<button data-bs-toggle="tooltip" title="Hello World" ...`

to this: `<button v-vb-toggle:tooltip title="Hello World" ...`

