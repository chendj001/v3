/**
 * 格式化--金额
 * @param {*} value 值
 * @param {Number} len 保留几位小数-默认2位
 *
 * 1000=>1,000
 */
export const formatMoney = (value: any, len: number = 2): string => {
  // 无效值
  const InvalidValue = [null, undefined]
  // 缺省值
  const DefaultValue = '--'
  if (InvalidValue.includes(value)) {
    return DefaultValue
  }
  // 保存2位小数
  if (isNaN(value)) {
    return DefaultValue
  }
  const parts = value.toString().split('.')
  // 处理小数部分超过2位的情况
  if (parts[1] && parts[1].length > len) {
    parts[1] = parts[1].substring(0, len) // 仅保留2位小数
  }
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}
/**
 * 将字符串首字母大写
 */
export const formatCapitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
