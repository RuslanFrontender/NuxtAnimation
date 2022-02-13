<template>
  <main>
    <TheHero :is-page="true" />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
  </main>
</template>

<script>
import { gsap } from 'gsap'
import TheHero from '~/components/TheHero.vue'
import Section1 from '~/components/pages/images/Section1.vue'
import Section2 from '~/components/pages/images/Section2.vue'
import Section3 from '~/components/pages/images/Section3.vue'
import Section4 from '~/components/pages/images/Section4.vue'
import Section5 from '~/components/pages/images/Section5.vue'

export default {
  components: {
    TheHero,
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
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
      console.log('enter')
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
