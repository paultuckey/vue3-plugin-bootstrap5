

export default {

    createIsHandler(Dropdown, el, binding) {
        //console.log('dropdown createIsHandler')
        let showEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-show-bs-dropdown', true, true)
            el.dispatchEvent(evt)
        }
        let shownEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-shown-bs-dropdown', true, true)
            el.dispatchEvent(evt)
        }
        let hideEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-hide-bs-dropdown', true, true)
            el.dispatchEvent(evt)
        }
        let hiddenEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-hidden-bs-dropdown', true, true)
            el.dispatchEvent(evt)
        }

        return {
            mounted() {  // bs requires we are in the dom before creation
                //console.log('dropdown beforeMount', el)
                if (!el.$vb) el.$vb = {};
                let ins = Dropdown.getInstance(el)
                if (!ins) ins = new Dropdown(el, binding.value)
                el.$vb.dropdown = ins
                el.addEventListener('show.bs.dropdown', showEventHandler)
                el.addEventListener('shown.bs.dropdown', shownEventHandler)
                el.addEventListener('hide.bs.dropdown', hideEventHandler)
                el.addEventListener('hidden.bs.dropdown', hiddenEventHandler)
            },
            updated() {
                let ins = Dropdown.getInstance(el)
                if (ins) ins.update()
            },
            beforeUnmount() {
                let ins = Dropdown.getInstance(el)
                if (ins) ins.dispose()
                el.$vb.dropdown = undefined
                el.removeEventListener('show.bs.dropdown', showEventHandler)
                el.removeEventListener('shown.bs.dropdown', shownEventHandler)
                el.removeEventListener('hide.bs.dropdown', hideEventHandler)
                el.removeEventListener('hidden.bs.dropdown', hiddenEventHandler)
            }
        }
    },



}

