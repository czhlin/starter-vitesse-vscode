declare global {
  type ParsedQuery<T = string> = import('query-string').ParsedQuery<T>
  interface WebViewUrl {
    query: ParsedQuery
    fragment: ParsedQuery
    path: string
  }
  namespace globalThis {
    // eslint-disable-next-line vars-on-top, no-var
    var __URL__: WebViewUrl | undefined
  }
}

// with unplugin-vue-markdown, markdown files can be treated as Vue components
declare module '*.md' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<object, object, any>
  export default component
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<object, object, any>
  export default component
}
