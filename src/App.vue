<template>
  <div class="navbar">
    <CommonMenu></CommonMenu>
  </div>
</template>

<script setup lang="ts">
import CommonMenu from '@/components/common/menu/index.vue'
</script>

<style lang="scss">
@import '@/styles/_reboot';
@import '@/styles/transition';
@import '@/styles/element-plus';
#app {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-auto-columns: 200px 1fr;
  grid-template-areas: 'navbar sub';

  &__navbar-slot {
    grid-area: navbar;
    overflow: auto;
  }
  &__sub-slot {
    grid-area: sub;
    overflow: auto;
  }

  .single-spa-container,
  .navbar {
    width: 100%;
    height: 100%;
  }
}
</style>
