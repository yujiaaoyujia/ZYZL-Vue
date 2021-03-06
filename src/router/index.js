import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/modules/Index'
import Register from '@/modules/Register'
import Pay from '@/modules/Pay'
import Buy from '@/modules/Buy'
import Check from '@/modules/Check'
import Bind from '@/modules/Bind'
import FlowDetail from '@/modules/FlowDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/Index',
      component: Index,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
      meta: {
        title: '注册'
      }
    },
    {
      path: '/Check',
      name: 'Check',
      component: Check,
      meta: {
        title: '流量卡查询'
      }
    },
    {
      path: '/Buy',
      name: 'Buy',
      component: Buy,
      meta: {
        title: '购买流量卡'
      }
    },
    {
      path: '/Pay',
      name: 'Pay',
      component: Pay,
      meta: {
        title: '充值'
      }
    },
    {
      path: '/Bind',
      name: 'Bind',
      component: Bind,
      meta: {
        title: '物联卡绑定'
      }
    },
    {
      path: '/FlowDetail',
      name: 'FlowDetail',
      component: FlowDetail,
      meta: {
        title: '流量卡明細'
      }
    }
  ]
})
