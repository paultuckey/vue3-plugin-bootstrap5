<template>
    <div>

        <div class="mb-4 col-4">
            <h2>Carousel</h2>

            <div v-vb-is:carousel
                    id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://placekitten.com/320/180" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://placekitten.com/320/180" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://placekitten.com/320/180" class="d-block w-100" alt="...">
                    </div>
                </div>
            </div>

            <h2>Carousel with controls</h2>

            <div v-vb-is:carousel ref="exampleCarousel2"
                    v-vb-on:slide.bs.carousel="carouselSlide"
                    v-vb-on:slid.bs.carousel="carouselSlide"
                    id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://placekitten.com/320/180" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://placekitten.com/320/180" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://placekitten.com/320/180" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <button @click.prevent="$refs.exampleCarousel2.$vb.carousel.prev()"
                    type="button" class="btn btn-light">Prev</button>
            <button @click.prevent="$refs.exampleCarousel2.$vb.carousel.next()"
                    type="button" class="btn btn-light">Next</button>



        </div>

    </div>
</template>

<script>

export default {
    name: 'CarouselExamples',
    methods: {
        carouselSlide(e) {
            console.log('carouselSlide', e.direction, e.relatedTarget, e.from, e.to);
            // Bootstrap object: e.target.$vb.carousel
        },
        carouselSlid(e) {
            console.log('carouselSlid', e.direction, e.relatedTarget, e.from, e.to);
        }
    }
}

</script>

