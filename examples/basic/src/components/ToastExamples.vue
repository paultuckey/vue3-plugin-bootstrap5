<template>
    <div>

        <div class="mb-4">
            <h2>Toast</h2>

            <div class="btn btn-primary me-3" @click.prevent="showToast1()">Toast</div>

            <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
                <div v-vb-is:toast ref="toast1" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                        <img src="http://placeimg.com/50/50/nature" class="rounded me-2" alt="...">
                        <strong class="me-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body">
                        Hello, world! This is a toast message.
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

export default {
  name: 'ToastExamples',
  methods: {
    showToast1() {
      this.$refs.toast1.$vb.toast.show();
    }
  }
}

</script>

