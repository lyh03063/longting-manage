
let _dataType = "refund",
  _systemId = PUB._systemId;

PUB.listCF.list_refund = {
  idKey: "_id", //键名
  pageSize: 20,
  listIndex: "list_refund", //vuex对应的字段~
  focusMenu: true, //进行菜单聚焦
  breadcrumb: [
    { value: "首页", path: "#/listHome" },
    { value: "退款" }
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
  columns: [COLUMNS.refundId, COLUMNS.refundFee,COLUMNS.orderId,COLUMNS.refundStaus, COLUMNS.openid,],
  //-------筛选表单字段数组-------
  searchFormItems: [F_ITEMS.refundId,F_ITEMS.openid],
  //-------详情字段数组-------
  detailItems: [ D_ITEMS.refundId, D_ITEMS.refundFee,D_ITEMS.orderId,D_ITEMS.refundStaus, D_ITEMS.openid,],
  //-------新增、修改表单字段数组-------
  formItems: [
    F_ITEMS.refundId, F_ITEMS.refundFee,F_ITEMS.orderId,F_ITEMS.refundStaus, F_ITEMS.openid,
   
  ]
}
