<template>
  <TheSection>
    <svg width="500" height="500" viewbox=" 0 0 500 500 ">
      <circle
        v-tftl-svg-line="{
          duration: 1.5,
          ease: 'power4.inOut',
          scrollTrigger: {
            toggleActions: 'play none none reset',
          },
        }"
        cx="250"
        cy="250"
        r="249"
        stroke="black"
        stroke-width="1"
        fill="none"
      />
    </svg>
    <template #desc>
      <div class="description">
        <span><strong> v-tftl-svg-line</strong></span
        ><br /><br />
        //
        <br /><br />
        <pre>
  v-tftl-svg-line="{
    duration: 1.5,
    ease: 'power4.inOut',
    scrollTrigger: {
      toggleActions: 'play none none reset',
    },
  }"
        </pre>
      </div>
    </template>
  </TheSection>
</template>

<script>
import TheSection from '../../TheSection.vue'

export default {
  components: {
    TheSection,
  },
}
</script>
