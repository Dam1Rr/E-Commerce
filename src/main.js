import { createApp } from 'vue'
import App from './App.vue'
import MainHome from './views/MainHome.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: MainHome },
  // Другие маршруты
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App)
  .use(router) // Регистрируем Vue Router как плагин
  .mount('#app')
