/**
 * 解析器
 */
export function componentsResolver(): any {
  return {
    type: 'component',
    resolve: (name: string) => {
      // 必须以Render+开头字母
      if (/^Render[A-Z][a-zA-Z]*$/.test(name)) {
        return {
          name,
          from: 'components/render',
          sideEffects: `components/render/index.scss`
        }
      }
    }
  }
}

export default componentsResolver
