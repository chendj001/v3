import { version } from './package.json'
export * from './format'
export * from './array'
export * from './help'
/**
 * 版本
 */
export const getVer = () => `utils - ${version}`
