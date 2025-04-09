import { createWebHistory, createRouter } from 'vue-router'

const routes = [{ path: '/', exact: true, redirect: '/sub' }]

export default createRouter({
  history: createWebHistory(),
  routes
})
