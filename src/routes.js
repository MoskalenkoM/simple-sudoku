import Vue from 'vue';
import VueRouter from 'vue-router';

import sudokuMain from './components/TheMain.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: sudokuMain
    }
  ],
  mode: 'history'
});
