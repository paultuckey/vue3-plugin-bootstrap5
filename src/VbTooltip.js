import {Tooltip} from "bootstrap";

export default {

    createToggleHandler(el) {
        //console.log('modal createToggleHandler', el)
        return {
            beforeMount() {
                if (!el.$vb) el.$vb = {};
                let ins = Tooltip.getInstance(el)
                if (!ins) ins = new Tooltip(el)
                el.$vb.tooltip = ins
            },
            updated() {
                let ins = Tooltip.getInstance(el)
                if (ins) ins.update()
            },
            beforeUnmount() {
                let ins = Tooltip.getInstance(el)
                if (ins) ins.dispose()
                el.$vb.tooltip = undefined
            }
        }
    }
}