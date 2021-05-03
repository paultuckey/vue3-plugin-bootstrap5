<template>
    <div ref="exampleModal4" v-vb-is:modal.show v-vb-on:hidden.bs.modal="modalWasHidden"
         class="modal fade" tabindex="-1" aria-labelledby="exampleModal4Label" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModal4Label">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-secondary" @click.prevent="example4CloseModal">
                        Close via modal hide</button>
                    <button type="button" class="btn btn-secondary" @click.prevent="example4CloseViaUnmounting">
                        Close via unmounting</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ModalExamples4ModalComp',
    emits: ['close-modal'],
    methods: {

        example4CloseModal(e) {
            let someValidation = true;
            if (someValidation) {
                e.preventDefault()  // prevent bootstrap from closing if needed
            }
            this.$refs.exampleModal4.$vb.modal.hide();
        },
        modalWasHidden() {
            // we sent the event up to remove the component only when
            // Bootstrap has told us the animation is done
            this.$emit('close-modal');
        },

        example4CloseViaUnmounting() {
            // here we ask Vue to remove the component first, it means the Modal fade animation will not run
            this.$emit('close-modal');
        }
    },
}

</script>

