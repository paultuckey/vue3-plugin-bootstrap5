<template>
    <div aria-live="polite" aria-atomic="true" class="position-relative">
        <div class="toast-container position-fixed top-0 start-50 translate-middle-x p-3" style="z-index: 5">
            <div role="alert" aria-live="assertive" aria-atomic="true"
                 v-for="toast in toasts" :class="['toast show fade align-items-center', toast.toastClass]" >
                <div class="d-flex">
                    <div class="toast-body">{{ toast.msg }}</div>
                    <button type="button" :class="['btn-close me-2 m-auto', toast.closeClass]" data-bs-dismiss="toast"
                            @click.prevent="eatToast(toast)" aria-label="Close"></button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

let _ins = null;

export default {
    name: 'VbToast',
    data() {
        return {
            toasts: []
        }
    },
    created() {
        //console.log('created', this);
        _ins = this;
    },
    mounted() {
        //console.log('mounted', this);
        _ins = this;
    },
    methods: {
        addToast(toast) {
            this.toasts.push(toast);
            setTimeout(() => {
                this.eatToast(toast);
            }, toast.delay);
        },
        eatToast(toast) {
            let toastIdx = this.toasts.indexOf(toast);
            if (toastIdx !== -1) this.toasts.splice(toast, 1);
        }
    },
    info(msg) {
        _ins.addToast({msg: msg, delay: 5000, toastClass: 'text-white bg-primary', closeClass: 'btn-close-white'});
    },
    err(msg) {
        _ins.addToast({msg: msg, delay: 10000, toastClass: 'text-white bg-danger', closeClass: 'btn-close-white'});
    }
}

</script>