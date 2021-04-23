

export default {
    createIsHandler(Toast, el, binding) {
        //console.log('toast createIsHandler', el, binding)
        return {
            beforeMount() {
                if (el.classList && !el.classList.contains('toast')) el.classList.add('toast')
                if (!el.$vb) el.$vb = {};
                let ins = Toast.getInstance(el)
                if (!ins) ins = new Toast(el, binding.value)
                el.$vb.modal = ins
            },
            updated() {
                if (el.classList && !el.classList.contains('toast')) el.classList.add('toast')
            },
            beforeUnmount() {
                let ins = Toast.getInstance(el)
                if (ins) ins.dispose()
            }
        }
    },

    createDismissHandler(Toast, el, binding) {
        //console.log('toast createDismissHandler', el, binding)
        let getParentToast = function(el) {
            let currNode = el
            while (currNode) {
                if (currNode && currNode.classList && currNode.classList.contains('toast')) {
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
            let toastEl = getParentToast(e.target)
            if (toastEl) {
                let ins = Toast.getInstance(toastEl)
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


