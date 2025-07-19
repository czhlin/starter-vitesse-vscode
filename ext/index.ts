import { defineExtension } from 'reactive-vscode'
import { commands, window } from 'vscode'
import { MainPanel } from './views/panel'

const { activate, deactivate } = defineExtension((context) => {
  window.showInformationMessage('Hello')
  context.subscriptions.push(
    commands.registerCommand('hello-world.showHelloWorld', async () => {
      MainPanel.render(context)
    }),
  )
})

export { activate, deactivate }
