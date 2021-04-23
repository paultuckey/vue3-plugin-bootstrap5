

export default {
    createIsHandler(Alert, el, binding) {
        console.log('alert createIsHandler', el, binding)
        return {
            beforeMount() {
                if (el.classList && !el.classList.contains('alert')) el.classList.add('alert')
                if (!el.$vb) el.$vb = {};
                let ins = Alert.getInstance(el)
                if (!ins) ins = new Alert(el, binding.value)
                el.$vb.modal = ins
            },
            updated() {
                if (el.classList && !el.classList.contains('alert')) el.classList.add('alert')
            },
            beforeUnmount() {
                let ins = Alert.getInstance(el)
                if (ins) ins.dispose()
            }
        }
    },

    createDismissHandler(Alert, el, binding) {
        console.log('alert createIsHandler', el, binding)
        let getParentAlert = function(el) {
            let currNode = el
            while (currNode) {
                if (currNode && currNode.classList && currNode.classList.contains('alert')) {
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
            let alertEl = getParentAlert(e.target)
            if (alertEl) {
                let ins = Alert.getInstance(alertEl)
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


