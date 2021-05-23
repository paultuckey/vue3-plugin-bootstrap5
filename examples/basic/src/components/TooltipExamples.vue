<template>
    <div>

        <div class="mb-4">
            <h2>Tooltip</h2>

            <button v-vb-is:tooltip title="Hello World"
                class="btn btn-primary me-3">Tooltip via title attribute</button>

            <button v-vb-is:tooltip="{title: 'Hello World'}"
                class="btn btn-secondary me-3">Tooltip via object</button>

        </div>

    </div>
</template>

<script>

export default {
    name: 'TooltipExamples',
    methods: {
        //
    }
}

</script>

