/**
 * 解析器
 */
export const componentsResolver = () => {
  return {
    type: 'component',
    resolve: (name: string) => {
      // 必须以Render+开头字母
      if (/^Render[A-Z][a-zA-Z]*$/.test(name)) {
        return {
          name,
          from: 'components/render',
          sideEffects: `theme/global.scss`
        }
      }
    }
  }
}

export default componentsResolver
