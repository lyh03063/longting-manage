let _dataType = "html_api",
  _systemId = PUB._systemId;
export default {
  idKey: "_id", //键名
  pageSize: 20,
  listIndex: "list_html_api", //vuex对应的字段~
  focusMenu: true, //进行菜单聚焦
  twoTitle: "Html-api", //面包屑2级菜单
  ...PUB.listCFCommon,//展开公共配置
  //dynamicDict动态数据字典配置
  dynamicDict: [
    DYDICT.html_api_category,
 
  ],
  //objParamAddon列表接口的附加参数
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
  columns: [COLUMNS.title_fixed, COLUMNS.desc, COLUMNS.category, COLUMNS.familiarity_select],
  //-------筛选表单字段数组-------
  searchFormItems: [F_ITEMS.title_search,F_ITEMS.html_api_category],
  //-------详情字段数组-------
  detailItems: [D_ITEMS._id, D_ITEMS.title, D_ITEMS.desc, D_ITEMS.detail, D_ITEMS.category],
  //-------新增、修改表单字段数组-------
  formItems: [
    F_ITEMS.title,
    F_ITEMS.html_api_category,
    F_ITEMS.desc,
    F_ITEMS.detail,
  ]
}
