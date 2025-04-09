<template>
  <div class="home-view">
    <CommonMenu></CommonMenu>
  </div>
</template>

<script setup lang="ts">
import CommonMenu from '@/components/common/menu/index.vue'
import { defineComponent } from 'vue'
defineComponent({
  name: 'HomeView',
  components: {
    CommonMenu
  }
})
</script>
