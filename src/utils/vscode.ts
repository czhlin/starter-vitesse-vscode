import type { ParseOptions } from 'query-string'
import { WebviewApi } from '@tomjs/vscode-webview'
import qs from 'query-string'
// Exports class singleton to prevent multiple invocations of acquireVsCodeApi.
export const vscodeApi = new WebviewApi<string>()
export function getWebViewUrl() {
  if (globalThis.__URL__) {
    return globalThis.__URL__
  }
  const parseOptions: ParseOptions = {
    arrayFormat: 'comma',
    parseNumbers: true,
    parseBooleans: true,
  }
  const path = window.location.pathname
  const query = qs.parse(window.location.search, parseOptions)
  const fragment = qs.parse(window.location.hash, parseOptions)
  return {
    path,
    query,
    fragment,
  }
}
