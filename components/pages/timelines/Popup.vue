<template>
  <transition :css="false" @enter="onEnter" @leave="onLeave">
    <div
      v-if="is_popup_opened"
      v-tftl-tl:popup="{ name: 'popup' }"
      class="popup"
    >
      <PopupTitle />
      <PopupText />
      <PopupCloseButton />
    </div>
  </transition>
</template>

<script>
// eslint-disable-next-line
import { mapState } from 'vuex'
import { gsap } from 'gsap'
import PopupTitle from './PopupTitle.vue'
import PopupText from './PopupText.vue'
import PopupCloseButton from './PopupCloseButton.vue'

export default {
  components: {
    PopupTitle,
    PopupText,
    PopupCloseButton,
  },
  computed: {
    ...mapState('project', ['is_popup_opened']),
  },

  methods: {
    onEnter(el, done) {
      const { popup, text, close } = this.$tftl.getTimelineElements('popup')
      gsap
        .timeline({
          onComplete() {
            done()
          },
        })
        .from(popup, {
          yPercent: 105,
          duration: 0.6,
        })
        .from(
          text,
          {
            autoAlpha: 0,
            y: 120,
            duration: 0.6,
            stagger: 0.1,
          },
          '-=0.4'
        )
        .from(
          close,
          {
            autoAlpha: 0,
            duration: 0.6,
          },
          '-=0.2'
        )
    },
    onLeave(el, done) {
      const { popup, text, close } = this.$tftl.getTimelineElements('popup')
      gsap
        .timeline({
          onComplete() {
            done()
          },
        })
        .to(text, {
          autoAlpha: 0,
          y: -60,
          duration: 0.6,
          stagger: 0.2,
        })
        .to(
          close,
          {
            autoAlpha: 0,
            duration: 0.6,
          },
          '-=0.2'
        )
        .to(
          popup,
          {
            yPercent: -105,
            duration: 0.6,
          },
          '-=0.2'
        )
    },
  },
}
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(250, 250, 250, 1);
}
</style>
