// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    formatters: true,
    pnpm: true,
    vue: true,
    ignores: [
      // eslint ignore globs here
    ],
  },
  {
    rules: {
      // overrides
    },
  },
).removeRules('node/prefer-global/process').overrideRules({
  'pnpm/json-enforce-catalog': [
    'error',
    {
      // ^1.102.0 is for @types/vscode pnpm catalog
      allowedProtocols: ['workspace', 'link', 'file', '^1.102.0'],
    },
  ],
})
