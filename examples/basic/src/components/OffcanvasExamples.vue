<template>
  <div>

      <div class="mb-4">
          <h2>Offcanvas via Ref</h2>

          <button @click.prevent.stop="$refs.offcanvasExample1.$vb.offcanvas.show()"
                  class="btn btn-primary" type="button" aria-controls="offcanvasExample1">
              Button
          </button>

          <div v-vb-is:offcanvas ref="offcanvasExample1"
               class="offcanvas offcanvas-start" tabindex="-1" aria-labelledby="offcanvasExampleLabel">
              <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                  <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                  <div>
                      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                  </div>
                  <div class="dropdown mt-3">
                      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                          Dropdown button
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                  </div>
              </div>
          </div>

      </div>

      <div class="mb-4">

          <h2>Offcanvas via Selector</h2>

          <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample2"
                  class="btn btn-primary" type="button" aria-controls="offcanvasExample2">
              Button
          </button>

          <div v-vb-is:offcanvas id="offcanvasExample2"
               class="offcanvas offcanvas-start" tabindex="-1"  aria-labelledby="offcanvasExampleLabel2">
              <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasExampleLabel2">Offcanvas</h5>
                  <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                  <div>
                      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                  </div>
                  <div class="dropdown mt-3">
                      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown">
                          Dropdown button
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                  </div>
              </div>
          </div>

      </div>

      <h2>Offcanvas Events</h2>

      <button @click.prevent.stop="$refs.offcanvasExample3.$vb.offcanvas.show()"
              class="btn btn-primary" type="button">
          Button
      </button>

      <div v-vb-is:offcanvas ref="offcanvasExample3"
           @vb-shown-bs-offcanvas="example3SetFocus"
           @vb-hide-bs-offcanvas="example3OffcanvasHide"
           @vb-hidden-bs-offcanvas="example3OffcanvasHidden"
           class="offcanvas offcanvas-start" tabindex="-1" aria-labelledby="offcanvasExample3Label">
          <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasExample3Label">Offcanvas</h5>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
              <div>
                  Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
              </div>
              <div class="dropdown mt-3">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown">
                      Dropdown button
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
              </div>
          </div>
      </div>

  </div>
</template>

<script>

export default {
    name: 'OffcanvasExamples',
    data() {
        return {
            example3PreventOffcanvasClosing: true
        }
    },
    methods: {
        example3SetFocus() {
          console.log('offcanvas shown')
          this.example3PreventOffcanvasClosing = true
        },
        example3OffcanvasHide(e) {
          console.log('offcanvas hide')
          if (this.example3PreventOffcanvasClosing) e.preventDefault()

          setTimeout(() => {
            this.example3PreventOffcanvasClosing = false
            this.$refs.offcanvasExample3.$vb.offcanvas.hide();
          }, 500);
        },
        example3OffcanvasHidden() {
          console.log('offcanvas hidden')
        }

    }
}

</script>

