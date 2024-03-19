### 自定义 unplugin-vue-components 解析器

解析器可以是一个函数或者是对象

```ts
{
 type: 'component',
  // import RenderIcon from 'components/render'
  // 这里的name就是RenderIcon
  resolve: (name: string) => {
    // 必须以Render+开头字母
    if (/^Render[A-Z][a-zA-Z]*$/.test(name)) {
      return {
        name,
        // 返回路径
        from: 'components/render',
        // 相当于 import 'theme/global.scss'
        sideEffects: `theme/global.scss`
      }
    }
  }
}
```
