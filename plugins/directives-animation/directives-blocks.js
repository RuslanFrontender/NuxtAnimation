// eslint-disable-next-line
import Vue from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default  ( $tftl ) => {
	Vue.directive('tftl-custom', {
		bind(el, binding) {
			const { set = {}} = binding.value
			gsap.set(el, {
				...set,
			})
		},
		inserted(el, binding) {
			const { from, to, scrollTrigger = {}} = binding.value
			const duration = 0.6
      // eslint-disable-next-line
			el.tftl = () => {
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: el,
						// toggleActions: "restart none none none",
						...scrollTrigger,
					}
				})
				if(from && !to) {
					tl.from(el, {
						duration,
						...from
					})
				} else if (!from && to) {
					tl.to(el,{
						duration,
						...to
					})
				} else if (from && to) {
					tl.fromTo(el, {
						...from
					}, {
						duration,
						...to
					})
				}
			}
			$tftl.add(el)
		}
	})
	Vue.directive('tftl-fadein', {

		inserted(el, binding) {
      // eslint-disable-next-line
			el.tftl = () => {
        // get optioins
				const { scrollTrigger = {}, delay = 0, duration = 1, x, y } = binding.value || {}

        // get argument
        const { arg } = binding
        const argOptions = {}
        switch(arg) {
            case 'up':
              argOptions.y = y || 80
              break;
            case 'down':
              argOptions.y = y ? -1 * Math.abs(y) : -80
              break;
            case 'left':
              argOptions.x = x || 80
              break;
            case 'right':
              argOptions.x = x ? -1 * Math.abs(x) :  -80
              break;
            default:
              argOptions.y = 0
              argOptions.x = 0
        }
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: el,
						// toggleActions: "restart none none none",
						...scrollTrigger,
					}
				})
				tl.from(el, {
					autoAlpha: 0,
					duration,
					delay,
          ...argOptions,
				})
			}
			$tftl.add(el)
		}
	})
  Vue.directive('tftl-up', {

		inserted(el, binding) {
      // eslint-disable-next-line
			el.tftl = () => {
        // get optioins
				const {
          scrollTrigger = {},
          delay = 0,
          duration = 1,
          y = 80,
          opacity = 1,
          autoAlpha
        } = binding.value || {}

				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: el,
						// toggleActions: "restart none none none",
						...scrollTrigger,
					}
				})
				tl.from(el, {
					duration,
					delay,
          y,
          autoAlpha: autoAlpha || opacity
				})
			}
			$tftl.add(el)
		}
	})
  Vue.directive('tftl-down', {

		inserted(el, binding) {
            // eslint-disable-next-line
			el.tftl = () => {
        // get optioins
				const {
          scrollTrigger = {},
          delay = 0,
          duration = 1,
          y,
          opacity = 1,
          autoAlpha
        } = binding.value || {}

				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: el,
						// toggleActions: "restart none none none",
						...scrollTrigger,
					}
				})
				tl.from(el, {
					duration,
					delay,
          y: y ? -1 * Math.abs(y) : -80,
          autoAlpha: autoAlpha || opacity
				})
			}
			$tftl.add(el)
		}
	})
  Vue.directive('tftl-left', {

		inserted(el, binding) {
      // eslint-disable-next-line
			el.tftl = () => {
        // get optioins
				const {
          scrollTrigger = {},
          delay = 0,
          duration = 1,
          x = 80,
          opacity = 1,
          autoAlpha
        } = binding.value || {}
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: el,
						// toggleActions: "restart none none none",
						...scrollTrigger,
					}
				})
				tl.from(el, {
					duration,
					delay,
          x,
          autoAlpha: autoAlpha || opacity
				})
			}
			$tftl.add(el)
		}
	})
  Vue.directive('tftl-right', {

		inserted(el, binding) {
      // eslint-disable-next-line
			el.tftl = () => {
        // get optioins
				const {
          scrollTrigger = {},
          delay = 0,
          duration = 1,
          opacity = 1,
          autoAlpha,
          x
        } = binding.value || {}
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: el,
						// toggleActions: "restart none none none",
						...scrollTrigger,
					}
				})
				tl.from(el, {
					duration,
					delay,
          x: x ? -1 * Math.abs(x) : -80,
          autoAlpha: autoAlpha || opacity
				})
			}
			$tftl.add(el)
		}
	})
}
