import type { UserModule } from '~/types'
import { setupLayouts } from 'virtual:generated-layouts'
import { ViteSSG } from 'vite-ssg'
import { createMemoryHistory, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { isVscode } from '~/utils'
import App from './App.vue'
import 'uno.css'
import '~/styles/main.css'

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  {
    history: isVscode() ? createMemoryHistory() : createWebHistory(),
    routes: setupLayouts(routes),
    base: import.meta.env.BASE_URL,
  },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
    // ctx.app.use(Previewer)
  },
)
