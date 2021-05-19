<template>
  <div>

      <div class="mb-4">
          <h2>Popover</h2>

          <button v-vb-is:popover type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover"
                  title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>

      </div>

  </div>
</template>

<script>

export default {
  name: 'PopoverExamples',
  methods: {
    //
  }
}

</script>

