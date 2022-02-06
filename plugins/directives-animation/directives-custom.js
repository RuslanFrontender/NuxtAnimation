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
}
