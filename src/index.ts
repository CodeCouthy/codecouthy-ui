import { createApp } from "vue/dist/vue.esm-browser";
import CodeCouthyUI from "./entry";
createApp({
  template: `<div>
    <CButton>默认按钮</CButton>
    <CButton type="primary" ghost size="small" icon="search">主要按钮</CButton>
    <CButton type="danger" icon="edit">危险按钮</CButton>
    <CButton type="warning" icon="check" size="large">警告按钮</CButton>
    <CButton type="success" round icon="delete">成功按钮</CButton>
  </div>`,
})
  .use(CodeCouthyUI)
  .mount("#app");
