<template>
    <div class="container">
        <h1>Examples for Vue3 Plugin for Bootstrap 5</h1>
        <AlertExamples />
        <OffcanvasExamples />
        <ModalExamples />
        <TooltipExamples />
    </div>
</template>

<script>

import 'bootstrap/dist/css/bootstrap.min.css'

import AlertExamples from './components/AlertExamples.vue'
import OffcanvasExamples from "./components/OffcanvasExamples.vue";
import ModalExamples from './components/ModalExamples.vue'
import TooltipExamples from "./components/TooltipExamples.vue";

export default {
  name: 'App',
  components: {
      AlertExamples,
      OffcanvasExamples,
      ModalExamples,
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
