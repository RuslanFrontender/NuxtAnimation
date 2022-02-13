// eslint-disable-next-line
import Vue from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default  ( $tftl ) => {
	Vue.directive('tftl-scale', {
    bind(el, binding) {
      const { transformOrigin = "center center" } = binding.value || {}
      const { arg } = binding
      let argOptions = {}
      switch(arg) {
        case 'right':
          argOptions = {
            scaleX: 0,
            transformOrigin: 'left center'
          }
          break;
        case 'left':
          argOptions = {
            scaleX: 0,
            transformOrigin: 'right center'
          }
          break;
        case 'up':
          argOptions = {
            scaleY: 0,
            transformOrigin: 'center bottom'
          }
          break;
          case 'down':
            argOptions = {
              scaleY: 0,
              transformOrigin: 'center top'
            }
            break;
        default:
          argOptions = { scale: 0 }
      }
      gsap.set(el, {
        transformOrigin,
        ...argOptions,
      })
    },

		inserted(el, binding) {
      // eslint-disable-next-line
			el.tftl = () => {
        // get optioins
				const { scrollTrigger = {}, delay = 0, duration = 1, ease = 'power2.inOut' } = binding.value || {}

        // get argument
        const { arg } = binding
        let argOptions = {}
        switch(arg) {
          case 'right':
            argOptions = {
              scaleX: 1,
            }
            break;
          case 'left':
            argOptions = {
              scaleX: 1,
            }
            break;
          case 'up':
            argOptions = {
              scaleY: 1,
            }
            break;
            case 'down':
              argOptions = {
                scaleY: 1,
              }
              break;
          default:
            argOptions = { scale: 1 }
        }
				const tl = gsap.timeline({
          ease: 'power2.outIn',
					scrollTrigger: {
						trigger: el,
						// toggleActions: "restart none none none",
						...scrollTrigger,
					}
				})
				tl.to(el, {
          ease,
					duration,
					delay,
          ...argOptions,
				})
			}
			$tftl.add(el)
		}
	})
  Vue.directive('tftl-svg-line', {
    bind(el, binding) {
        // get argument
        const { arg } = binding
        let argOptions = {}
        switch(arg) {
          case 'reverse':
            argOptions = {
              'stroke-dashoffset': -1,
            }
            break;
          default:
            argOptions = {
              'stroke-dashoffset': 1,
            }
        }
      gsap.set(el, {
        attr: {
          pathLength: 1,
          'stroke-dasharray': 1,
          ...argOptions,
        }
      })
    },
    inserted(el, binding) {
      // eslint-disable-next-line
      el.tftl = () => {
        // get optioins
				const { scrollTrigger = {}, delay = 0, duration = 1, ease = 'power2.inOut' } = binding.value || {}



				const tl = gsap.timeline({
          ease: 'power2.outIn',
					scrollTrigger: {
						trigger: el,
						// toggleActions: "restart none none none",
						...scrollTrigger,
					}
				})
				tl.to(el, {
          ease,
					duration,
					delay,
          attr: {
            'stroke-dashoffset': 0
          }

				})
			}
			$tftl.add(el)
    }
  })
}
