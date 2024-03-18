/**
 * 数组去重
 * @param array
 * @returns
 */
export const arrayDedupe = (array: any[]) => {
  return Array.from(new Set(array))
}
