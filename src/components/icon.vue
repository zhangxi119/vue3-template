<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :href="symbolId" />
  </svg>
</template>

<script setup lang="ts" name="SvgIcon">
import { computed } from 'vue';

const props = defineProps({
  // 文件夹名称
  prefix: {
    type: String,
    default: '',
  },
  // 文件名称
  name: {
    type: String,
    required: true,
  },
});
const symbolId = computed(() => `#icon${props.prefix ? `-${props.prefix}` : ''}-${props.name}`);
</script>
<style scope>
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.1em; /* 因icon大小被设置为和字体大小一致，而span等标签的下边缘会和字体的基线对齐，故需设置一个往下的偏移比例，来纠正视觉上的未对齐效果 */
    fill: currentColor; /* 定义元素的颜色，currentColor是一个变量，这个变量的值就表示当前元素的color值，如果当前元素未设置color值，则从父元素继承 */
    overflow: hidden;
  }
</style>
