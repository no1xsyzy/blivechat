import * as Vue from 'vue'
import * as VueRouter from 'vue-router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import axios from 'axios'

import * as i18n from './i18n'
import App from './App.vue'
import Layout from './layout/index.vue'
import Home from './views/Home.vue'
import StyleGenerator from './views/StyleGenerator/index.vue'
import Help from './views/Help.vue'
import Room from './views/Room.vue'
import NotFound from './views/NotFound.vue'

axios.defaults.timeout = 10 * 1000

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        { path: '', component: Home },
        { path: 'stylegen', name: 'stylegen', component: StyleGenerator },
        { path: 'help', name: 'help', component: Help }
      ]
    },
    {
      path: '/room/test',
      name: 'test_room',
      component: Room,
      props: (route) => ({ strConfig: route.query })
    },
    {
      path: '/room/:roomId',
      name: 'room',
      component: Room,
      props(route) {
        let roomId = parseInt(route.params.roomId)
        if (isNaN(roomId)) {
          roomId = null
        }
        return { roomId, strConfig: route.query }
      }
    },
    { path: '/:pathMatch(.*)*', component: NotFound }
  ]
})

const app = Vue.createApp(App)

app.config.compilerOptions.isCustomElement = tag => /^yt-/.exec(tag)
app.use(router)
app.use(ElementPlus)
app.use(i18n.i18n)

app.mount('#app')
