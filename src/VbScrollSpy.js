

export default {

    createIsHandler(ScrollSpy, el, binding) {
        //console.log('scrollspy createIsHandler')
        return {
            beforeMount() {
                //console.log('scrollspy beforeMount', el)
                if (!el.$vb) el.$vb = {};
                let ins = ScrollSpy.getInstance(el)
                if (!ins) ins = new ScrollSpy(el, binding.value)
                el.$vb.scrollspy = ins
            },
            updated() {
                let ins = ScrollSpy.getInstance(el)
                if (ins) ins.refresh()
            },
            beforeUnmount() {
                let ins = ScrollSpy.getInstance(el)
                if (!ins) ins.dispose()
                el.$vb.scrollspy = undefined
            }
        }
    },

    createSpyHandler(ScrollSpy, el, binding) {
        //console.log('scrollspy createIsHandler')
        if (binding.arg === 'scroll') {
            return {
                beforeMount() {
                    //console.log('scrollspy beforeMount', el)
                    if (!el.$vb) el.$vb = {};
                    let ins = ScrollSpy.getInstance(el)
                    if (!ins) ins = new ScrollSpy(el, binding.value)
                    el.$vb.scrollspy = ins
                },
                updated() {
                    let ins = ScrollSpy.getInstance(el)
                    if (ins) ins.refresh()
                },
                beforeUnmount() {
                    let ins = ScrollSpy.getInstance(el)
                    if (!ins) ins.dispose()
                    el.$vb.scrollspy = undefined
                }
            }
        } else {
            return null
        }
    },


}

