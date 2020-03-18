
let _dataType = "project_case",
  _systemId = PUB._systemId;

PUB.listCF.list_project_case = {
  idKey: "_id", //键名
  pageSize: 20,
  listIndex: "list_project_case", //vuex对应的字段~
  focusMenu: true, //进行菜单聚焦
  breadcrumb: [
    { value: "首页", path: "#/listHome" },
    { value: "工程案例" }
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
detailItems:["title","desc","link"],
//-------列配置数组-------
columns:["title_fixed","_id","desc","link"],
//-------筛选表单字段数组-------
searchFormItems:["title_search"],
//-------新增、修改表单字段数组-------
formItems:["title","desc","album","detail"],




}
util.reformCFListItem(PUB.listCF.list_project_case)