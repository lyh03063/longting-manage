// import Vue from 'vue'
Vue.config.productionTip = false
// import lodash from 'lodash'//导入lodash方法库
window.lodash=lodash
Vue.prototype.$lodash = lodash//让vue实例中可访问$store
import axios from "axios";
window.axios = axios;
import ajax from "@/assets/js/ajax.js";
window.ajax = ajax;
import moment from "moment";
window.moment = moment; 

// import util from "@/assets/js/util.js";
import config from "@/assets/js/config.js";


 
// import VueRouter from 'vue-router'
Vue.use(VueRouter)
import "./mock.js";
import login from "@/login";
import modify_password from "@/page/modify_password";
import manage from "@/manage";
import listHome from "@/page/listHome";



import list_article_category from "@/page/list_article_category";
import list_article from "@/page/list_article";
import list_admin from "@/page/list_admin";
import list_role from "@/page/list_role";
import list_area from "@/page/list_area";

import list_api_html from "@/page/list_api_html";
import list_html_api_category from "@/page/list_html_api_category";
import list_familiarity from "@/page/list_familiarity";


// window.util=util;
// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: login },
  
   
    
    {
      path: '/manage',
      component: manage,
      redirect: '/listHome', //跳转
      children: [//子路由
        
        {
          path:'/modify_password',component:modify_password
        },
        
        {
          path: '/list_article_category',
          component: list_article_category
        },
        {
          path: '/list_article',
          component: list_article
        },
        {
          path: '/list_area',
          component: list_area
        },
        {
          path: '/list_admin',
          component: list_admin
        },
        {
          path: '/list_role',
          component: list_role
        },

        {
          path: '/list_api_html',
          component: list_api_html
        },
        {
          path: '/list_html_api_category',
          component: list_html_api_category
        },
        {
          path: '/list_familiarity',
          component: list_familiarity
        },





        
        {
          path: '/listHome',
          component: listHome
        },
       
     
        
      
        
     
      ]
    },
  ]
})
// import Vuex from 'vuex'//导入vuex模块
// Vue.use(Vuex)//应用组件
const store = new Vuex.Store({//定义Vuex的存储对象
  state: {
    debug:false,
    activeMenuIndex: "",//当前激活的菜单index
    listState: {//存放列表的共享状态，
    }, 
    defultFindJson: {//存放列表的默认查询参数，
      // list_article:{articleCategory:3  }
    },   
  },
  mutations: {//变更事件
    setDebug(state, param) {//设置debug模式
      state.debug= param;
    },

    setListFindJson(state, param) {//设置列表的初始筛选参数值
      state.defultFindJson[param.listIndex] = param.findJson;
      //对listState进行整个对象的变更（深拷贝），因为listState是有注册的，可以触发响应
      let str = JSON.stringify(state.defultFindJson)//对象转换成字符串
      state.defultFindJson = JSON.parse(str)//字符串转换成对象
    },
    initListState(state, param) {//改变列表的初始状态值
      state.listState[param.listIndex] = param.objState;
      //对listState进行整个对象的变更（深拷贝），因为listState是有注册的，可以触发响应
      let str = JSON.stringify(state.listState)//对象转换成字符串
      state.listState = JSON.parse(str)//字符串转换成对象
    },
    changeActiveMenu(state, activeMenuIndex) {//改变聚焦菜单
      state.activeMenuIndex = activeMenuIndex
    },
    openDialogAdd(state, listIndex) {//打开新增弹窗事件
      state.listState[listIndex].isShowDialogAdd = true;
    },
    closeDialogAdd(state, listIndex) {//关闭新增弹窗事件
      state.listState[listIndex].isShowDialogAdd = false;
    },
    openDialogDetail(state, param) {//打开详情弹窗事件
      state.listState[param.listIndex].isShowDialogDetail = true;
      state.listState[param.listIndex].row = param.row;//将行数据保存到vuex
    },
    closeDialogDetail(state, listIndex) {//关闭详情弹窗事件
      state.listState[listIndex].isShowDialogDetail = false;
    },
  }
})
Vue.prototype.$store = store//让vue实例中可访问$store
Vue.prototype.$handelItem = util.handelItem//让vue实例中可访问$handelItem




import Main from './main.vue'
new Vue({
  render: h => h(Main),
  router,
}).$mount('#app')