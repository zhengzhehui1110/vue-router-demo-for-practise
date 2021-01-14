import Vue from 'vue'
import VueRouter from 'vue-router'
import NavigateGuard from '@/views/NavigateGuard'
import NGlobal from '@/views/navigateGuard/NGlobal'
import NPrivate from '@/views/navigateGuard/NPrivate'
import User1 from '@/views/user1.vue'
import Props from '@/views/props/Props'
import NavigateFunc from '@/views/NavigateFunc'


Vue.use(VueRouter)

const routes = [
  {
    path:'/navigate',
    name:'NavigateGuard',
    component:NavigateGuard,
    children:[
      {
        path:'/navigate/global',
        name:'NGlobal',
        component:NGlobal,
      },
      {
          path:'/navigate/private/:id',
          name:'NPrivate',
          component:NPrivate,
          beforeEnter: (to, from, next) => {
            console.log('独享前置守卫被调用')
            next()
          },
      },
    ]
  },
  {
    path:'/user/:id/:place',
    name:'User1',
    component: User1,
    // 2.将新的组件添加到routes表中,完成path到组件的映射
  },
  {
    path:'/props',
    name:'Props',
    component:Props,
    props:true
  },
  {
    path:'/navigatef',
    name:'NavigateF',
    component:NavigateFunc,
  },
]

const router = new VueRouter({
  routes
})

// 全局守卫
router.beforeEach((to, from, next)=>{
  // to:即将要进入的目标路由对象,from:正要离开的路由
  // next,一定要调用,表示进行管道中的下一个钩子
  console.log('全局前置守卫被调用')
  next()
})

router.beforeResolve((to,from,next)=>{
  // 全局解析守卫
  console.log('全局解析守卫被调用')
  next()
})

router.afterEach((to, from)=>{
  // 没有next,因为它一定是队列的最后一个钩子
  // to:即将要进入的目标路由对象,from:正要离开的路由
  console.log('全局后置守卫被调用'+from+to)
  console.log('#############')
})

export default router
