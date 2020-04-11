
import VueRouter from 'vue-router';
import AppMain from './components/AppMain';
import AppCreateAd from './components/ads/AppCreateAd';
import AppAdsList from './components/ads/AppAdsList';

import authStore from './components/store/auth'



const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: AppMain
    },
    {
      path: '/about',
      component: () => import('./components/AppAbout') 
    }, 
    {
      path: '/contacts',
      component: () => import('./components/AppContacts')  
    },
    {
      path: '/login',
      component: () => import('./components/user/AppLogin') 
    }, 
    {
      path: '/register',
      component: () => import('./components/user/AppRegister') 
    },
    {
      path: '/profile',
      component: () => import('./components/user/AppProfile') ,
      meta: { requiresAuth: true },
    },
    {
      path: '/ads',
      name : 'my-ads',
      meta: { requiresAuth: true },
      component : AppAdsList
    },
    {
      path: '/ads/create',
      meta: { requiresAuth: true },
      component : AppCreateAd
    },
   
  ]
});

 router.beforeEach((to, from, next)=>{
  if(to.meta.requiresAuth && !authStore.user){
    console.log('guard')
    next('/')
  }
 
  
  next()
}) 

export default router;