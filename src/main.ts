import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@/assets/Scss/Main.scss'

// This is Just Type Error Cause i Use Typescript and this Packages Dosen't Support @types 
import * as VueGoogleMaps from 'vue2-google-maps'
import VCalendar from 'v-calendar'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'


Vue.use(VueGoogleMaps, {
  load: {
    key: '',
    libraries: 'places',
  },
});

Vue.use(VCalendar, {
  componentPrefix: 'vc',                
});

Vue.use(Toast,{
   // You can set your default options here
   position: "top-center",
   timeout: 2000,
   closeOnClick: true,
   pauseOnFocusLoss: true,
   pauseOnHover: true,
   draggable: true,
   draggablePercent: 0.6,
   showCloseButtonOnHover: false,
   hideProgressBar: false,
   closeButton: "button",
   icon: true,
   rtl: false,
});

// Global Components
Vue.component( 'Header' , Header )
Vue.component( 'Footer' , Footer )

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
