<template>
  <div>

      <div class="mb-4">
          <h2>Popover</h2>

          <button v-vb-is:popover type="button" class="btn btn-secondary me-2"
                  data-bs-toggle="popover"
                  title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>

          <button v-vb-is:popover type="button" class="btn btn-secondary me-2"
                  data-bs-toggle="popover"
                  data-bs-trigger="hover"
                  title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Hover to toggle popover</button>

          <div class="d-none">
              <div ref="popoverExample1">
                  Hello World
                  <button type="button" class="btn btn-danger">Button</button>
              </div>
          </div>

          <button
            v-vb-is:popover="{content: () => $refs.popoverExample1}" type="button"
            data-bs-trigger="hover focus" data-bs-html="true"
            class="btn btn-secondary me-2">Click to toggle $ref popover</button>

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

