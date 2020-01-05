window.PUB = {}
//PUB.domain = "http://localhost:3000"
//PUB.domain = 'http://test.dmagic.cn'
PUB.domain = "http://120.76.160.41:3000"
PUB.urlUpload = `https://up-z2.qiniup.com`//七牛云上传地址（域名）
PUB.urlGetQiniuToken = `${PUB.domain}/api_third_part/get_qiniu_token?scope=dmagic`
PUB.systemName = "前端学习系统";
PUB.KeySys = "api";
let _systemId = `sys_${PUB.KeySys}`;
PUB._systemId = _systemId;


PUB.keyLoginUser = `${PUB.KeySys}_loginUserName`;
PUB.keyIsLogin = `${PUB.KeySys}_isLogin`;
PUB.keyRoleId = `${PUB.KeySys}_roleId`;

PUB.userId = localStorage[PUB.keyLoginUser];
//公共的列表对象
PUB.listCF = {}
PUB.listUrl = {
  list: `/info/getCommonList`, //列表接口
  add: "/info/commonAdd", //新增接口
  modify: "/info/commonModify", //修改接口
  detail: "/info/commonDetail",
  delete: "/info/commonDelete" //删除接口
}
PUB.listCFCommon = {
  url: PUB.listUrl,
  columnOperate: { "min-width": 160 },
  //列表单项操作按钮的配置
  singleBtns: {
    addon: [
      util.cfList.sBtns.detail,
      util.cfList.sBtns.modify,
      util.cfList.sBtns.delete,
    ]
  },
}
let sBtnDetail = {
  uiType: "link",
  text: "详情",
  target: "_blank",
  //地址格式函数
  urlFormatter: function (row) {
    return `#/detail_data?dataId=${row._id}`;
  }
}
let sBtnLink = {
  uiType: "link",
  text: "查看",
  target: "_blank",
  urlFormatter: function (row) {
    return `${row.link}`;
  },
}
PUB.singleBtns_copy_detail = {
  addon: [
    ...util.cfList.sBtns.arrAllBtns,
    sBtnDetail,
  ]
}
PUB.listCFCommon2 = {
  url: PUB.listUrl,
  columnOperate: { "min-width": 230 },
  //列表单项操作按钮的配置
  singleBtns: PUB.singleBtns_copy_detail,
}
PUB.singleBtns_copy_link = {
  addon: [
    ...util.cfList.sBtns.arrAllBtns,
    sBtnLink,
  ]
}
PUB.listCFCommon3 = {
  url: PUB.listUrl,
  columnOperate: { "min-width": 230 },
  //列表单项操作按钮的配置
  singleBtns: PUB.singleBtns_copy_link,
}
PUB.singleBtns4 = {
  addon: [
    ...util.cfList.sBtns.arrAllBtns,
    sBtnDetail,
    sBtnLink,
  ]
}
//第四套-有详情和链接按钮
PUB.listCFCommon4 = {
  url: PUB.listUrl,
  columnOperate: { "min-width": 270 },
  //列表单项操作按钮的配置
  singleBtns: PUB.singleBtns4,
}
//函数：{补充熟悉度ajax配置（动态数据字典）函数}
window.setFamiliarityAjaxCF = function (listCF, idKey = "_id") {
  util.setObjDefault(listCF, { dynamicDict: [] });
  let dict = {
    ajax: {
      param: { _systemId, _dataType: "familiarity", findJson: { userId: PUB.userId }, },
      url: "/info/getCommonList",
    },
    populateColumn: "familiarityDoc",
    idColumn: idKey,
    idColumn2: "_idRel"
  }
  listCF.dynamicDict.push(dict)
}
window.FN = {}//存放本站公共函数的对象
//函数：{ajax根据关键词获取关联数据列表的函数}
FN.ajaxlistBykeyword = async function ({ param = {} }) {
  let { data } = await axios({
    //请求接口
    method: "post",
    url: `${PUB.domain}/info/getListBykeyword`,
    data: param
  });
  return data.list;
}