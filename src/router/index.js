import { createWebHistory, createRouter } from "vue-router";
import Home from '@/views/Home.vue';


const routes = [
    
    {
        path: '/',
        name: 'Home',
        component : Home
   },
   
     {
        path: '/destination/:id/:slug',
        name: 'Destination',
         component: () => import(/*webpackChunkName:'panama'*/"@/views/Destination.vue"),
        props: route => ({ ...route.params, id: parseInt(route.params.id) }),
         
        children: [

            {
            path: ':experienceSlug',
            name: 'experience.show',
            component: () =>import(/*webpackChunkName:'panama'*/"@/views/ExperienceShow.vue"),
            props: route =>({...route.params, id: parseInt(route.params.id)})
            },

           
        ]
   },
      
      
  /* vue.js lazy loading
   * 
   *     
  */ 
   //   {
   //      path: '/brazil',
   //      name: 'Brazil',
   //      component: () =>
   //          import(/*webpackChunkName:'brazil'*/"@/views/Brazil.vue"),
   //  },
    
   //  {
   //      path: '/panama',
   //      name: 'Panama',
   //      component: () =>
   //          import(/*webpackChunkName:'panama'*/"@/views/Panama.vue"),
   //  },
 
   //     {
   //      path: '/jamaica',
   //      name: 'Jamaica',
   //     component: () =>
   //          import(/*webpackChunkName:'jamaica'*/"@/views/Jamaica.vue"),
   //    },
 
   //   {
   //      path: '/hawaii',
   //      name: 'Hawaii',
   //       component: () =>
   //          import(/*webpackChunkName:'hawaii'*/"@/views/Hawaii.vue"),
   //  },
     
    
 
];

const router = createRouter({
   history: createWebHistory(),
    routes,
   LinkActiveClass:'router-link-active'
});

export default router;