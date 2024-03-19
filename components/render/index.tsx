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

/**
 * 渲染图标
 */
export const RenderImage = defineComponent({
  name: 'RenderImage',
  setup() {
    return () => h('div', { class: 'render-image' }, '🤮')
  }
})
