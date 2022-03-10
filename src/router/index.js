import { createWebHistory, createRouter } from "vue-router";
import Home from '@/views/Home.vue';
import sourceData from '@/data.json'

const routes = [
    
    {
        path: '/',
        name: 'Home',
    component: Home,
        alias:'/home'
  },
  
    {
        path: '/protected',
        name: 'Protected',
        component: () => import("@/views/Protected.vue"),
 
    meta: {
      requiresAuth: true
    }

  },
      {
        path: '/login',
        name: 'Login',
        component: () => import("@/views/Login.vue"),
        
  },

   {
    path: '/invoices',
    name: 'invoices',
    component: () => import("@/views/Invoices.vue"),
    meta:{
      requiresAuth: true,
    }
  },
     {
        path: '/destination/:id/:slug',
        name: 'Destination',
         component: () => import("@/views/Destination.vue"),
         props: route => ({ ...route.params, id: parseInt(route.params.id) }),

         beforeEnter(to, from){
            const exists = sourceData.destinations.find(
              destination => destination.id === parseInt(to.params.id)
            )
            if(!exists) return {
                name: 'Notfound',
              // allows keeping the URL while rendering a different page
              params: { pathMatch: from.path.split('/').slice(1) },
              query: from.query,
              hash: from.hash,
            }
    },


        children: [

            {
            path: ':experienceSlug',
            name: 'experience.show',
            
            component: () =>import("@/views/ExperienceShow.vue"),
            props: route =>({...route.params, id: parseInt(route.params.id)})
            },
         ]
    },
     
    {
        path: '/:catchAll(.*)*',
        name: 'Notfound',
        component: () =>import("@/views/Notfound.vue"),
     }
          
 
];

const router = createRouter({
   history: createWebHistory(),
    routes,
   LinkActiveClass:'router-link-active',
  
//scrollBehavior code here

    scrollBehavior (to, from, savedPosition) {
        return savedPosition || new Promise((resolve) => {
            setTimeout(() => {
                  resolve({top:0 ,  behavior: 'smooth',})
            }, 3000);
        } )
          
    }

});


router.beforeEach((to) => {
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth && !window.user) {
       return {name:'Login',query:{locale:'en', q:100}}
  }
    
    
    
})



export default router;