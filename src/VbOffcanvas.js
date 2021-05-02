

export default {

    createIsHandler(Offcanvas, el, binding) {
        //console.log('offcanvas createIsHandler')
        return {
            beforeMount() {
                //console.log('offcanvas beforeMount', el)
                if (el.classList && !el.classList.contains('offcanvas')) el.classList.add('offcanvas')
                if (!el.$vb) el.$vb = {};
                let ins = Offcanvas.getInstance(el)
                if (!ins) ins = new Offcanvas(el, binding.value)
                el.$vb.offcanvas = ins
            },
            updated() {
                if (el.classList && !el.classList.contains('offcanvas')) el.classList.add('offcanvas')
            },
            beforeUnmount() {
                let ins = Offcanvas.getInstance(el)
                if (ins) ins.dispose()
                el.$vb.offcanvas = undefined
            }
        }
    },

    createToggleHandler(Offcanvas, el, binding) {
        //console.log('createToggleHandler', el, binding)
        let clickHandler = async function (e) {
            e.preventDefault()
            e.stopPropagation()
            //console.log('offcanvas toggle click', el, binding.value, el.dataset.bsTarget)
            let targetEl = null
            if (binding.value) {
                let refObj = binding.instance.$refs[binding.value]
                targetEl = refObj && refObj.$el ? refObj.$el : refObj
            } else if (el.dataset.bsTarget) {
                targetEl = document.querySelector(el.dataset.bsTarget)
            }
            if (targetEl) {
                let ins = Offcanvas.getInstance(targetEl)
                if (ins) ins.toggle(el)
            }
        }
        return {
            beforeMount() {
                //console.log('offcanvas toggle beforemount')
                el.addEventListener('click', clickHandler);
            },
            beforeUnmount() {
                el.removeEventListener('click', clickHandler);
            }
        }
    },

    createDismissHandler(Offcanvas, el, binding) {
        let getParentOffcanvas = function(el) {
            let currNode = el
            while (currNode) {
                if (currNode && currNode.classList && currNode.classList.contains('offcanvas')) {
                    break
                }
                currNode = currNode.parentNode
            }
            return currNode
        }
        let clickHandler = function (e) {
            e.preventDefault()
            e.stopPropagation()
            //console.log('dismiss', binding)
            if (binding.value) {
                let allowedToClose = binding.value(e)
                //console.log('allowedToClose', allowedToClose)
                if (!allowedToClose) return
            }
            let offcanvasEl = getParentOffcanvas(e.target)
            if (offcanvasEl) {
                let ins = Offcanvas.getInstance(offcanvasEl)
                if (ins) ins.hide();
            }
        }
        return {
            beforeMount() {
                el.addEventListener('click', clickHandler);
            },
            beforeUnmount() {
                el.removeEventListener('click', clickHandler);
            }
        }
    }


}

