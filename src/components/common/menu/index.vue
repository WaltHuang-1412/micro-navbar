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
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { ElMenu, ElMenuItem, ElIcon } from 'element-plus'

import { Menu as IconMenu } from '@element-plus/icons-vue'
import { useRouter, useRoute } from 'vue-router'
export default defineComponent({
  components: { IconMenu, ElMenu, ElMenuItem,ElIcon },
  name: 'CommonMenu',
  setup() {
    const router = useRouter()
    const route = useRoute()

    const activityPath = computed(() => {
      return route.path
    })

    const routeList = {
      home: '/', // 主應用的根路徑
      sub: '/sub/', // 主應用的 /sub 路徑
      todo: '/sub/todo' // 主應用的 /sub/todo 路徑
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleSelect = (key: string, keyPath: string[]) => {
      router.push({ path: key })
    }
    return { handleSelect, routeList, activityPath }
  }
})
</script>
