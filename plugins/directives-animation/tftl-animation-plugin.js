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
    addTimeline(name, tl) {
      if(timelines[name]) {
        timelines[name].timeline = tl
      }
    },
    addElementToTimeline(timeline, object) {
      if(!timelines[timeline]) {
        timelines[timeline] = {}
        timelines[timeline].elements = {}
      }
      if(!timelines[timeline].elements[object.name]) {
        timelines[timeline].elements[object.name] = new Set()
      }
      timelines[timeline].elements[object.name].add(object.el)
    },
    removeElementFromTimeline(timeline, object) {
      if( timelines[timeline] &&
          timelines[timeline].elements &&
          timelines[timeline].elements[object.name] ) {
        timelines[timeline].elements[object.name].delete(object.el)
      }
    },
    getTimeline(name) {
      return timelines[name]
    },
    getTimelineElements(name) {
      const els = timelines[name] && timelines[name].elements
      const result = {}
      Object.keys(els).forEach(key =>( result[key] = Array.from(els[key])) )
      return result
    },
    getTimelines() {
      return timelines
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

