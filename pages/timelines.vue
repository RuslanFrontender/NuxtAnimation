<template>
  <div class="timelines-page">
    <TheHero :is-page="true" />
    <Section1 />
    <Popup />
  </div>
</template>

<script>
import { gsap } from 'gsap'
import TheHero from '~/components/TheHero.vue'
import Popup from '~/components/pages/timelines/Popup.vue'
import Section1 from '~/components/pages/timelines/Section1.vue'

export default {
  components: {
    TheHero,
    Popup,
    Section1,
  },
  transition: {
    leave(el, done) {
      gsap.fromTo(
        '.cover',
        {
          transformOrigin: 'left center',
          scaleX: 0,
        },
        {
          scaleX: 1,
          duration: 0.6,
          ease: 'power2.outIn',
          onComplete: () => {
            done()
          },
        }
      )
    },
    enter(el, done) {
      gsap.to('.cover', {
        transformOrigin: 'right center',
        scaleX: 0,
        duration: 0.6,
        ease: 'power2.inOut',
        onComplete: () => {
          done()
        },
      })
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$tftl.start()
    })
  },
  destroyed() {
    this.$tftl.reset()
  },
}
</script>
