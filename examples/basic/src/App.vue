<template>
    <div class="container">
        <h1>Examples for Vue3 Plugin for Bootstrap 5</h1>
        <AlertExamples />
        <CarouselExamples />
        <CollapseExamples />
        <DropdownExamples />
        <ModalExamples />
        <NavsTabsExamples />
        <OffcanvasExamples />
        <PopoverExamples />
        <ScrollSpyExamples />
        <TooltipExamples />
    </div>
</template>

<script>

import 'bootstrap/dist/css/bootstrap.min.css'

import AlertExamples from './components/AlertExamples.vue'
import CarouselExamples from './components/CarouselExamples'
import CollapseExamples from "./components/CollapseExamples";
import DropdownExamples from "./components/DropdownExamples";
import ModalExamples from './components/ModalExamples.vue'
import NavsTabsExamples from "./components/NavsTabsExamples";
import OffcanvasExamples from "./components/OffcanvasExamples.vue";
import PopoverExamples from "./components/PopoverExamples";
import ScrollSpyExamples from "./components/ScrollSpyExamples";
import TooltipExamples from "./components/TooltipExamples.vue";

export default {
  name: 'App',
  components: {
    AlertExamples,
    CarouselExamples,
    CollapseExamples,
    DropdownExamples,
    ModalExamples,
    NavsTabsExamples,
    OffcanvasExamples,
    PopoverExamples,
    ScrollSpyExamples,
    TooltipExamples
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
