
import VueRouter from 'vue-router';
import AppMain from './components/AppMain';
import AppUserAds from './components/ads/AppUserAds';

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
      path: '/favourites',
      component: () => import('./components/ads/AppUserFavouriteAds') ,
      meta: { requiresAuth: true },
    },
    {
      path: '/ads',
      meta: { requiresAuth: true },
      component : AppUserAds
    },
    {
      path: '/ads/create',
      component: () => import('./components/ads/AppCreateAd') ,
      meta: { requiresAuth: true },
      
    },
   
  ]
});

 router.beforeEach((to, from, next)=>{
  if(to.meta.requiresAuth && !authStore.user){
    next('/')
  }
  next()
}) 

export default router;