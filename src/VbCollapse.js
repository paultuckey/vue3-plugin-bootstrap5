

export default {

    createIsHandler(Collapse, el, binding) {
        //console.log('collapse createIsHandler')
        return {
            beforeMount() {
                //console.log('collapse beforeMount', el)
                if (el.classList && !el.classList.contains('collapse')) el.classList.add('collapse')
                if (!el.$vb) el.$vb = {};
                let ins = Collapse.getInstance(el)
                if (!ins) ins = new Collapse(el, binding.value)
                el.$vb.collapse = ins
            },
            updated() {
                if (el.classList && !el.classList.contains('collapse')) el.classList.add('collapse')
            },
            beforeUnmount() {
                let ins = Collapse.getInstance(el)
                if (!ins) ins.dispose()
                el.$vb.collapse = undefined
            }
        }
    },

    createDismissHandler(Collapse, el, binding) {
        let getParentCollapse = function(el) {
            let currNode = el
            while (currNode) {
                if (currNode && currNode.classList && currNode.classList.contains('collapse')) {
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
            let collapseEl = getParentCollapse(e.target)
            if (collapseEl) {
                let ins = Collapse.getInstance(collapseEl)
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

