

export default {

    createIsHandler(Collapse, el, binding) {
        //console.log('collapse createIsHandler')
        let showEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-show-bs-collapse', true, true)
            el.dispatchEvent(evt)
        }
        let shownEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-shown-bs-collapse', true, true)
            el.dispatchEvent(evt)
        }
        let hideEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-hide-bs-collapse', true, true)
            el.dispatchEvent(evt)
        }
        let hiddenEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-hidden-bs-collapse', true, true)
            el.dispatchEvent(evt)
        }

        return {
            beforeMount() {
                //console.log('collapse beforeMount', el)
                if (!el.$vb) el.$vb = {};
                let ins = Collapse.getInstance(el)
                if (!ins) ins = new Collapse(el, binding.value)
                el.$vb.collapse = ins
                el.addEventListener('show.bs.collapse', showEventHandler)
                el.addEventListener('shown.bs.collapse', shownEventHandler)
                el.addEventListener('hide.bs.collapse', hideEventHandler)
                el.addEventListener('hidden.bs.collapse', hiddenEventHandler)
            },
            beforeUnmount() {
                let ins = Collapse.getInstance(el)
                if (ins) ins.dispose()
                el.$vb.collapse = undefined
                el.removeEventListener('show.bs.collapse', showEventHandler)
                el.removeEventListener('shown.bs.collapse', shownEventHandler)
                el.removeEventListener('hide.bs.collapse', hideEventHandler)
                el.removeEventListener('hidden.bs.collapse', hiddenEventHandler)
            },
        }
    },



}

