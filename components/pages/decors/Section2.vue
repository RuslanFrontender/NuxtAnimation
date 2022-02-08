<template>
  <TheSection>
    <TheLine
      v-tftl-scale:left="{
        duration: 1.5,
        ease: 'power4.outIn',
        scrollTrigger: {
          toggleActions: 'play none none reset',
        },
      }"
    />
    <template #desc>
      <div class="description">
        <span><strong> v-tftl-scale:left</strong></span
        ><br /><br />
        //
        <br /><br />
        <pre>
  v-tftl-scale:left="{
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
import TheLine from '~/components/common/TheLine.vue'
import TheSection from '../../TheSection.vue'

export default {
  components: {
    TheSection,
    TheLine,
  },
}
</script>
