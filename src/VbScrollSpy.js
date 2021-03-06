

export default {

    createIsHandler(ScrollSpy, el, binding) {
        //console.log('scrollspy createIsHandler')

        let activateEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-activate-bs-scrollspy', true, true)
            el.dispatchEvent(evt)
        }
        return {
            created() {
                if (!el.$vb) el.$vb = {};
            },
            beforeMount() {
                //console.log('scrollspy beforeMount', el)
                let ins = ScrollSpy.getInstance(el)
                if (!ins) ins = new ScrollSpy(el, binding.value)
                el.$vb.scrollspy = ins

                el.addEventListener('activate.bs.scrollspy', activateEventHandler)
            },
            updated() {
                let ins = ScrollSpy.getInstance(el)
                if (ins) ins.refresh()
            },
            beforeUnmount() {
                let ins = ScrollSpy.getInstance(el)
                if (ins) ins.dispose()
                el.$vb.scrollspy = undefined
                el.removeEventListener('activate.bs.scrollspy', activateEventHandler)
            }
        }
    },



}

