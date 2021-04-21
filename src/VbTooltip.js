
export default {

    createToggleHandler(Tooltip, el, binding) {
        //console.log('modal createToggleHandler', el)
        return {
            beforeMount() {
                if (!el.$vb) el.$vb = {};
                let ins = Tooltip.getInstance(el)

                let config = undefined
                if (binding.value && typeof binding.value === 'string') config = {title: binding.value}
                else if (binding.value && typeof binding.value === 'object') config = binding.value

                if (!ins) ins = new Tooltip(el, config)
                el.$vb.tooltip = ins
            },
            updated() {
                let ins = Tooltip.getInstance(el)
                if (ins) ins.update()
            },
            beforeUnmount() {
                let ins = Tooltip.getInstance(el)
                if (ins) ins.dispose()
                el.$vb.tooltip = undefined
            }
        }
    }
}