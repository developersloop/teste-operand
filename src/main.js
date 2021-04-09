import Vue from 'vue'
import App from './App.vue'
import './quasar'
import Vuex from 'vuex'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(Vuetify)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
