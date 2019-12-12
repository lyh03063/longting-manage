window.PUB = {}
//PUB.domain = "http://localhost:3000"
//PUB.domain = 'http://test.dmagic.cn'
//PUB.domain="http://e6234kn.hn3.mofasuidao.cn"//魔法隧道地址
PUB.domain = "http://120.76.160.41:3000"
PUB.urlUpload = `https://up-z2.qiniup.com`//七牛云上传地址（域名）
PUB.urlGetQiniuToken = `${PUB.domain}/api_third_part/get_qiniu_token?scope=dmagic`
let _systemId = "sys_api";
PUB._systemId = _systemId;
PUB.systemName = "前端学习系统";
PUB.userId = localStorage.api_loginUserName;
//公共的列表对象
PUB.listCF = {}
PUB.listCFCommon = {
  url: {
    list: `/info/getCommonList`, //列表接口
    add: "/info/commonAdd", //新增接口
    modify: "/info/commonModify", //修改接口
    detail: "/info/commonDetail",
    delete: "/info/commonDelete" //删除接口
  },
  columnOperate:{"min-width":160},
  //列表单项操作按钮的配置
  singleBtns: {
    addon: [
      util.cfList.sBtns.detail,
      util.cfList.sBtns.modify,
      // util.cfList.sBtns.copy,
      util.cfList.sBtns.delete,
    ]
  },
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
