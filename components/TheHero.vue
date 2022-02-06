<template>
  <section class="hero">
    <h1 v-tftl-letters class="h1">TFTL Animation</h1>
    <nav class="navigation">
      <ul class="menu">
        <li
          v-for="(link, index) in menu"
          :key="index"
          v-tftl-fadein="{ delay: 0.2 * (index + 1) }"
        >
          <NuxtLink class="menu__link" :to="link.href">
            {{ link.text }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <ScrollDownIcon v-if="isPage" v-tftl-fadein:down="{ delay: 1 }" />
  </section>
</template>

<script>
import ScrollDownIcon from './ScrollDownIcon.vue'

export default {
  components: {
    ScrollDownIcon,
  },
  props: {
    isPage: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    menu: [
      {
        text: 'texts',
        href: '/texts',
      },
      {
        text: 'blocks',
        href: '/blocks',
      },
      {
        text: 'images',
        href: '/images',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
.hero {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}
.navigation {
  margin-top: 96px;
}
.menu {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  & > li + li {
    margin-left: 64px;
  }
}
.menu__link {
  font-size: 24px;
  text-transform: uppercase;
  color: black;
  text-decoration: none;
  transition: 0.5s ease-in-out;
  &:hover {
    opacity: 0.5;
  }
}
</style>
