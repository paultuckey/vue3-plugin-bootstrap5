
export default {

    createIsHandler(Tooltip, el, binding) {
        //console.log('tooltip createIsHandler')

        let showEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-show-bs-tooltip', true, true)
            el.dispatchEvent(evt)
        }
        let shownEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-shown-bs-tooltip', true, true)
            el.dispatchEvent(evt)
        }
        let hideEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-hide-bs-tooltip', true, true)
            el.dispatchEvent(evt)
        }
        let hiddenEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-hidden-bs-tooltip', true, true)
            el.dispatchEvent(evt)
        }
        let insertedEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-inserted-bs-tooltip', true, true)
            el.dispatchEvent(evt)
        }

        return {
            created() {
                if (!el.$vb) el.$vb = {};
            },
            beforeMount() {
                //console.log('scrollspy beforeMount', el)
                let ins = Tooltip.getInstance(el)
                if (!ins) ins = new Tooltip(el, binding.value)
                el.$vb.scrollspy = ins

                el.addEventListener('show.bs.tooltip', showEventHandler)
                el.addEventListener('shown.bs.tooltip', shownEventHandler)
                el.addEventListener('hide.bs.tooltip', hideEventHandler)
                el.addEventListener('hidden.bs.tooltip', hiddenEventHandler)
                el.addEventListener('inserted.bs.tooltip', insertedEventHandler)
            },
            updated() {
                let ins = Tooltip.getInstance(el)
                if (ins) ins.update()
            },
            beforeUnmount() {
                let ins = Tooltip.getInstance(el)
                if (ins) ins.dispose()
                el.$vb.tooltip = undefined
                el.removeEventListener('show.bs.tooltip', showEventHandler)
                el.removeEventListener('shown.bs.tooltip', shownEventHandler)
                el.removeEventListener('hide.bs.tooltip', hideEventHandler)
                el.removeEventListener('hidden.bs.tooltip', hiddenEventHandler)
                el.removeEventListener('inserted.bs.tooltip', insertedEventHandler)
            }
        }
    },
    
}