import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi1 from '@/components/Hi1'
import Params from '@/components/Params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/params/:newsId(\\d+)/:newsContent',
      name: 'HelloWorld',
      component: Params,
      beforeEnter: (to, from, next) => {
        console.log('我进入params模板')
        console.log(to);
        console.log(from);
        next();
      }
    },
    {
      path: '/goHome',
      redirect: '/'
    },
    {
      path: '/goParams/:newsId(\\d+)/:newsContent',
      redirect: '/params/:newsId(\\d+)/:newsContent'
    },
    {
      path: "/hi",
      component: Hi1,
      alias: '/jspfei'
    },
    {
      path: "*",
      component: Error
    }

  ]
})
