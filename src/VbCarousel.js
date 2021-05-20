

export default {

    createIsHandler(Carousel, el, binding) {
        //console.log('carousel createIsHandler')
        let slideEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-slide-bs-carousel', true, true)
            el.dispatchEvent(evt)
        }
        let slidEventHandler = () => {
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('vb-slid-bs-carousel', true, true)
            el.dispatchEvent(evt)
        }

        return {
            beforeMount() {
                //console.log('carousel beforeMount', el)
                if (!el.$vb) el.$vb = {};
                let ins = Carousel.getInstance(el)
                if (!ins) ins = new Carousel(el, binding.value)
                el.$vb.carousel = ins
                el.addEventListener('slide.bs.carousel', slideEventHandler)
                el.addEventListener('slid.bs.carousel', slidEventHandler)
            },
            beforeUnmount() {
                let ins = Carousel.getInstance(el)
                if (ins) ins.dispose()
                el.$vb.carousel = undefined
            },
            unmounted() {
                el.removeEventListener('slide.bs.carousel', slideEventHandler)
                el.removeEventListener('slid.bs.carousel', slidEventHandler)
            }
        }
    },


}

