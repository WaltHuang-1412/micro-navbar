<style lang="scss">
.the-menu {
  height: 100%;
  .el-menu-item {
    font-weight: 700;
  }
}
</style>
<template>
  <el-menu
    :default-active="activityPath"
    @select="handleSelect"
    class="the-menu"
  >
    <el-menu-item :index="routeList.sub">
      <el-icon><icon-menu /></el-icon>
      <template #title>Home</template>
    </el-menu-item>
    <el-menu-item :index="routeList.todo">
      <el-icon><icon-menu /></el-icon>
      <template #title>ToDo</template>
    </el-menu-item>
    <el-menu-item :index="routeList.login">
      <el-icon><icon-menu /></el-icon>
      <template #title>Login</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { ElMenu, ElMenuItem, ElIcon } from 'element-plus'

import { Menu as IconMenu } from '@element-plus/icons-vue'
import { useRouter, useRoute } from 'vue-router'
export default defineComponent({
  components: { IconMenu, ElMenu, ElMenuItem, ElIcon },
  name: 'CommonMenu',
  setup() {
    const router = useRouter()
    const route = useRoute()

    const base = process.env.NODE_ENV === 'production' ? '/micro-root' : ''

    const routeList = {
      home: `${base}/`,
      sub: `${base}/sub`,
      todo: `${base}/sub/todo`,
      login: `${base}/auth/login`,
      register: `${base}/auth/register`,
    }

    const activityPath = computed(() => route.path.split('?')[0].split('#')[0])

    const handleSelect = (key: string) => {
      if (key.startsWith(`${base}/auth`)) {
        window.location.href = key
      } else {
        router.push({ path: key })
      }
    }
    return { handleSelect, routeList, activityPath }
  },
})
</script>
