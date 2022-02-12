<template>
  <main>
    <TheHero :is-page="true" />
    <Section6 />
    <Section7 />
    <Section8 />
    <Section9 />
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
import Section1 from '~/components/pages/blocks/Section1.vue'
import Section2 from '~/components/pages/blocks/Section2.vue'
import Section3 from '~/components/pages/blocks/Section3.vue'
import Section4 from '~/components/pages/blocks/Section4.vue'
import Section5 from '~/components/pages/blocks/Section5.vue'
import Section6 from '~/components/pages/blocks/Section6.vue'
import Section7 from '~/components/pages/blocks/Section7.vue'
import Section8 from '~/components/pages/blocks/Section8.vue'
import Section9 from '~/components/pages/blocks/Section9.vue'

export default {
  components: {
    TheHero,
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    Section7,
    Section8,
    Section9,
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
      console.log(this.$tftl.getTimeline('header'))
    })
  },
  destroyed() {
    this.$tftl.reset()
  },
}
</script>
