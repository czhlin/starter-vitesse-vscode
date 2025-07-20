import type { UserModule } from '~/types'
import { getWebViewUrl, isVscode } from '~/utils'
// https://github.com/antfu/vite-plugin-pwa#automatic-reload-when-new-content-available
export const install: UserModule = ({ isClient, router }) => {
  if (!isClient || !isVscode())
    return
  let init = false
  router.beforeEach((to, _) => {
    const { path } = getWebViewUrl()
    if (to.path === '/' && path !== to.path && !init) {
      init = true
      return {
        path,
      }
    }
  })
}
