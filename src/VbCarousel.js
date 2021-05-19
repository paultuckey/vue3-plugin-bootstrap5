

export default {

    createIsHandler(Carousel, el, binding) {
        //console.log('carousel createIsHandler')
        return {
            beforeMount() {
                //console.log('carousel beforeMount', el)
                if (!el.$vb) el.$vb = {};
                let ins = Carousel.getInstance(el)
                if (!ins) ins = new Carousel(el, binding.value)
                el.$vb.carousel = ins
            },
            beforeUnmount() {
                let ins = Carousel.getInstance(el)
                if (ins) ins.dispose()
                el.$vb.carousel = undefined
            }
        }
    },

    createSlideHandler(Carousel, el, binding) {
        //console.log('carousel createSlideHandler', el, binding)
        let getParentCarousel = function(el) {
            let currNode = el
            while (currNode) {
                if (currNode && currNode.classList && currNode.classList.contains('carousel')) {
                    break
                }
                currNode = currNode.parentNode
            }
            return currNode
        }
        let clickHandler = function (e) {
            e.preventDefault()
            e.stopPropagation()
            //console.log('carousel', binding)
            let carouselEl = getParentCarousel(e.target)
            if (carouselEl) {
                let ins = Carousel.getInstance(carouselEl)
                if (ins && binding.arg === 'prev') ins.prev();
                else if (ins && binding.arg === 'next') ins.next();
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
    },

    createSlideToHandler(Carousel, el, binding) {
        //console.log('carousel createSlideHandler', el, binding)
        let getParentCarousel = function(el) {
            let currNode = el
            while (currNode) {
                if (currNode && currNode.classList && currNode.classList.contains('carousel')) {
                    break
                }
                currNode = currNode.parentNode
            }
            return currNode
        }
        let clickHandler = function (e) {
            e.preventDefault()
            e.stopPropagation()
            //console.log('carousel', binding)

            let carouselEl = getParentCarousel(e.target)
            if (carouselEl) {
                let ins = Carousel.getInstance(carouselEl)
                if (ins && binding.arg) {
                    let toIdx = Number(binding.arg);
                    if (!Number.isNaN(toIdx)) ins.to(toIdx)
                }
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

