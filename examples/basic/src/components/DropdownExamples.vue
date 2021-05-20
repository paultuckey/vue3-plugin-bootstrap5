<template>
    <div>
        <div class="mb-4 col-4">
            <h2>Dropdown</h2>

            <div class="dropdown">
                <button v-vb-is:dropdown ref="exampleDropdown1"
                        @vb-shown-bs-dropdown="exampleDropdown1Shown"
                        class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>

export default {
    name: 'DropdownExamples',
    methods: {
      exampleDropdown1Shown() {
        console.log('example Dropdown 1 Shown', this.$refs.exampleDropdown1.$vb.dropdown);
      }
    }
}

</script>

