import { defineComponent, h } from 'vue'

/**
 * 渲染图标
 */
export const RenderIcon = defineComponent({
  name: 'RenderIcon',
  setup() {
    return () => h('div', { class: 'render-icon' }, 'render-icon')
  }
})
