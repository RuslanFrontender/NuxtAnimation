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
