# SvgIcon 图标组件

为了方便使用项目中 svg 图标，封装为组件来直接使用。

## 代码示例

### 基础用法

```vue
<template>
  <SvgIcon name="user" />
</template>
```

### 图标大小

size 可以是数字，也可以是带像素单位的字符串

```vue
<template>
  <SvgIcon name="user" :size="20" class="margin-top-4" />
  <SvgIcon name="user" size="20px" />
</template>
```

### 图标颜色

```vue
<template>
  <SvgIcon name="user" color="rgba(237,64,20,1)" class="margin-top-4" />
  <SvgIcon name="user" size="20" color="#2d8cf0" />
  <SvgIcon name="user" size="20" style="color: #2d8cf0" />
</template>
```

### 多级目录

vite 中 icons 插件可以支持目录结构，比如 `icons/eye/open.svg` 和 `icons/eye-close.svg`，使用是`目录名-文件名`，如果目录有多层，则拼加上即可，一般不建议划分目录。

```vue
<template>
  <SvgIcon name="eye-close" size="20" style="color: #2d8cf0" />
  <SvgIcon name="eye-open" size="20" style="color: #2d8cf0" />
</template>
```

## API

### 属性

| 参数  | 说明                                                                                 | 类型          | 默认值 |
| :---- | :----------------------------------------------------------------------------------- | :------------ | :----: |
| name  | 图标名称，也就是项目 src/icons 目录下的 svg 名称，如果有多级目录，如 name="dir-user" | String        |   --   |
| size  | 图标的大小                                                                           | Number,String |  14px  |
| color | 图标颜色，默认用父级元素颜色                                                         | String        |   --   |
