

export default {
    createIsHandler(Alert, el, binding) {
        //console.log('alert createIsHandler', el, binding)
        return {
            beforeMount() {
                if (!el.$vb) el.$vb = {};
                let ins = Alert.getInstance(el)
                if (!ins) ins = new Alert(el, binding.value)
                el.$vb.alert = ins
            },
            beforeUnmount() {
                let ins = Alert.getInstance(el)
                if (ins) ins.dispose()
            }
        }
    },


}


