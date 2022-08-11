import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMeta from '../node_modules/vue-meta'
import VueSmoothScroll from '../node_modules/vue2-smooth-scroll'
import SlideUpDown from '../node_modules/vue-slide-up-down'
import Vuelidate from '../node_modules/vuelidate'
import { VueMaskDirective } from '../node_modules/v-mask'
import BootstrapVue from '../node_modules/bootstrap-vue'
import './assets/scss/index.scss'

Vue.use(VueMeta)
Vue.use(VueSmoothScroll)
Vue.use(Vuelidate)
Vue.use(BootstrapVue)
Vue.component('slide-up-down', SlideUpDown)
Vue.config.productionTip = false
Vue.directive('mask', VueMaskDirective)
Vue.directive('scroll', {
  inserted: function (el, binding) {
    const f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
