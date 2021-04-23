<template>
  <div>

      <div class="mb-4">
          <h2>Alert dismiss</h2>

          <div v-vb-is:alert class="alert alert-warning alert-dismissible fade show" role="alert">
              <strong>Holy guacamole!</strong> You should check in on some of those fields below.
              <button v-vb-dismiss:alert type="button" class="btn-close" aria-label="Close"></button>
          </div>

      </div>

  </div>
</template>

<script>

export default {
    name: 'AlertExamples',
    methods: {
        //
    }
}

</script>

