# Button 按钮

常用操作按钮

## 基础用法

基础的函数用法

使用`size`、`type`、`ghost`、`round`属性来定义 Button 的样式。

:::demo

```vue
<template>
 <div style="margin-bottom:20px;">
    <CButton>默认按钮</CButton>
    <CButton type="primary">主要按钮</CButton>
    <CButton type="danger">危险按钮</CButton>
    <CButton type="warning">警告按钮</CButton>
    <CButton type="success">成功按钮</CButton>
 </div>
 <div style="margin-bottom:20px;">
    <CButton type="primary" ghost>主要按钮</CButton>
    <CButton type="danger" ghost>危险按钮</CButton>
    <CButton type="warning" ghost>警告按钮</CButton>
    <CButton type="success" ghost>成功按钮</CButton>
 </div>
 <div style="margin-bottom:20px;">
  <CButton size="small" type="primary">小按钮</CButton>
  <CButton size="medium" type="danger">中按钮</CButton>
  <CButton size="large" type="warning">大按钮</CButton>
 </div>
 <div style="margin-bottom:20px;">
    <CButton>默认按钮</CButton>
    <CButton type="primary" icon="search">搜索按钮</CButton>
    <CButton type="primary" icon="edit">编辑按钮</CButton>
    <CButton type="warning" icon="message">提示按钮</CButton>
    <CButton type="danger" icon="delete">删除按钮</CButton>
    <CButton type="success" icon="check">成功按钮</CButton>
 </div>
 <div style="margin-bottom:20px;">
  <CButton type="primary" round icon="search"></CButton>
  <CButton type="warning" round icon="edit"></CButton>
  <CButton type="danger" round icon="check"></CButton>
  <CButton type="success" round icon="message"></CButton>
  <CButton round icon="delete"></CButton>
 </div>
</template>
```

:::

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

设置 icon 属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用 i 标签即可，可以使用自定义图标。


:::demo
```vue
<template>
  <div class="flex flex-row">
    <CButton icon="edit" ghost type="danger"></CButton>
    <CButton icon="delete" ghost type="warning"></CButton>
    <CButton icon="share" ghost type="success"></CButton>
    <CButton round ghost icon="search" type="primary">搜索</CButton>
  </div>
</template>
```
:::
