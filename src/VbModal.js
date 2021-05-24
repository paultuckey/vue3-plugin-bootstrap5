

export default {

    createIsHandler(Modal, el, binding, baseOptions) {
        //console.log('modal createIsHandler', Modal)

        // bootstrap by default doesn't allow layering of modals, fix this by hiding the first when a second is shown
        // then when the second is hidden, show the first again (hide these show/hide events from listeners)

        let moveShownModalBehind = () => {
            let modalsVisible = document.querySelectorAll('.modal.show')
            modalsVisible.forEach((visibleModalEl) => {  // should only be one
                if (visibleModalEl && visibleModalEl.$vb && visibleModalEl.$vb.modal) {
                    visibleModalEl.$vb.modalIsBehind = true;
                    let modalBehind = {wasAnimated: false, backdropWasAnimated: false, el: visibleModalEl}
                    if (visibleModalEl.classList.contains('fade')) {
                        modalBehind.wasAnimated = true
                        visibleModalEl.classList.remove('fade')
                    }
                    if (visibleModalEl.$vb.modal._backdrop._config.isAnimated) {
                        modalBehind.backdropWasAnimated = true
                        visibleModalEl.$vb.modal._backdrop._config.isAnimated = false
                    }
                    visibleModalEl.$vb.modal.hide()
                    el.$vb.modalBehind = modalBehind;
                }
            })
        }
        let showModalBehind = () => {
            //console.log(el.$vb)
            if (el.$vb.modalBehind) {
                let modalBehind = el.$vb.modalBehind;
                modalBehind.el.$vb.modal.show()
                if (modalBehind.wasAnimated) modalBehind.el.classList.add('fade')
                if (modalBehind.backdropWasAnimated) modalBehind.el.$vb.modal._backdrop._config.isAnimated = true
                el.$vb.modalBehind = null
            }
        }

        let showEventHandler = () => {
            if (el.$vb.modalIsBehind) return;
            moveShownModalBehind();
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-show-bs-modal', true, true)
            el.dispatchEvent(evt)
            //layeredBackdropFix()
        }
        let shownEventHandler = () => {
            if (el.$vb.modalIsBehind) {
                el.$vb.modalHideEventsDisabled = false
                return;
            }
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-shown-bs-modal', true, true)
            el.dispatchEvent(evt)
        }
        let hideEventHandler = (e) => {
            if (el.$vb.modalIsBehind) return;
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-hide-bs-modal', true, true)
            el.dispatchEvent(evt)
            if (evt.defaultPrevented) e.preventDefault();
        }
        let hiddenEventHandler = () => {
            if (el.$vb.modalIsBehind) return;
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-hidden-bs-modal', true, true)
            el.dispatchEvent(evt)
            showModalBehind();
        }

        return {
            created() {
                if (!el.$vb) el.$vb = {modalEventsDisabled: false};
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
                // being orphaned.  We ideally would not call private functions however there is no public method to
                // support immediate hiding
                if (ins && (ins._isShown||ins._isTransitioning)) {
                    if (el.classList.contains('fade')) el.classList.remove('fade')  // remove animation
                    ins._backdrop._config.isAnimated = false;  // remove backdrop animation
                    ins.hide()  // this should immediately hide the modal with no animation
                }
                if (ins) ins.dispose()
                el.$vb.modal = undefined
                //console.log('modal cleanup done', el)
            },
            unmounted() {
                //
            }
        }
    },


}

