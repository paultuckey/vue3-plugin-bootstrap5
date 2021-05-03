
export default {

    createIsHandler(Modal, el, binding, baseOptions) {
        //console.log('modal createIsHandler')

        // bootstrap by default doesn't allow layering of modals, fix this when modal is shown by adjusting the zindex
        // of each new modal and it's backdrop
        let backdropFix = function() {
            let modalsVisible = document.querySelectorAll('.modal')
            let zIndex = baseOptions.vbModalBaseZindex + (10 * modalsVisible.length);
            el.style.zIndex = String(zIndex);
            setTimeout(function() {
                // ensure the backdrop is one back in the zindex
                let bdEl = document.querySelector('.modal-backdrop:not(.vb-modal-stack)')
                if (bdEl) {
                    bdEl.style.zIndex = String(zIndex - 1);
                    bdEl.classList.add('vb-modal-stack')
                }
                // remove this event handler
                el.removeEventListener('show.bs.modal', backdropFix)
            }, 0);
        }

        return {
            beforeMount() {
                //console.log('modal beforeMount', el)
                if (el.classList && !el.classList.contains('modal')) el.classList.add('modal')
                if (!el.$vb) el.$vb = {};
                let ins = Modal.getInstance(el)
                if (!ins) ins = new Modal(el, binding.value)
                el.$vb.modal = ins
                el.addEventListener('show.bs.modal', backdropFix)
            },
            mounted() {
                //console.log('modal mounted', el)
                let modifiers = Object.keys(binding.modifiers).map(key => key)
                if (modifiers && modifiers.length > 0 && modifiers[0] === 'show') {
                    let ins = Modal.getInstance(el)
                    if (ins) ins.show()
                }
            },
            updated() {
                if (el.classList && !el.classList.contains('modal')) el.classList.add('modal')
                let ins = Modal.getInstance(el)
                if (ins) ins.handleUpdate()
            },
            unmounted() {
                //console.log('vb-modal unmounted')
                let ins = Modal.getInstance(el)
                if (ins) ins.dispose()
                el.$vb.modal = undefined
            }
        }
    },

    createToggleHandler(Modal, el, binding) {
        //console.log('createToggleHandler', el, binding)
        let clickHandler = async function (e) {
            e.preventDefault()
            e.stopPropagation()
            //console.log('modal toggle click', el, binding.value, el.dataset.bsTarget)
            let targetEl = null
            if (binding.value) {
                let refObj = binding.instance.$refs[binding.value]
                targetEl = refObj && refObj.$el ? refObj.$el : refObj
            } else if (el.dataset.bsTarget) {
                targetEl = document.querySelector(el.dataset.bsTarget)
            }
            if (targetEl) {
                let ins = Modal.getInstance(targetEl)
                if (!ins) ins = new Modal(targetEl, binding.value)
                if (ins) ins.toggle(el)
            }
        }
        return {
            beforeMount() {
                //console.log('modal toggle beforemount')
                el.addEventListener('click', clickHandler);
            },
            beforeUnmount() {
                el.removeEventListener('click', clickHandler);
            }
        }
    },

    createDismissHandler(Modal, el, binding) {
        let getParentModal = function(el) {
            let currNode = el
            while (currNode) {
                if (currNode && currNode.classList && currNode.classList.contains('modal')) {
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
            let modalEl = getParentModal(e.target)
            if (modalEl) {
                let ins = Modal.getInstance(modalEl)
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

