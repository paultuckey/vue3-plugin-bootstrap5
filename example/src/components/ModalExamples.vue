<template>
  <div>

      <div class="mb-4">
          <h2>Modal via Ref</h2>

          <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary" v-vb-toggle:modal="'exampleModal'">
              Launch demo modal
          </button>

          <!-- Modal -->
          <div ref="exampleModal" v-vb-is:modal v-vb-on:hidden.bs.modal="modalHidden"
               class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                          <button type="button" class="btn-close" v-vb-dismiss:modal aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                          ...
                      </div>
                      <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" v-vb-dismiss:modal>Close</button>
                          <button type="button" class="btn btn-primary" v-vb-dismiss:modal="canModalBeClosed">Save changes</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div class="mb-4">

          <h2>Modal via Selector</h2>

          <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary" v-vb-toggle:modal data-bs-target="#exampleModalId">
              Launch demo modal
          </button>

          <!-- Modal -->
          <div id="exampleModalId" v-vb-is:modal v-vb-on:hidden.bs.modal="modalHidden"
               class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
              <div class="modal-dialog">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel2">Modal title</h5>
                          <button type="button" class="btn-close" v-vb-dismiss:modal aria-label="Close"></button>
                      </div>
                  </div>
              </div>
          </div>
      </div>

  </div>
</template>

<script>

export default {
    name: 'ModalExamples',
    methods: {
        canModalBeClosed() {
            return false
        },
        modalHidden() {
            console.log('modalHidden')
        }
    }
}

</script>

