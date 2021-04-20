

export { default as VbModal } from './VbModal';
export { default as VbToast } from './VbToast';
export { default as VbTooltip } from './VbTooltip';
export { default as VbOffcanvas } from './VbOffcanvas';


export function createVbPlugin(components) {
    return {

        /**
         * Initialize vue plugins
         *
         * @param {Object} app
         */
        install(app) {
            //console.log('createVbPlugins install', app)

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

            app.directive('vb-is', {
                created(el, binding) {
                    //console.log('is created', binding.arg, components)
                    if (binding.arg === 'modal' && components.VbModal) {
                        handlerObjs.push({directiveType: 'is', el: el, arg: binding.arg,
                            handlerIns: components.VbModal.createIsHandler(el, binding)})

                    } else if (binding.arg === 'offcanvas' && components.VbOffcanvas) {
                        handlerObjs.push({directiveType: 'is', el: el, arg: binding.arg,
                            handlerIns: components.VbOffcanvas.createIsHandler(el, binding)})

                    } else if (binding.arg === 'toast' && components.VbToast) {
                        handlerObjs.push({directiveType: 'is', el: el, arg: binding.arg,
                            handlerIns: components.VbToast.createIsHandler(el, binding)})

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
                    if (binding.arg === 'modal' && components.VbModal) {
                        handlerObjs.push({directiveType: 'toggle', el: el, arg: binding.arg,
                            handlerIns: components.VbModal.createToggleHandler(el, binding)})

                    } else if (binding.arg === 'offcanvas' && components.VbOffcanvas) {
                        handlerObjs.push({directiveType: 'toggle', el: el, arg: binding.arg,
                            handlerIns: components.VbOffcanvas.createToggleHandler(el, binding)})

                    } else if (binding.arg === 'tooltip' && components.VbTooltip) {
                        handlerObjs.push({directiveType: 'toggle', el: el, arg: binding.arg,
                            handlerIns: components.VbTooltip.createToggleHandler(el, binding)})
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
                    if (binding.arg === 'modal' && components.VbModal) {
                        handlerObjs.push({directiveType: 'dismiss', el: el, arg: binding.arg,
                            handlerIns: components.VbModal.createDismissHandler(el, binding)
                        })

                    } else if (binding.arg === 'offcanvas' && components.VbOffcanvas) {
                        handlerObjs.push({directiveType: 'dismiss', el: el, arg: binding.arg,
                            handlerIns: components.VbOffcanvas.createDismissHandler(el, binding)})

                    } else if (binding.arg === 'toast' && components.VbToast) {
                        handlerObjs.push({directiveType: 'dismiss', el: el, arg: binding.arg,
                            handlerIns: components.VbToast.createDismissHandler(el, binding)})
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
