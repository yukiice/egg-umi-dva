import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes:[
    {
      path:'/',
      component:'@/layouts/index',
      routes: [
        { exact:true, path: '/', component: '@/pages/home/home' },
        { exact:true,path: '/order', component: '@/pages/order/order' },
        {exact:true,path: '/user', component: '@/pages/user/user' }
      ],
    }
  ],
  fastRefresh: {},
});
