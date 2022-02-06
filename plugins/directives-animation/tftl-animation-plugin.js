import ScrollTrigger from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
import setDirectivesCustom from './directives-custom'
import setDirectivesTexts from './directives-texts'
import setDirectivesBlocks from './directives-blocks'


gsap.registerPlugin(ScrollTrigger)

function TFTLAnimation() {
	const elements = new Set()
	return {
		start() {
			// return false;
			[...elements].forEach(el => {
				if(el.tftl) {
					el.tftl()
				}
			})
			setTimeout(() => ScrollTrigger.refresh(), 100)
		},
		add(element) {
			elements.add(element)
		},
		reset() {
			ScrollTrigger.getAll()
			.filter(st => st !== ScrollTrigger.getById('direction'))
			.forEach(st => st.kill())
			elements.clear()
		}
	}
}

export default (({ app }, inject) => {
	const tftl = new TFTLAnimation()
  setDirectivesCustom(tftl)
  setDirectivesTexts(tftl)
  setDirectivesBlocks(tftl)
	inject('tftl', tftl)
})

