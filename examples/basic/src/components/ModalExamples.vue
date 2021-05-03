<template>
  <div>

      <div class="mb-4">
          <h2>Modal via Ref</h2>

          <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary" v-vb-toggle:modal="'exampleModal1'">
              Launch demo modal
          </button>

          <!-- Modal -->
          <div ref="exampleModal1" v-vb-is:modal
               class="modal fade" tabindex="-1" aria-labelledby="exampleModal1Label" aria-hidden="true">
              <div class="modal-dialog">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h5 class="modal-title" id="exampleModal1Label">Modal title</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                          ...
                      </div>
                      <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-secondary" @click.prevent="example1CloseViaMethod">Close via method</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div class="mb-4">

          <h2>Modal via Selector</h2>

          <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2Id">
              Launch demo modal
          </button>

          <!-- Modal -->
          <div id="exampleModal2Id" v-vb-is:modal
               class="modal fade" tabindex="-1" aria-labelledby="exampleModal2Label" aria-hidden="true">
              <div class="modal-dialog">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h5 class="modal-title" id="exampleModal2Label">Modal title</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                          ...
                      </div>
                      <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary" @click.prevent="example2Close">Close via method</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div class="mb-4">
          <h2>Modal with events</h2>

          <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary" v-vb-toggle:modal="'exampleModal3'">
              Launch demo modal with events
          </button>

          <!-- Modal -->
          <div ref="exampleModal3" v-vb-is:modal
               v-vb-on:shown.bs.modal="example3SetFocus"
               v-vb-on:hide.bs.modal="example3ModalHide"
               v-vb-on:hidden.bs.modal="example3ModalHidden"
               class="modal fade" tabindex="-1" aria-labelledby="exampleModal3Label" aria-hidden="true">
              <div class="modal-dialog">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h5 class="modal-title" id="exampleModal3Label">Modal title</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                  :disabled="example3PreventModalClosing"></button>
                      </div>
                      <div class="modal-body">
                          <label>Name:
                          <input ref="nameInput" type="text" class="form-control"
                                 :disabled="example3PreventModalClosing" />
                          </label>
                      </div>
                      <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                                  :disabled="example3PreventModalClosing">Close</button>
                          <button type="button" class="btn btn-secondary"
                                  :disabled="example3PreventModalClosing"
                                  @click.prevent="example3SaveAndCloseIn5s">Save and close in 5s</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div class="mb-4">
          <h2>Modal Layering</h2>

          <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary" v-vb-toggle:modal="'exampleModalLayering'">
              Launch demo modal
          </button>

          <!-- Modal -->
          <div ref="exampleModalLayering" v-vb-is:modal
               class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabelLayering" aria-hidden="true">
              <div class="modal-dialog">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabelLayering">Modal Layer 1</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">...</div>
                      <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary" v-vb-toggle:modal="'exampleModalLayering2'">Open Another Modal</button>
                      </div>
                  </div>
              </div>
          </div>
          <div ref="exampleModalLayering2" v-vb-is:modal
               class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabelLayering2" aria-hidden="true">
              <div class="modal-dialog">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabelLayering2">Modal Layer 2</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">...</div>
                      <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                  </div>
              </div>
          </div>

      </div>

      <div class="mb-4">
          <h2>Modal as a Vue Component</h2>

          <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary" @click.prevent="example4ShowModal()">
              Launch demo modal
          </button>
          <ModalExamples4ModalComp v-if="modalExample4IsShown"
                @close-modal="modalExample4IsShown=false"></ModalExamples4ModalComp>
      </div>

  </div>
</template>

<script>

import ModalExamples4ModalComp from "./ModalExamples4ModalComp";

export default {
    name: 'ModalExamples',
    components: {ModalExamples4ModalComp},
    data() {
        return {
            example3PreventModalClosing: false,
            modalExample4IsShown: false
        }
    },
    methods: {

        example1CloseViaMethod() {
            this.$refs.exampleModal1.$vb.modal.hide();
        },

        example2Close() {
            // close modal
            document.getElementById('exampleModal2Id').$vb.modal.hide();
        },

        example3SetFocus() {
            this.$refs.nameInput.focus()
        },
        example3ModalHidden() {
            console.log('example 3 modal was hidden')
        },
        example3ModalHide(e) {
            if (this.example3PreventModalClosing) e.preventDefault()  // prevent modal from closing
        },
        example3SaveAndCloseIn5s() {
            // do validation here, if it fails then return

            // pretend to save
            this.example3PreventModalClosing = true;
            setTimeout(() => {
                this.example3PreventModalClosing = false;
                this.$refs.exampleModal3.$vb.modal.hide();
            }, 5000);
        },

        example4ShowModal() {
            this.modalExample4IsShown = true;
        }

    },
}

</script>

