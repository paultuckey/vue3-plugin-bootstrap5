

import VbAlert from './VbAlert'
import VbCarousel from './VbCarousel'
// todo: Collapse
// todo: Dropdown
import VbOffcanvas from './VbOffcanvas';
import VbModal from './VbModal';
// todo: Popover
// todo: ScrollSpy
// todo: Tab (Listgroup, Navs)
import VbToast from './VbToast';
import VbTooltip from './VbTooltip';


export function createVbPlugin(bootstrapObjects) {
    return {

        /**
         * Initialize vue plugins
         *
         * @param {Object} app
         */
        install(app) {
            //console.log('createVbPlugins install', app)
            if (!bootstrapObjects) bootstrapObjects = {}
            let handlerConfs = {
                alert: { bsObject: bootstrapObjects.Alert, handlerObject: VbAlert },
                carousel: { bsObject: bootstrapObjects.Carousel, handlerObject: VbCarousel },
                offcanvas: { bsObject: bootstrapObjects.Offcanvas, handlerObject: VbOffcanvas },
                modal: { bsObject: bootstrapObjects.Modal, handlerObject: VbModal },
                toast: { bsObject: bootstrapObjects.Toast, handlerObject: VbToast },
                tooltip: { bsObject: bootstrapObjects.Tooltip, handlerObject: VbTooltip }
            }

            let handlerObjs = []
            let getHandler = function(directiveType, el, binding, removeHandler) {
                //console.log('getHandler', directiveType)
                let handlerIdx = handlerObjs.findIndex(handler => {
                    return handler.directiveType === directiveType && handler.el === el && handler.arg === binding.arg
                })
                //console.log('handlerIdx', handlerIdx)
                if (handlerIdx !== -1) {
                    let handler = handlerObjs[handlerIdx]
                    if (removeHandler) handlerObjs.splice(handlerIdx, 1)
                    return handler
                }
                return null
            }
            let addHandler = function(directiveType, el, binding, handlerFn) {
                handlerObjs.push({
                    directiveType: directiveType, el: el, arg: binding.arg,
                    handlerIns: handlerFn
                })
            }

            app.directive('vb-is', {
                created(el, binding) {
                    //console.log('is created', binding.arg, components)
                    let handlerConf = handlerConfs[binding.arg]
                    if (handlerConf && handlerConf.bsObject && handlerConf.handlerObject &&
                        handlerConf.handlerObject.createIsHandler) {
                        let handlerFn = handlerConf.handlerObject.createIsHandler(handlerConf.bsObject, el, binding)
                        addHandler('is', el, binding, handlerFn)
                    }
                },
                beforeMount(el, binding) {
                    let handler = getHandler('is', el, binding, false)
                    if (handler) handler.handlerIns.beforeMount()
                },
                beforeUnmount(el, binding) {
                    let handler = getHandler('is', el, binding, true)
                    if (handler) handler.handlerIns.beforeUnmount()
                },
            })

            app.directive('vb-toggle', {
                created(el, binding) {
                    let handlerConf = handlerConfs[binding.arg]
                    if (handlerConf && handlerConf.bsObject && handlerConf.handlerObject &&
                        handlerConf.handlerObject.createToggleHandler) {
                        let handlerFn = handlerConf.handlerObject.createToggleHandler(handlerConf.bsObject, el, binding)
                        addHandler('toggle', el, binding, handlerFn)
                    }
                },
                beforeMount(el, binding) {
                    //console.log('vb-toggle beforeMount', el, binding)
                    let handler = getHandler('toggle', el, binding, false)
                    if (handler) handler.handlerIns.beforeMount()
                },
                beforeUnmount(el, binding) {
                    let handler = getHandler('toggle', el, binding, true)
                    if (handler) handler.handlerIns.beforeUnmount()
                }
            })

            app.directive('vb-dismiss', {
                created(el, binding) {
                    let handlerConf = handlerConfs[binding.arg]
                    if (handlerConf && handlerConf.bsObject && handlerConf.handlerObject &&
                        handlerConf.handlerObject.createDismissHandler) {
                        let handlerFn = handlerConf.handlerObject.createDismissHandler(handlerConf.bsObject, el, binding)
                        addHandler('dismiss', el, binding, handlerFn)
                    }
                },
                beforeMount(el, binding) {
                    let handler = getHandler('dismiss', el, binding, false)
                    if (handler) handler.handlerIns.beforeMount()
                },
                beforeUnmount(el, binding) {
                    let handler = getHandler('dismiss', el, binding, true)
                    if (handler) handler.handlerIns.beforeUnmount()
                }
            })


            // not specific to a bs type

            app.directive('vb-on', {
                beforeMount(el, binding) {
                    //console.log('on mount', el, binding.arg, binding)
                    if (binding.arg) {
                        let eventName = binding.arg + '.' + Object.keys(binding.modifiers).map(key => key).join('.');
                        //console.log('eventName', eventName)
                        el.addEventListener(eventName, binding.value)
                    }
                },
                beforeUnmount(el, binding) {
                    //console.log('on umount', el, binding.arg, binding)
                    if (binding.arg) {
                        let eventName = binding.arg + '.' + Object.keys(binding.modifiers).map(key => key).join('.');
                        //console.log('unmount eventName', eventName)
                        el.addEventListener(eventName, binding.value)
                    }
                }
            })
        }
    }
}
