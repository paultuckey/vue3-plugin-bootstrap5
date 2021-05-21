<template>
    <div>

        <div class="mb-4">
            <h2>ScrollSpy</h2>

            <nav id="navbar-example2" class="navbar navbar-light bg-light px-3">
                <a class="navbar-brand" href="#">Navbar</a>
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <a class="nav-link" href="#scrollspyHeading1">First</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#scrollspyHeading2">Second</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
                            <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div v-vb-is:scroll data-bs-spy="scroll" data-bs-target="#navbar-example2"
                 data-bs-offset="0" class="scrollspy-example" tabindex="0"
                 style="position: relative;height: 200px;margin-top: .5rem;overflow: auto;">
                <h4 id="scrollspyHeading1">First heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading2">Second heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading3">Third heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading4">Fourth heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading5">Fifth heading</h4>
                <p>...</p>
            </div>
        </div>

    </div>
</template>

<script>

export default {
  name: 'ScrollSpyExamples',
  methods: {
    //
  }
}

</script>

