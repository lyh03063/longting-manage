// import "@/assets/js/config_base.js"

let _dataType = "$all",
  _systemId = PUB._systemId;

PUB.listCF.list_all = {
  idKey: "_id", //键名
  pageSize: 20,
  listIndex: "list_all", //vuex对应的字段~
  focusMenu: true, //进行菜单聚焦
  twoTitle: "所有数据", //面包屑2级菜单
  ...PUB.listCFCommon,//展开公共配置
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
  columns: [COLUMNS.title_fixed, COLUMNS.desc],
  //-------筛选表单字段数组-------
  searchFormItems: [F_ITEMS.title_search],
  //-------详情字段数组-------
  detailItems: [D_ITEMS.title, D_ITEMS.desc],
  //-------新增、修改表单字段数组-------
  formItems: [
    F_ITEMS.title,
    F_ITEMS.desc,
  ]
}
