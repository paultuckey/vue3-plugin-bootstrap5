

export default {
    createIsHandler(Tab, el, binding) {
        //console.log('tab createIsHandler', el, binding)

        let showEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-show-bs-tab', true, true)
            el.dispatchEvent(evt)
        }
        let shownEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-shown-bs-tab', true, true)
            el.dispatchEvent(evt)
        }
        let hideEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-hide-bs-tab', true, true)
            el.dispatchEvent(evt)
        }
        let hiddenEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-hidden-bs-tab', true, true)
            el.dispatchEvent(evt)
        }

        return {
            created() {
                if (!el.$vb) el.$vb = {};
            },
            mounted() {
                let ins = Tab.getInstance(el)
                if (!ins) ins = new Tab(el, binding.value)
                el.$vb.tab = ins
                el.addEventListener('show.bs.tab', showEventHandler)
                el.addEventListener('shown.bs.tab', shownEventHandler)
                el.addEventListener('hide.bs.tab', hideEventHandler)
                el.addEventListener('hidden.bs.tab', hiddenEventHandler)
            },
            beforeUnmount() {
                let ins = Tab.getInstance(el)
                if (ins) ins.dispose()
                el.removeEventListener('show.bs.tab', showEventHandler)
                el.removeEventListener('shown.bs.tab', shownEventHandler)
                el.removeEventListener('hide.bs.tab', hideEventHandler)
                el.removeEventListener('hidden.bs.tab', hiddenEventHandler)
            }
        }
    },

}


