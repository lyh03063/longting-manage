

//#region 基本配置
window.PUB = window.PUB||{}
PUB.domain = "http://localhost:3000"
//PUB.domain = "http://120.76.160.41:3000"
//PUB.domain = 'http://test.dmagic.cn'


//#region 列表模块名数组配置
PUB.arrListName=[
  
  "project_case", "goods", 
]
//#endregion

//#region 菜单列表

PUB.menuList = [
  {
    //菜单
    index: "listHome",
    route: "/listHome",
    icon: "el-icon-house",
    title: "首页"
  },
  {
    index: "apiCenter",
    icon: "el-icon-document",
    title: "基础数据",
    menuItem: [
      {
        index: "list_project_case",
        route: "/list_common?type=project_case",
        title: "工程案例"
      },
      {
        index: "list_goods",
        route: "/list_common?type=goods",
        title: "龙庭商品/服务"
      },
      {
        index: "list_url",
        route: "/list_common?type=url",
        title: "网址"
      },
      {
        index: "list_note",
        route: "/list_common?type=note",
        title: "笔记"
      }
    ]
  },
  {
    index: "newsCenter",
    icon: "el-icon-document",
    title: "其他数据",
    menuItem: [
      {
        index: "list_group",
        route: "/list_common?type=group",
        title: "分组"
      }
    ]
  },

  {
    index: "systemManage",
    icon: "el-icon-setting",
    title: "系统管理",
    menuItem: [
      {
        index: "list_data_type",
        route: "/list_common?type=data_type",
        title: "数据类型"
      },
      {
        index: "list_all",
        route: "/list_common?type=all",
        title: "所有数据"
      },
      {
        index: "list_admin",
        route: "/list_common?type=admin",
        title: "管理员"
      },
      { index: "list_role", route: "/list_role", title: "角色" }
    ]
  }
];
//#endregion






//附加的一级路由
PUB.arrRouteAddon = [{ path: '/detail_group', component: () => import("@/page/detail_group") },
{ path: '/detail_data', component: () => import("@/page/detail_data") },
{ path: '/detail_group_g_card', component: () => import("@/page/detail_group_g_card") },]
//#endregion


PUB.arrListName.forEach(itemEach=>{//循环：{列表模块名数组}
  import(`@/assets/js/config/list_${itemEach}.js`);
})


// PUB.arrDetailGroupMoudles.forEach(itemEach=>{//循环：{分组数据列表模块名数组}
//   import(`@/assets/js/config/detail_group/detail_group_${itemEach}.js`);
// })


export default {}