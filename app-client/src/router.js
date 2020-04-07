
import VueRouter from 'vue-router';
import AppMain from './components/AppMain';
import AppAbout from './components/AppAbout';
import AppContacts from './components/AppContacts';
import AppLogin from './components/user/AppLogin';
import AppRegister from './components/user/AppRegister';
import AppProfile from './components/user/AppProfile';

import userStore from './components/store/auth'


const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: AppMain 
    },
    {
        path: '/about',
        component: AppAbout 
      },
      {
        path: '/contacts',
        component: AppContacts 
      },

      {
        path: '/login',
        component: AppLogin 
      },
      {
        path: '/register',
        component: AppRegister 
      },
      {
        path: '/profile',
        component: AppProfile,
        meta: { requiresAuth : true}
      },
      {
        path: '/adds',
        component: AppProfile,
        meta: { requiresAuth : true}
      },
  ]
});

router.beforeEach((to, from, next)=>{
  if(to.meta.requiresAuth && !userStore.user){
    next('/login')
  }
  next()
})

export default router;