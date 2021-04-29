

export default {

    createIsHandler(Popover, el, binding) {
        //console.log('popover createIsHandler')
        return {
            beforeMount() {
                //console.log('popover beforeMount', el)
                if (el.classList && !el.classList.contains('popover')) el.classList.add('popover')
                if (!el.$vb) el.$vb = {};
                let ins = Popover.getInstance(el)
                if (!ins) ins = new Popover(el, binding.value)
                el.$vb.popover = ins
            },
            updated() {
                if (el.classList && !el.classList.contains('popover')) el.classList.add('popover')
                let ins = Popover.getInstance(el)
                if (ins) ins.update()
            },
            beforeUnmount() {
                let ins = Popover.getInstance(el)
                if (!ins) ins.dispose()
                el.$vb.popover = undefined
            }
        }
    },

    createToggleHandler(Popover, el, binding) {
        //console.log('createToggleHandler', el, binding)
        let clickHandler = async function (e) {
            e.preventDefault()
            e.stopPropagation()
            //console.log('popover toggle click', el, binding.value, el.dataset.bsTarget)
            let targetEl = null
            if (binding.value) {
                let refObj = binding.instance.$refs[binding.value]
                targetEl = refObj && refObj.$el ? refObj.$el : refObj
            } else if (el.dataset.bsTarget) {
                targetEl = document.querySelector(el.dataset.bsTarget)
            }
            if (targetEl) {
                let ins = Popover.getInstance(targetEl)
                if (ins) ins.toggle(el)
            }
        }
        return {
            beforeMount() {
                //console.log('popover toggle beforemount')
                el.addEventListener('click', clickHandler);
            },
            beforeUnmount() {
                el.removeEventListener('click', clickHandler);
            }
        }
    },


}

