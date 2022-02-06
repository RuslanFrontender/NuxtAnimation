// eslint-disable-next-line
import Vue from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default  ( $tftl ) => {
	Vue.directive('tftl-image-zoom', {
		bind(el, binding) {
      // gsap.set(el, {
      //   scale: 1.2
      // })
		},
		inserted(el, binding) {
      // eslint-disable-next-line
			el.tftl = () => {
        const { scrollTrigger = {}, scale = 1.2, delay = 0, duration = 1, ease = "power2.outIn" } = binding.value || {}
        const tl = gsap.timeline({
          delay,
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            ...scrollTrigger,
          }
        })
        tl.from(el, {
          scale,
          duration,
          delay,
          ease,
        })
			}
			$tftl.add(el)
		}
	})
  Vue.directive('tftl-image-mask', {
		bind(el, binding) {
      const { scale = 1.2 }= binding.value || {}
      const { arg } = binding

      let clipPath = ''

      switch(arg) {
        case 'right':
          clipPath = "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
          break
        case 'left':
          clipPath = "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
          break
        case 'up':
          clipPath = 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100% )'
          break
        case 'down':
          clipPath = 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0% )'
          break
        default:
          clipPath = "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
      }

      gsap.set(el, {
        scale,
        clipPath,
      })
		},
		inserted(el, binding) {
      // eslint-disable-next-line
			el.tftl = () => {
        const { scrollTrigger = {}, delay = 0, duration = 1, ease = "power2.outIn" } = binding.value || {}
        const { arg } = binding
        let clipPath = ''
        switch(arg) {
          case 'right':
            clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
            break
          case 'left':
            clipPath = 'polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)'
            break
          case 'up':
            clipPath = 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0% )'
            break
          case 'down':
            clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100% )'
            break
          default:
            clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
        }

        const tl = gsap.timeline({
          delay,
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            ...scrollTrigger,
          }
        })
        tl.to(el, {
          clipPath,
          scale: 1,
          duration,
          delay,
          ease,
        })
			}
			$tftl.add(el)
		}
	})
}
