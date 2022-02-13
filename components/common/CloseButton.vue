<template>
  <div class="close-button"></div>
</template>

<script>
export default {}
</script>

<style lang="scss" scooped>
.close-button {
  width: 32px;
  height: 32px;
  position: relative;
  cursor: pointer;
}
.close-button::after,
.close-button::before {
  content: '';
  display: block;
  width: 40px;
  height: 1px;
  background-color: black;
  position: absolute;
  left: 50%;
  top: 50%;
  transition: 0.5s ease-in-out;
}
.close-button::before {
  transform: translate(-50%, -50%) rotate(-45deg);
}
.close-button::after {
  transform: translate(-50%, -50%) rotate(45deg);
}
</style>
