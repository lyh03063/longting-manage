// import "@/assets/js/config_base.js"

let _dataType = "note",
  _systemId = PUB._systemId;
PUB.listCF.list_note = {
  idKey: "_id", //键名
  pageSize: 20,
  listIndex: "list_note", //vuex对应的字段~
  focusMenu: true, //进行菜单聚焦
  twoTitle: "笔记", //面包屑2级菜单
  ...PUB.listCFCommon,//展开公共配置
  //批量操作按钮的配置
  batchBtns: {
    addon: [
      util.cfList.bBtns.add,
      util.cfList.bBtns.delete,
      { uiType: "slot", slot: "slot_in_toolbar" }
    ],
  },
  //dynamicDict动态数据字典配置
  dynamicDict: [
    DYDICT.note_category
  ],
  //objParamAddon列表接口的附加参数
  objParamAddon: {
    _systemId,
    _dataType,
    //传入联表查询参数
    arrLookup: []
  },
  //公共的附加参数，针对所有接口
  paramAddonPublic: {
    _systemId,
    _dataType
  },
  //列表单项操作按钮的配置
  singleBtns: {
    addon: [
      ...util.cfList.sBtns.arrAllBtns,
    ]
  },

  //-------列配置数组-------
  columns: [COLUMNS._id, COLUMNS.title_fixed, COLUMNS.desc, COLUMNS.category_multiple, COLUMNS.familiarity_select, COLUMNS.importance, COLUMNS.demoList],
  //-------筛选表单字段数组-------
  searchFormItems: [F_ITEMS.title_search, F_ITEMS.note_category, F_ITEMS.importance],
  //-------详情字段数组-------
  detailItems: [D_ITEMS.title, D_ITEMS.detail, D_ITEMS.desc, D_ITEMS.category, D_ITEMS.importance, D_ITEMS._id, D_ITEMS.demoList, D_ITEMS.note_linkList, D_ITEMS.note_noteList],
  //-------新增、修改表单字段数组-------
  formItems: [
    F_ITEMS.title,
    F_ITEMS.note_category,
    F_ITEMS.desc,
    F_ITEMS.detail,
    F_ITEMS.importance,
    //F_ITEMS.demoList,
    //F_ITEMS.note_linkList
  ]
}
