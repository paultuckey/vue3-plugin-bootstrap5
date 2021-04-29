<template>
    <div>

        <div class="mb-4">
            <h2>Tabs</h2>

            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab"
                            v-vb-toggle:tab data-bs-target="#home"
                            type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab"
                            v-vb-toggle:tab="$refs.profileTab"
                            type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="contact-tab"
                            v-vb-toggle:tab="'#contact'"
                            type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">... home ...</div>
                <div class="tab-pane fade" ref="profileTab" role="tabpanel" aria-labelledby="profile-tab">... profile ...</div>
                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">... contact ...</div>
            </div>

        </div>
    </div>
</template>


<script>

export default {
    name: 'NavsTabsExamples',
    methods: {
        //
    }
}

</script>