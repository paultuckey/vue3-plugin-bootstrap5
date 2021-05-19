

export default {

    createIsHandler(Dropdown, el, binding) {
        //console.log('dropdown createIsHandler')
        return {
            beforeMount() {
                //console.log('dropdown beforeMount', el)
                if (!el.$vb) el.$vb = {};
                let ins = Dropdown.getInstance(el)
                if (!ins) ins = new Dropdown(el, binding.value)
                el.$vb.dropdown = ins
            },
            updated() {
                let ins = Dropdown.getInstance(el)
                if (ins) ins.update()
            },
            beforeUnmount() {
                let ins = Dropdown.getInstance(el)
                if (ins) ins.dispose()
                el.$vb.dropdown = undefined
            }
        }
    },



}

