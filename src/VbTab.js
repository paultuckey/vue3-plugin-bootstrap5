

export default {
    createIsHandler(Tab, el, binding) {
        //console.log('tab createIsHandler', el, binding)
        return {
            beforeMount() {
                if (el.classList && !el.classList.contains('tab')) el.classList.add('tab')
                if (!el.$vb) el.$vb = {};
                let ins = Tab.getInstance(el)
                if (!ins) ins = new Tab(el, binding.value)
                el.$vb.tab = ins
            },
            updated() {
                if (el.classList && !el.classList.contains('tab')) el.classList.add('tab')
            },
            beforeUnmount() {
                let ins = Tab.getInstance(el)
                if (ins) ins.dispose()
            }
        }
    },

    createToggleHandler(Tab, el, binding) {
        //console.log('createToggleHandler', el, binding)
        let clickHandler = async function (e) {
            e.preventDefault()
            e.stopPropagation()
            //console.log('tab toggle click', el, binding.value, el.dataset.bsTarget)
            let targetEl = null
            if (binding.value) {
                let refObj = binding.instance.$refs[binding.value]
                targetEl = refObj && refObj.$el ? refObj.$el : refObj
            } else if (el.dataset.bsTarget) {
                targetEl = document.querySelector(el.dataset.bsTarget)
            }
            if (targetEl) {
                let ins = Tab.getInstance(targetEl)
                if (ins) ins.toggle(el)
            }
        }
        return {
            beforeMount() {
                //console.log('tab toggle beforemount')
                el.addEventListener('click', clickHandler);
            },
            beforeUnmount() {
                el.removeEventListener('click', clickHandler);
            }
        }
    },
}


