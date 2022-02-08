<template>
  <TheSection>
    <TheLine
      v-tftl-scale:right="{
        duration: 1.2,
        scrollTrigger: {
          toggleActions: 'play none none reset',
        },
      }"
    />
    <template #desc>
      <div class="description">
        <span><strong>v-tftl-scale:right</strong></span
        ><br /><br />
        //
        <br /><br />
        <pre>
  v-tftl-scale:right="{
    duration: 1.2,
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
