import { h, createApp } from 'vue'
import singleSpaVue from 'single-spa-vue'
import App from './App.vue'
import store from './store'
import router from './router'

const vueLifeCycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        // single-spa props are available on the "this" object. Forward them to your component as needed.
        // https://single-spa.js.org/docs/building-applications#lifecycle-props
        // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
        /*
        name: this.name,
        mountParcel: this.mountParcel,
        singleSpa: this.singleSpa,
        */
      })
    }
  },
  handleInstance(app) {
    app.use(store).use(router)
  }
})

export const bootstrap = (props: object) => {
  return vueLifeCycles.bootstrap(props)
}
export const mount = (props: object) => {
  return vueLifeCycles.mount(props)
}
export const unmount = vueLifeCycles.unmount
