
let _dataType = "order",
  _systemId = PUB._systemId;

PUB.listCF.list_order = {
  idKey: "_id", //键名
  pageSize: 20,
  listIndex: "list_order", //vuex对应的字段~
  focusMenu: true, //进行菜单聚焦
  breadcrumb: [
    { value: "首页", path: "#/listHome" },
    { value: "订单" }
  ],
  ...PUB.listCFCommon2,//展开公共配置

  
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
  columns: [COLUMNS.orderId, COLUMNS._id,COLUMNS.openid, COLUMNS.timeOrder, COLUMNS.priceOrder, COLUMNS.listGoods,COLUMNS.payStatus],
  //-------筛选表单字段数组-------
  searchFormItems: [F_ITEMS.orderId],
  //-------详情字段数组-------
  detailItems: [D_ITEMS.orderId, D_ITEMS._id,D_ITEMS.openid, D_ITEMS.timeOrder, D_ITEMS.priceOrder, D_ITEMS.listGoods,D_ITEMS.payStatus,D_ITEMS.addressObj,D_ITEMS.remark],
  //-------新增、修改表单字段数组-------
  formItems: [

    F_ITEMS.orderId, F_ITEMS.openid, F_ITEMS.timeOrder, F_ITEMS.priceOrder, F_ITEMS.listGoods,F_ITEMS.payStatus,F_ITEMS.addressObj,F_ITEMS.remark
  ]
}
