

export default {
    createIsHandler(Tab, el, binding) {
        //console.log('tab createIsHandler', el, binding)
        return {
            beforeMount() {
                if (!el.$vb) el.$vb = {};
                let ins = Tab.getInstance(el)
                if (!ins) ins = new Tab(el, binding.value)
                el.$vb.tab = ins
            },
            beforeUnmount() {
                let ins = Tab.getInstance(el)
                if (ins) ins.dispose()
            }
        }
    },

}


