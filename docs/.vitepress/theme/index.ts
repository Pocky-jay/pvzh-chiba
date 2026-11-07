/**
 * 千叶重铸版文档站主题
 *
 * 使用 theme-without-fonts：不加载默认主题里的 Google Fonts @import，
 * 站内字体全部回落到系统字体（Inter → PingFang SC / 微软雅黑）。
 * 这样整站构建产物没有任何外部字体请求，国内网络无代理也能正常打开。
 */
import DefaultTheme from 'vitepress/theme-without-fonts'
import './custom.css'

export default {
  extends: DefaultTheme
}
