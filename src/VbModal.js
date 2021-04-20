
import { Modal } from 'bootstrap'


export default {

    createIsHandler(el, binding) {
        //console.log('modal createIsHandler')
        return {
            beforeMount() {
                //console.log('modal beforeMount', el)
                if (el.classList && !el.classList.contains('modal')) el.classList.add('modal')
                if (!el.$vb) el.$vb = {};
                let ins = Modal.getInstance(el)
                if (!ins) ins = new Modal(el, binding.value)
                el.$vb.modal = ins
            },
            updated() {
                if (el.classList && !el.classList.contains('modal')) el.classList.add('modal')
                let ins = Modal.getInstance(el)
                if (ins) ins.handleUpdate()
            },
            beforeUnmount() {
                let ins = Modal.getInstance(el)
                if (!ins) ins.dispose()
                el.$vb.modal = undefined
            }
        }
    },

    createToggleHandler(el, binding) {
        //console.log('createToggleHandler', el, binding)
        let clickHandler = async function (e) {
            e.preventDefault()
            e.stopPropagation()
            //console.log('modal toggle click', el, binding.value, el.dataset.vbTarget)
            let targetEl = null
            if (binding.value) {
                targetEl = binding.instance.$refs[el.dataset.vbTarget]
            } else if (el.dataset.vbTarget) {
                targetEl = document.querySelector(el.dataset.vbTarget)
            }
            if (targetEl) {
                let ins = Modal.getInstance(targetEl)
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

    createDismissHandler(el, binding) {
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

