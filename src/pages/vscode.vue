<script setup lang="ts">
import { ref } from 'vue'
import { getVscodeApi, getWebViewUrl } from '~/utils'

// eslint-disable-next-line no-console
console.log('--inject--', getWebViewUrl())

const message = ref('')
const state = ref('')
const vscodeApi = getVscodeApi()
onMounted(() => {

})
function onSetState() {
  vscodeApi?.setState(state.value)
}

function onGetState() {
  state.value = vscodeApi?.getState() || ''
}

function onPostMessage() {
  vscodeApi?.postMessage({
    type: 'hello',
    data: `💬: ${message.value || 'Empty'}`,
  })

  setTimeout(() => {
    vscodeApi?.post('hello3', `⛅: ${message.value || 'Empty'}`)
  }, 100)
}

const receive = ref('')
function onPostAndReceive() {
  vscodeApi?.postAndReceive('hello2', `😀: ${message.value || 'Empty'}`).then((data: any) => {
    // eslint-disable-next-line no-console
    console.log('data', data)
    receive.value = data
  })
}

vscodeApi?.on('hello3', (data: any) => {
  // eslint-disable-next-line no-console
  console.log('watch [hello3]: ', data)
})
</script>

<template>
  <main>
    <h1>Hello Vue!</h1>
    <n-button type="primary" @click="onPostMessage">
      Post Message
    </n-button>
    <div style="margin-top: 8px">
      <n-button type="info" @click="onPostAndReceive">
        Post Message And Receive
      </n-button>
      <span v-if="receive" style="margin-left: 8px">{{ receive }}</span>
    </div>
    <div>
      <n-input v-model:value="message">
        Please enter a message
      </n-input>
      <div>Message is: {{ message }}</div>
    </div>
    <div>
      <n-input v-model:value="state">
        Please enter a state
      </n-input>
      <div>State is: {{ state }}</div>
      <div>
        <n-button type="tertiary" @click="onSetState">
          setState
        </n-button>
        <n-button type="success" style="margin-left: 8px" @click="onGetState">
          getState
        </n-button>
      </div>
    </div>
  </main>
</template>
