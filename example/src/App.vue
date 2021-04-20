<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <ModalExamples />
</template>

<script>
import ModalExamples from './components/ModalExamples.vue'

export default {
  name: 'App',
  components: {
      ModalExamples
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
