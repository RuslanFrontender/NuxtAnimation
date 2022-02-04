// eslint-disable-next-line
import Vue from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'

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
  Vue.directive('tftl-letters', {
    async bind(el, binding) {
      const inner = document.createElement('div')
      inner.innerHTML = el.innerHTML
      // eslint-disable-next-line
      el.innerHTML = ''
      el.appendChild(inner)
      await document.fonts.ready;
      const split  = new SplitText(inner, { type: 'lines,words,chars', wordsClass: 'split-word', charsClass: 'split-char' })
      gsap.set(split.lines, {
        overflow: 'hidden',
      })
      split.chars.forEach(char => {
        gsap.set(char, {
          yPercent: 105,
        })
      })
    },

		inserted(el, binding) {
      const { scrollTrigger = {}, duration = 1, delay = 0, stagger = 0.1 } = binding.value || {}
      // eslint-disable-next-line
			el.tftl = async () => {
        await document.fonts.ready;
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            ...scrollTrigger,
          },
          delay
        })
        const chars = el.querySelectorAll('.split-char')
        tl.to(chars, {
          yPercent: 0,
          duration,
          stagger,
        })
			}
			$tftl.add(el)
		}
  })
  Vue.directive('tftl-words-fadein', {
    async bind(el, bindings) {
      await document.fonts.ready;
      const split = new SplitText(el, { type: 'words', wordsClass: 'split-word' })
      gsap.set(split.words, {
        autoAlpha: 0,
      })
    },
    inserted(el, binding) {
      // eslint-disable-next-line
      el.tftl = async () => {
        await document.fonts.ready;
        const words = el.querySelectorAll('.split-word')
        const {
          scrollTrigger = {},
          duration = 5,
          delay = 0,
          stagger = 0.2
        } = binding.value || {}
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            ...scrollTrigger,
          },
          delay
        })
        tl.to(words, {
          autoAlpha: 1,
          stagger,
          duration,
        })
			}
			$tftl.add(el)
    }
  })
  Vue.directive('tftl-text-lines', {
    async bind(el, binding) {
      await document.fonts.ready;
      const split = new SplitText(el, { type: 'lines', linesClass: 'mask' })
      split.lines.forEach(line => {
        // eslint-disable-next-line
        new SplitText(line, { type: 'lines', linesClass: 'split-line' })
      })
      const { arg = '' } = binding
      if(arg === 'mask') {
        gsap.set(el.querySelectorAll('.mask'), {
          overflow: 'hidden'
        })
      }
    },
    inserted(el, binding) {
      // eslint-disable-next-line
      el.tftl = async () => {
        const { arg = '', modifiers = {}} = binding
        await document.fonts.ready;
        const lines = el.querySelectorAll('.split-line')
        const {
          scrollTrigger = {},
          duration = 2,
          stagger = 0.2,
          delay = 0,
          y = 100,
          autoAlpha = 1,
        } = binding.value || {}

        let argOptions = {}

        switch(arg) {
          case 'fadein':
            argOptions.autoAlpha = 0
            break;
          default:
            argOptions = {}
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            ...scrollTrigger
          }
        })
        const options = {
          duration,
          delay,
          stagger,
          autoAlpha,
          ...argOptions
        }

        if(arg === 'mask') {
          options.yPercent = 105
          if(modifiers.down) {
            options.yPercent = -105
          }
        } else {
          options.y = Math.abs(y)
        }

        tl.from(lines, {
          ...options
        })
      }
      $tftl.add(el)
    }
  })
}
