<template>
  <TheSection>
    <TheImageContainer>
      <TheImageWrapper
        v-tftl-image-mask:right="{
          scrollTrigger: {
            toggleActions: 'play none none reset',
          },
        }"
      >
        <TheImage />
      </TheImageWrapper>
    </TheImageContainer>
    <template #desc>
      <div class="description">
        <span><strong>v-tftl-image-mask</strong></span
        ><br /><br />
        //
        <br /><br />
        <pre>
  v-tftl-image-mask="{
    scrollTrigger: {
      toggleActions: 'play none none reset',
    }
  }"
        </pre>
      </div>
    </template>
  </TheSection>
</template>

<script>
import TheImage from '../../TheImage.vue'
import TheImageContainer from '../../TheImageContainer.vue'
import TheImageWrapper from '../../TheImageWrapper.vue'
import TheSection from '../../TheSection.vue'

export default {
  components: {
    TheSection,
    TheImage,
    TheImageContainer,
    TheImageWrapper,
  },
}
</script>
