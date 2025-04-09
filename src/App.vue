<template>
  <div class="navbar">
    <TheMenu></TheMenu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheMenu from './components/common/menu/index.vue'
export default defineComponent({
  name: 'App',
  components: {
    TheMenu
  }
})
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
