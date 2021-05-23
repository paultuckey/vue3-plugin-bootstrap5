import {hide as scrollBarHide, reset as scrollBarReset} from "../../bootstrap/js/src/util/scrollbar";

export default {

    createIsHandler(Modal, el, binding, baseOptions) {
        //console.log('modal createIsHandler')

        // bootstrap by default doesn't allow layering of modals, fix this when modal is shown by adjusting the zindex
        // of each new modal and it's backdrop
        const layeredBackdropFix = () => {
            let modals = document.querySelectorAll('.modal')
            let zIndex = baseOptions.vbModalBaseZindex + (10 * modals.length);
            el.style.zIndex = String(zIndex);
            setTimeout(function() {
                // ensure the backdrop is one back in the zindex
                let bdEl = document.querySelector('.modal-backdrop:not(.vb-modal-stack)')
                if (bdEl) {
                    bdEl.style.zIndex = String(zIndex - 1);
                    bdEl.classList.add('vb-modal-stack')
                }
            }, 0);
        }
        const layeredModalHiddenFix = () => {
            // when modal is hidden if there are no other modals shown check for 'modal-open' and remove
            let modalsVisible = document.querySelectorAll('.modal.show')
            //console.log('modal cleanup done, modals visible', modalsVisible.length)
            if (modalsVisible.length > 0 && !document.body.classList.contains('modal-open')) {
                scrollBarHide()
                document.body.classList.add('modal-open')
            } else {
                scrollBarReset()
            }
        }
        let showEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-show-bs-modal', true, true)
            el.dispatchEvent(evt)
            layeredBackdropFix()
        }
        let shownEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-shown-bs-modal', true, true)
            el.dispatchEvent(evt)
        }
        let hideEventHandler = (e) => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-hide-bs-modal', true, true)
            el.dispatchEvent(evt)
            if (evt.defaultPrevented) e.preventDefault();
        }
        let hiddenEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-hidden-bs-modal', true, true)
            el.dispatchEvent(evt)
            layeredModalHiddenFix()
        }

        return {
            created() {
                if (!el.$vb) el.$vb = {};
            },
            beforeMount() {
                //console.log('modal beforeMount', el)
                let ins = Modal.getInstance(el)
                if (!ins) ins = new Modal(el, binding.value)
                el.$vb.modal = ins
                el.addEventListener('show.bs.modal', showEventHandler)
                el.addEventListener('shown.bs.modal', shownEventHandler)
                el.addEventListener('hide.bs.modal', hideEventHandler)
                el.addEventListener('hidden.bs.modal', hiddenEventHandler)
            },
            mounted() {
                //console.log('modal mounted', el)
                let modifiers = Object.keys(binding.modifiers).map(key => key)
                if (modifiers && modifiers.length > 0 && modifiers[0] === 'show') {
                    let ins = Modal.getInstance(el)
                    if (ins) ins.show()
                }
            },
            updated() {
                //console.log('modal updated')
                let ins = Modal.getInstance(el)
                if (ins) ins.handleUpdate()
            },
            beforeUnmount() {
                //console.log('modal beforeUnmount', el)

                // ensure that any hide.bs.modal events are already removed and can't call preventDefault
                el.removeEventListener('show.bs.modal', showEventHandler)
                el.removeEventListener('shown.bs.modal', shownEventHandler)
                el.removeEventListener('hide.bs.modal', hideEventHandler)
                el.removeEventListener('hidden.bs.modal', hiddenEventHandler)

                let ins = Modal.getInstance(el)
                // if modal is shown or transitioning we need to remove NOW in this JS loop to prevent the backdrop
                // being orphaned.  We ideally would not call _isShown (private) however there is no public method to
                // support this.
                if (ins && (ins._isShown||ins._isTransitioning)) {
                    ins._backdrop._config.isAnimated = false;
                    ins._hideModal()
                }
                if (ins) ins.dispose()
                el.$vb.modal = undefined
                //console.log('modal cleanup done', el)
            },
            unmounted() {
                // stuff not in modal
                layeredModalHiddenFix()
            }
        }
    },


}

