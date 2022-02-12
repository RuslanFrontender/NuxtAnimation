// eslint-disable-next-line
import Vue from 'vue'

export default  ( $tftl ) => {
  Vue.directive('tftl-tl', {
    bind(el, binding) {
      const timeline = binding.arg || ''
      const { name } = binding.value || {}
      if(timeline && name) {
        $tftl.addElementToTimeline(timeline, { name, el })
      }
    },
  })
}
