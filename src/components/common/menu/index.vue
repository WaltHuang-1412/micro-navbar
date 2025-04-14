<style lang="scss">
.the-menu {
  height: 100%;
  .el-menu-item {
    font-weight: 700;
  }
  .user-info {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-left: 4px;
    .avatar {
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }
    .username {
      font-size: 14px;
      font-weight: bold;
    }
  }
}
</style>

<template>
  <el-menu
    :default-active="activityPath"
    @select="handleSelect"
    class="the-menu"
  >
    <!-- ✅ 使用者資訊區塊 -->
    <el-menu-item-group v-if="username">
      <el-menu-item index="user-info">
        <div class="user-info">
          <el-avatar :src="avatarUrl" size="small" />
          <span class="username">{{ username }}</span>
        </div>
      </el-menu-item>
      <el-menu-item index="logout">
        <el-icon><Lightning /></el-icon>
        <template #title>登出</template>
      </el-menu-item>
    </el-menu-item-group>
    <el-menu-item :index="routeList.sub">
      <el-icon><icon-menu /></el-icon>
      <template #title>Home</template>
    </el-menu-item>

    <el-menu-item :index="routeList.plans">
      <el-icon><DocumentAdd /></el-icon>
      <template #title>Plans</template>
    </el-menu-item>
  </el-menu>
</template>
<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import {
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElAvatar,
  ElIcon,
} from 'element-plus'
import {
  Menu as IconMenu,
  DocumentAdd,
  Lightning,
} from '@element-plus/icons-vue'
import { getProfile } from '@/api/auth'

const router = useRouter()
const route = useRoute()

const isProd = location.pathname.startsWith('/micro-root')
const base = isProd ? '/micro-root' : ''

const routeList = {
  home: `${base}/`,
  sub: `${base}/sub`,
  plans: `${base}/sub/plans`,
  login: `${base}/auth/login`,
  register: `${base}/auth/register`,
}

const activityPath = computed(() => {
  const path = route.path.split('?')[0].split('#')[0]
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path
})

const username = ref('')
const avatarUrl = ref('')

// ✅ 載入使用者資料
const fetchUser = async () => {
  try {
    const res = await getProfile()
    username.value = res.username
    avatarUrl.value = `https://i.pravatar.cc/150?u=${res.username}`
  } catch (err) {
    console.warn('取得使用者資訊失敗')
  }
}

onMounted(fetchUser)

const handleSelect = (key: string) => {
  if (key === 'logout') {
    localStorage.removeItem('token')
    window.location.href = `${base}/auth/login`
    return
  }

  // ✅ 如果選到目前路徑，就不要再導了
  if (key === activityPath.value) return

  if (key === 'user-info') return

  if (key.startsWith(`${base}/auth`)) {
    window.location.href = key
  } else {
    router.push({ path: key })
  }
}
</script>
