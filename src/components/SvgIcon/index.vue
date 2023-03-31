<template>
  <svg aria-hidden="true" class="svg-icon" v-bind="{ ...iconStyle }" v-on="$attrs">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "currentColor",
  },
  size: {
    type: String,
    default: "1em",
  },
});
const iconStyle = computed(() => {
  return {
    width: props.size,
    height: props.size,
    fill: props.color,
  };
});
const iconName = computed(() => {
  return `#svg-icon-${props.name}`;
});
</script>
<style lang="less" scoped>
.svg-icon {
  vertical-align: -0.15em;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
