

export default {
    createIsHandler(Alert, el, binding) {
        //console.log('alert createIsHandler', el, binding)
        let closeEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-close-bs-alert', true, true)
            el.dispatchEvent(evt)
        }
        let closedEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-closed-bs-alert', true, true)
            el.dispatchEvent(evt)
        }

        return {
            created() {
                if (!el.$vb) el.$vb = {};
            },
            beforeMount() {
                let ins = Alert.getInstance(el)
                if (!ins) ins = new Alert(el, binding.value)
                el.$vb.alert = ins
                el.addEventListener('close.bs.alert', closeEventHandler)
                el.addEventListener('closed.bs.alert', closedEventHandler)
            },
            beforeUnmount() {
                let ins = Alert.getInstance(el)
                if (ins) ins.dispose()
                el.$vb.alert = undefined
                el.removeEventListener('close.bs.alert', closeEventHandler)
                el.removeEventListener('closed.bs.alert', closedEventHandler)
            }
        }
    },


}


