import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/home' },
  { name: 'home', path: '/home', component: () => import('@/components/home'), meta: 'home' },
  { name: 'page', path: '/page/:id', component: () => import('@/components/page'), meta: 'page' },
  {
    name: 'shop',
    path: '/shop',
    component: () => import('@/view/shop'),
    children: [
      { name: 'index', path: '', redirect: '/shop/girl' },
      { name: 'girl', path: 'girl', component: () => import('@/view/shop/components/Girl') }, //path里面不要加 "/"这个路径
      { name: 'it', path: 'it', component: () => import('@/view/shop/components/IT') },
      // { name: 'other', path: 'other', component: () => import('@/view/shop/components/other') },
    ],
  },
  { name: 'notFound', path: '/:pathmatch(.*)*', component: () => import('@/view/notFound') },
]

const router = createRouter({ routes, history: createWebHistory() })
router.beforeEach((to, from) => {
  console.log('beforEach')
  console.log(to.path)
  console.log(from.path)
  if (to.path === '/home') {
    return '/page/222' //返回字符串时为跳转的路径
    return undefined //无返回值时，保持默认跳转
    return {
      //返回对象，可以加更多的参数
      path: '/page/222',
      replace: true,
    }
  }
})

router.afterEach((to, from) => {})
export default router
