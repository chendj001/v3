import * as lib from './index'
export const utilsHook = (name: string) => {
  if (Object.keys(lib).includes(name)) {
    return {
      name,
      from: 'utils/index.ts'
    }
  }
}
/**
 * utils解析器
 */
export const utilsResolver = () => {
  return (name: string) => {
    return utilsHook(name)
  }
}

export default utilsResolver
