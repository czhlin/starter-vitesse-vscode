import { defineExtension } from 'reactive-vscode'
import { commands } from 'vscode'
import { MainPanel } from './views/panel'

const { activate, deactivate } = defineExtension((context) => {
  context.subscriptions.push(
    commands.registerCommand('hello-world.showHelloWorld', async () => {
      MainPanel.render(context)
    }),
  )
  commands.executeCommand('hello-world.showHelloWorld')
})

export { activate, deactivate }
