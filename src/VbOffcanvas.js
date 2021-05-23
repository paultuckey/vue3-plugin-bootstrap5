

export default {

    createIsHandler(Offcanvas, el, binding) {
        //console.log('offcanvas createIsHandler')

        let showEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-show-bs-offcanvas', true, true)
            el.dispatchEvent(evt)
        }
        let shownEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-shown-bs-offcanvas', true, true)
            el.dispatchEvent(evt)
        }
        let hideEventHandler = (e) => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-hide-bs-offcanvas', true, true)
            el.dispatchEvent(evt)
            if (evt.defaultPrevented) e.preventDefault();
        }
        let hiddenEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-hidden-bs-offcanvas', true, true)
            el.dispatchEvent(evt)
        }

        return {
            created() {
                if (!el.$vb) el.$vb = {};
            },
            beforeMount() {
                //console.log('offcanvas beforeMount', el)
                let ins = Offcanvas.getInstance(el)
                if (!ins) ins = new Offcanvas(el, binding.value)
                el.$vb.offcanvas = ins
                el.addEventListener('show.bs.offcanvas', showEventHandler)
                el.addEventListener('shown.bs.offcanvas', shownEventHandler)
                el.addEventListener('hide.bs.offcanvas', hideEventHandler)
                el.addEventListener('hidden.bs.offcanvas', hiddenEventHandler)
            },
            beforeUnmount() {
                //console.log('offcanvas beforeUnmount', el)
                // run in next loop to ensure that any hide.bs.modal events are already removed and can't call preventDefault
                setTimeout(() => {
                    let ins = Offcanvas.getInstance(el)
                    // we ideally would not call _isShown (private) however we need it closed with no transition
                    if (ins && ins._isShown) {
                        // Vue removes the element in the next loop, so we need to ensure that the animation doesn't
                        // run and Bootstrap can cleanup immediately
                        if (el.classList && el.classList.contains('fade')) el.classList.remove('fade')
                        ins.hide()
                    }
                    if (ins) ins.dispose()
                    el.$vb.offcanvas = undefined
                    el.removeEventListener('show.bs.offcanvas', showEventHandler)
                    el.removeEventListener('shown.bs.offcanvas', shownEventHandler)
                    el.removeEventListener('hide.bs.offcanvas', hideEventHandler)
                    el.removeEventListener('hidden.bs.offcanvas', hiddenEventHandler)
                    //console.log('modal cleanup done', el)
                });
            }
        }
    },



}

