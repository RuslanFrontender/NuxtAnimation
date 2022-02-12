import ScrollTrigger from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
import setDirectivesCustom from './directives-custom'
import setDirectivesTexts from './directives-texts'
import setDirectivesBlocks from './directives-blocks'
import setDirectiveImages from './directives-images'
import setDirectiveLines from './directives-lines'
import setDirectivesTimelines from './directives-timeline-elements'


gsap.registerPlugin(ScrollTrigger)

function TFTLAnimation() {
	const elements = new Set()
  const timelines = {}
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

      this.clearTimelines()
		},
    clearTimelines() {
      Object.keys(timelines).forEach(key => delete timelines[key])
    },
    addElementToTimeline(timeline, object) {
      if(!timelines[timeline]) {
        timelines[timeline] = {}
        timelines[timeline].elements = {}
      }
      timelines[timeline].elements[object.name] = object.el
    },
    getTimeline(name) {
      return timelines[name] ? timelines[name].elements : {}
    },
    getTimelines() {
      return this.timelines
    }
	}
}

export default (({ app }, inject) => {
	const tftl = new TFTLAnimation()
  setDirectivesCustom(tftl)
  setDirectivesTexts(tftl)
  setDirectivesBlocks(tftl)
  setDirectiveImages(tftl)
  setDirectiveLines(tftl)
  setDirectivesTimelines(tftl)
	inject('tftl', tftl)

})

