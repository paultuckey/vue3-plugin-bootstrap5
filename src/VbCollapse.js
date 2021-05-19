

export default {

    createIsHandler(Collapse, el, binding) {
        //console.log('collapse createIsHandler')
        return {
            beforeMount() {
                //console.log('collapse beforeMount', el)
                if (!el.$vb) el.$vb = {};
                let ins = Collapse.getInstance(el)
                if (!ins) ins = new Collapse(el, binding.value)
                el.$vb.collapse = ins
            },
            beforeUnmount() {
                let ins = Collapse.getInstance(el)
                if (ins) ins.dispose()
                el.$vb.collapse = undefined
            }
        }
    },



}

