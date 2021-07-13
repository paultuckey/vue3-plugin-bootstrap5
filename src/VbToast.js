

export default {

    createIsHandler(Toast, el, binding) {
        //console.log('toast createIsHandler')

        let showEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-show-bs-toast', true, true)
            el.dispatchEvent(evt)
        }
        let shownEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-shown-bs-toast', true, true)
            el.dispatchEvent(evt)
        }
        let hideEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-hide-bs-toast', true, true)
            el.dispatchEvent(evt)
        }
        let hiddenEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-hidden-bs-toast', true, true)
            el.dispatchEvent(evt)
        }

        return {
            created() {
                if (!el.$vb) el.$vb = {};
            },
            beforeMount() {
                //console.log('toast beforeMount', el)
                let ins = Toast.getInstance(el)
                if (!ins) ins = new Toast(el, binding.value)
                el.$vb.toast = ins

                el.addEventListener('show.bs.toast', showEventHandler)
                el.addEventListener('shown.bs.toast', shownEventHandler)
                el.addEventListener('hide.bs.toast', hideEventHandler)
                el.addEventListener('hidden.bs.toast', hiddenEventHandler)
            },
            updated() {
                let ins = Toast.getInstance(el)
                if (ins) ins.refresh()
            },
            beforeUnmount() {
                let ins = Toast.getInstance(el)
                if (ins) ins.dispose()
                el.$vb.toast = undefined
                el.removeEventListener('show.bs.toast', showEventHandler)
                el.removeEventListener('shown.bs.toast', shownEventHandler)
                el.removeEventListener('hide.bs.toast', hideEventHandler)
                el.removeEventListener('hidden.bs.toast', hiddenEventHandler)
            }
        }
    },


}


