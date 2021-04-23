

export default {

    createIsHandler(Carousel, el, binding) {
        //console.log('carousel createIsHandler')
        return {
            beforeMount() {
                //console.log('carousel beforeMount', el)
                if (el.classList && !el.classList.contains('carousel')) el.classList.add('carousel')
                if (!el.$vb) el.$vb = {};
                let ins = Carousel.getInstance(el)
                if (!ins) ins = new Carousel(el, binding.value)
                el.$vb.carousel = ins
            },
            updated() {
                if (el.classList && !el.classList.contains('carousel')) el.classList.add('carousel')
            },
            beforeUnmount() {
                let ins = Carousel.getInstance(el)
                if (!ins) ins.dispose()
                el.$vb.carousel = undefined
            }
        }
    },




}

