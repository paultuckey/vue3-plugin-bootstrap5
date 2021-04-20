<template>
    <div>

        <div class="mb-4">
            <h2>Tooltip</h2>

            <button v-vb-toggle:tooltip title="Hello World"
                class="btn btn-secondary me-3">Tooltip via title attribute</button>

            <button v-vb-toggle:tooltip="'Hello World'"
                    class="btn btn-secondary me-3">Tooltip via string</button>

            <button v-vb-toggle:tooltip="{title: 'Hello World'}"
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

