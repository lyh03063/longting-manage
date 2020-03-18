
let _dataType = "user",
  _systemId = PUB._systemId;

PUB.listCF.list_user = {
  idKey: "_id", //键名
  pageSize: 20,
  listIndex: "list_user", //vuex对应的字段~
  focusMenu: true, //进行菜单聚焦
  breadcrumb: [
    { value: "首页", path: "#/listHome" },
    { value: "用户" }
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
 
 
  //-------详情字段数组-------
detailItems:["trueName","nickName","openid","phone","sex","countOrder"],
//-------列配置数组-------
columns:["trueName","nickName","openid","phone","sex","countOrder"],
//-------筛选表单字段数组-------
searchFormItems:["nickName","openid"],
//-------新增、修改表单字段数组-------
formItems:["trueName","nickName","openid","phone","sex"],


}
util.reformCFListItem(PUB.listCF.list_user)