// eslint-disable-next-line
import Vue from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default  ( $tftl ) => {
	Vue.directive('tftl-scale', {
    bind(el, binding) {
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
          argOptions = { scaleX: 0, transformOrigin: 'left center' }
      }
      gsap.set(el, {
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
            argOptions = { scaleX: 1 }
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
}
