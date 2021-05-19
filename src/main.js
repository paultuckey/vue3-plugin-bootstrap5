

import VbAlert from './VbAlert'
import VbCarousel from './VbCarousel'
import VbCollapse from './VbCollapse'
import VbDropdown from './VbDropdown'
import VbModal from './VbModal';
import VbOffcanvas from './VbOffcanvas';
import VbPopover from './VbPopover';
import VbScrollSpy from './VbScrollSpy'
import VbTab from './VbTab'
import VbToast from './VbToast';
import VbTooltip from './VbTooltip';


export function createVbPlugin(bootstrapObjects, options) {
    return {

        /**
         * Initialize vue plugins
         *
         * @param {Object} app
         */
        install(app) {
            //console.log('createVbPlugins install', app)
            if (!bootstrapObjects) bootstrapObjects = {}
            let baseOptions = Object.assign({
                vbModalBaseZindex: 1060  // same as $zindex-modal in https://github.com/twbs/bootstrap/blob/main/scss/_variables.scss
            }, options)

            let handlerConfs = {
                alert: { bsObject: bootstrapObjects.Alert, handlerObject: VbAlert },
                carousel: { bsObject: bootstrapObjects.Carousel, handlerObject: VbCarousel },
                collapse: { bsObject: bootstrapObjects.Collapse, handlerObject: VbCollapse },
                dropdown: { bsObject: bootstrapObjects.Dropdown, handlerObject: VbDropdown },
                modal: { bsObject: bootstrapObjects.Modal, handlerObject: VbModal },
                offcanvas: { bsObject: bootstrapObjects.Offcanvas, handlerObject: VbOffcanvas },
                popover: { bsObject: bootstrapObjects.Popover, handlerObject: VbPopover },
                scrollspy: { bsObject: bootstrapObjects.ScrollSpy, handlerObject: VbScrollSpy },
                tab: { bsObject: bootstrapObjects.Tab, handlerObject: VbTab },
                pill: { bsObject: bootstrapObjects.Tab, handlerObject: VbTab }, // special case for tab
                list: { bsObject: bootstrapObjects.Tab, handlerObject: VbTab }, // special case for tab
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
            let addHandler = function(directiveType, el, binding, handlerIns) {
                handlerObjs.push({
                    directiveType: directiveType, el: el, arg: binding.arg,
                    handlerIns: handlerIns
                })
            }

            app.directive('vb-is', {
                created(el, binding) {
                    //console.log('is created', binding.arg, components)
                    let handlerConf = handlerConfs[binding.arg]
                    if (handlerConf && handlerConf.bsObject && handlerConf.handlerObject &&
                        handlerConf.handlerObject.createIsHandler) {
                        let handlerIns = handlerConf.handlerObject.createIsHandler(handlerConf.bsObject, el, binding, baseOptions)
                        addHandler('is', el, binding, handlerIns)
                    }
                },
                beforeMount(el, binding) {
                    let handler = getHandler('is', el, binding, false)
                    if (handler && handler.handlerIns.beforeMount) handler.handlerIns.beforeMount()
                },
                mounted(el, binding) {
                    let handler = getHandler('is', el, binding, false)
                    if (handler && handler.handlerIns.mounted) handler.handlerIns.mounted()
                },
                updated(el, binding) {
                    let handler = getHandler('is', el, binding, false)
                    if (handler && handler.handlerIns.updated) handler.handlerIns.updated()
                },
                beforeUnmount(el, binding) {
                    let handler = getHandler('is', el, binding, false)
                    if (handler && handler.handlerIns.beforeUnmount) handler.handlerIns.beforeUnmount()
                },
                unmounted(el, binding) {
                    let handler = getHandler('is', el, binding, true)
                    if (handler && handler.handlerIns.unmounted) handler.handlerIns.unmounted()
                },
            })

            app.directive('vb-toggle', {
                created(el, binding) {
                    let handlerConf = handlerConfs[binding.arg]
                    if (handlerConf && handlerConf.bsObject && handlerConf.handlerObject &&
                            handlerConf.handlerObject.createToggleHandler) {
                        let handlerIns = handlerConf.handlerObject.createToggleHandler(handlerConf.bsObject, el, binding)
                        addHandler('toggle', el, binding, handlerIns)
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
                        let handlerIns = handlerConf.handlerObject.createDismissHandler(handlerConf.bsObject, el, binding)
                        addHandler('dismiss', el, binding, handlerIns)
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

            app.directive('vb-slide', {
                created(el, binding) {
                    let handlerConf = handlerConfs[binding.arg]
                    if (handlerConf && handlerConf.bsObject && handlerConf.handlerObject &&
                        handlerConf.handlerObject.createSlideHandler) {
                        let handlerIns = handlerConf.handlerObject.createSlideHandler(handlerConf.bsObject, el, binding)
                        addHandler('slide', el, binding, handlerIns)
                    }
                },
                beforeMount(el, binding) {
                    let handler = getHandler('slide', el, binding, false)
                    if (handler) handler.handlerIns.beforeMount()
                },
                beforeUnmount(el, binding) {
                    let handler = getHandler('slide', el, binding, true)
                    if (handler) handler.handlerIns.beforeUnmount()
                }
            })

            app.directive('vb-slide-to', {
                created(el, binding) {
                    let handlerConf = handlerConfs[binding.arg]
                    if (handlerConf && handlerConf.bsObject && handlerConf.handlerObject &&
                        handlerConf.handlerObject.createSlideToHandler) {
                        let handlerIns = handlerConf.handlerObject.createSlideToHandler(handlerConf.bsObject, el, binding)
                        addHandler('slide-to', el, binding, handlerIns)
                    }
                },
                beforeMount(el, binding) {
                    let handler = getHandler('slide-to', el, binding, false)
                    if (handler) handler.handlerIns.beforeMount()
                },
                beforeUnmount(el, binding) {
                    let handler = getHandler('slide-to', el, binding, true)
                    if (handler) handler.handlerIns.beforeUnmount()
                }
            })

            app.directive('vb-spy', {
                created(el, binding) {
                    let handlerConf = handlerConfs[binding.arg]
                    if (handlerConf && handlerConf.bsObject && handlerConf.handlerObject &&
                            handlerConf.handlerObject.createSlideToHandler) {
                        let handlerIns = handlerConf.handlerObject.createSpyHandler(handlerConf.bsObject, el, binding)
                        addHandler('scrollspy', el, binding, handlerIns)
                    }
                },
                beforeMount(el, binding) {
                    let handler = getHandler('scrollspy', el, binding, false)
                    if (handler) handler.handlerIns.beforeMount()
                },
                beforeUnmount(el, binding) {
                    let handler = getHandler('scrollspy', el, binding, true)
                    if (handler) handler.handlerIns.beforeUnmount()
                }
            })

        }
    }
}
