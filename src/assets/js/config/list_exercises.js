// import "@/assets/js/config_base.js"

let _dataType = "exercises",
  _systemId = PUB._systemId;

PUB.listCF.list_exercises = {
  idKey: "_id", //键名
  pageSize: 20,
  listIndex: "list_exercises", //vuex对应的字段~
  focusMenu: true, //进行菜单聚焦
  breadcrumb: [
    { value: "首页", path: "#/listHome" },
    { value: "前端习题" }
  ],
  ...PUB.listCFCommon2,//展开公共配置
  objParamAddon: {
    _systemId,
    _dataType
  },
  //公共的附加参数，针对所有接口
  paramAddonPublic: {
    _systemId,
    _dataType
  },
  //-------列配置数组-------
  columns: [COLUMNS.title_fixed, COLUMNS.desc, COLUMNS.category],
  //-------筛选表单字段数组-------
  searchFormItems: [F_ITEMS.title_search],
  //-------详情字段数组-------
  detailItems: [D_ITEMS.title, D_ITEMS.desc, D_ITEMS.category,D_ITEMS.detail,],
  //-------新增、修改表单字段数组-------
  formItems: [
    F_ITEMS.title,
    F_ITEMS.desc,
    F_ITEMS.detail,

  ]
}
