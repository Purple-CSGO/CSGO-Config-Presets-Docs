// 导入 Layout 使用自定义主题 or 扩展默认主题
// import Layout from './Layout.vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  // root component to wrap each page
  // Layout,
  ...DefaultTheme,

  // this is a Vue 3 functional component
  NotFound: () => 'custom 404',

  enhanceApp(ctx) { // { app, router, siteData }
    // app is the Vue 3 app instance from `createApp()`.
    // router is VitePress' custom router. `siteData` is
    // a `ref` of current site-level metadata.
    
    // extend default theme custom behaviour.
    DefaultTheme.enhanceApp(ctx)

    // register your custom global components
    ctx.app.component('MyGlobalComponent' /* ... */)
  },

  setup() {
    // this function will be executed inside VitePressApp's
    // setup hook. all composition APIs are available here.
  }
}
