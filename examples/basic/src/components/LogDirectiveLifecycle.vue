<template>
    <div>

        <div class="mb-4">
            <h2>Log Directive Lifecycle</h2>

            <div class="d-flex">
                <button @click.prevent="showDiv=!showDiv" class="btn btn-primary me-3">Show/hide</button>
                <button @click.prevent="counter++" class="btn btn-secondary me-3">Counter++</button>
                <div v-if="showDiv" v-log-directive-lifecycle>I have a directive, check your logs.  Counter {{ counter }}</div>
            </div>

        </div>

    </div>
</template>

<script>

export default {
  name: 'Vue3DirectiveExample',
  data() {
    return {
      showDiv: false,
      counter: 0
    }
  },
  methods: {
    //

  }
}

</script>

