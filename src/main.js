import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using
import VueRouter from 'vue-router'//enrrutador


Vue.use(Vuetify);
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: "history",
  routes: [
      // rutas aqui     
      {
        path: "/",//ruta en navegador
        name: "home", // nombre
        component: () => import('./components/home/HomeComponent.vue')//componente
    

      },
      {
        path: "/calendar",//ruta en navegador
        name: "calendar", // 
        component: () => import('./components/calendar/Calendar.vue')
        

      },
  ]
})

new Vue({ 
  render: h => h(App),
  router,
  vuetify: new Vuetify({
    iconfont: "mdi",
    theme: {
      themes: {
        light: {
          primary: '#005883',
          secondary: '#ffffff',
        }
      }
    }
  })
}).$mount('#app')

