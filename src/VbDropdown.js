

export default {

    createIsHandler(Dropdown, el, binding) {
        //console.log('dropdown createIsHandler')
        return {
            beforeMount() {
                //console.log('dropdown beforeMount', el)
                if (el.classList && !el.classList.contains('dropdown')) el.classList.add('dropdown')
                if (!el.$vb) el.$vb = {};
                let ins = Dropdown.getInstance(el)
                if (!ins) ins = new Dropdown(el, binding.value)
                el.$vb.dropdown = ins
            },
            updated() {
                if (el.classList && !el.classList.contains('dropdown')) el.classList.add('dropdown')
                let ins = Dropdown.getInstance(el)
                if (ins) ins.update()
            },
            beforeUnmount() {
                let ins = Dropdown.getInstance(el)
                if (!ins) ins.dispose()
                el.$vb.dropdown = undefined
            }
        }
    },

    createToggleHandler(Dropdown, el, binding) {
        //console.log('createToggleHandler', el, binding)
        let clickHandler = async function (e) {
            e.preventDefault()
            e.stopPropagation()
            //console.log('dropdown toggle click', el, binding.value, el.dataset.bsTarget)
            let targetEl = null
            if (binding.value) {
                let refObj = binding.instance.$refs[binding.value]
                targetEl = refObj && refObj.$el ? refObj.$el : refObj
            } else if (el.dataset.bsTarget) {
                targetEl = document.querySelector(el.dataset.bsTarget)
            }
            if (targetEl) {
                let ins = Dropdown.getInstance(targetEl)
                if (ins) ins.toggle(el)
            }
        }
        return {
            beforeMount() {
                //console.log('dropdown toggle beforemount')
                el.addEventListener('click', clickHandler);
            },
            beforeUnmount() {
                el.removeEventListener('click', clickHandler);
            }
        }
    },


}

