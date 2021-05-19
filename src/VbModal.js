
export default {

    createIsHandler(Modal, el, binding, baseOptions) {
        //console.log('modal createIsHandler')

        // bootstrap by default doesn't allow layering of modals, fix this when modal is shown by adjusting the zindex
        // of each new modal and it's backdrop
        const backdropFix = () => {
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
        const modalShowFix = () => {
            // when we have multiple modals open and one is hidden bootstrap will remove the modal-open class
            // we simply add it again
            if (!document.body.classList.contains('modal-open')) {
                document.body.classList.add('modal-open')
            }
        }
        const modalHiddenFix = () => {
            // when modal is hidden if there are no other modals shown check for 'modal-open' and remove
            let modalsVisible = document.querySelectorAll('.modal.show')
            if (modalsVisible.length === 0 && document.body.classList.contains('modal-open')) {
                document.body.classList.remove('modal-open')
            }
        }
        let showEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-show-bs-modal', true, true)
            el.dispatchEvent(evt)
            backdropFix()
            modalShowFix()
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
            modalHiddenFix()
        }

        return {
            beforeMount() {
                //console.log('modal beforeMount', el)
                if (!el.$vb) el.$vb = {};
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
                // run in next loop to ensure that any hide.bs.modal events are already removed and can't call preventDefault
                setTimeout(() => {
                    let ins = Modal.getInstance(el)
                    // we ideally would not call _isShown (private) however we need it closed with no transition
                    if (ins && ins._isShown) {
                        // Vue removes the element in the next loop, so we need to ensure that the animation doesn't
                        // run and Bootstrap can cleanup immediately
                        if (el.classList && el.classList.contains('fade')) el.classList.remove('fade')
                        ins.hide()
                    }
                    if (ins) ins.dispose()
                    el.$vb.modal = undefined
                    //console.log('modal cleanup done', el)
                });
            },
            unmounted() {
                //console.log('modal unmounted', el)
                el.removeEventListener('show.bs.modal', showEventHandler)
                el.removeEventListener('shown.bs.modal', shownEventHandler)
                el.removeEventListener('hide.bs.modal', hideEventHandler)
                el.removeEventListener('hidden.bs.modal', hiddenEventHandler)
            }

        }
    },


}

