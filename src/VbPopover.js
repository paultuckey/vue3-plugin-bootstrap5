

export default {

    createIsHandler(Popover, el, binding) {
        //console.log('popover createIsHandler')

        let showEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-show-bs-popover', true, true)
            el.dispatchEvent(evt)
        }
        let shownEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-shown-bs-popover', true, true)
            el.dispatchEvent(evt)
        }
        let hideEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-hide-bs-popover', true, true)
            el.dispatchEvent(evt)
        }
        let hiddenEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-hidden-bs-popover', true, true)
            el.dispatchEvent(evt)
        }
        let insertedEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-inserted-bs-popover', true, true)
            el.dispatchEvent(evt)
        }

        return {
            beforeMount() {
                //console.log('popover beforeMount', el)
                if (!el.$vb) el.$vb = {};
                let ins = Popover.getInstance(el)
                if (!ins) ins = new Popover(el, binding.value)
                el.$vb.popover = ins
                el.addEventListener('show.bs.popover', showEventHandler)
                el.addEventListener('shown.bs.popover', shownEventHandler)
                el.addEventListener('hide.bs.popover', hideEventHandler)
                el.addEventListener('hidden.bs.popover', hiddenEventHandler)
                el.addEventListener('inserted.bs.popover', insertedEventHandler)
            },
            updated() {
                let ins = Popover.getInstance(el)
                if (ins) ins.update()
            },
            beforeUnmount() {
                let ins = Popover.getInstance(el)
                if (ins) ins.dispose()
                el.$vb.popover = undefined
            },
            unmounted() {
                el.removeEventListener('show.bs.popover', showEventHandler)
                el.removeEventListener('shown.bs.popover', shownEventHandler)
                el.removeEventListener('hide.bs.popover', hideEventHandler)
                el.removeEventListener('hidden.bs.popover', hiddenEventHandler)
                el.removeEventListener('inserted.bs.popover', insertedEventHandler)
            }
        }
    },

}

