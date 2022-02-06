<template>
  <main>
    <TheHero :is-page="true" />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
  </main>
</template>

<script>
import TheHero from '~/components/TheHero.vue'
import Section1 from '~/components/pages/texts/Section1.vue'
import Section2 from '~/components/pages/texts/Section2.vue'
import Section3 from '~/components/pages/texts/Section3.vue'
import Section4 from '~/components/pages/texts/Section4.vue'
import Section5 from '~/components/pages/texts/Section5.vue'
import Section6 from '~/components/pages/texts/Section6.vue'

export default {
  components: {
    TheHero,
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
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
