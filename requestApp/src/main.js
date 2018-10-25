import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import { store } from './store/store'


Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: 'red',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
