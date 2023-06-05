# 快速上手

## 完整引入

在 `main.ts` 中引入下面内容

```ts
import {createApp} from 'vue'
import App from './App.vue'

import CodeCouthyUI from 'codecouthy-ui'

createApp(App).use(CodeCouthyUI).mount('#app')
```

## 按需引入

为了减小体积，只希望引入部分组件，可以使用按需引入的方式

```ts
import {createApp} from 'vue'
import App from './App.vue'

// 组件按需引入
import {CButton} from 'codecouthy-ui'

createApp(App).use(CButton).mount('#app')
```
