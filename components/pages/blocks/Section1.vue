<template>
  <TheSection>
    <TheText
      v-tftl-fadein="{
        scrollTrigger: {
          toggleActions: 'play none none reset',
        },
      }"
    />
    <template #desc>
      <div class="description">
        <span><strong>v-tftl-fadein</strong></span
        ><br /><br />
        //
        <br /><br />
        <pre>
  v-tftl-fadein="{
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
import TheText from '../../TheText.vue'
import TheSection from '../../TheSection.vue'

export default {
  components: {
    TheSection,
    TheText,
  },
}
</script>
