

export default {

    createIsHandler(Popover, el, binding) {
        //console.log('popover createIsHandler')
        return {
            beforeMount() {
                //console.log('popover beforeMount', el)
                if (!el.$vb) el.$vb = {};
                let ins = Popover.getInstance(el)
                if (!ins) ins = new Popover(el, binding.value)
                el.$vb.popover = ins
            },
            updated() {
                let ins = Popover.getInstance(el)
                if (ins) ins.update()
            },
            beforeUnmount() {
                let ins = Popover.getInstance(el)
                if (ins) ins.dispose()
                el.$vb.popover = undefined
            }
        }
    },

}

