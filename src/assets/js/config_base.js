
window.PUB = {}
PUB.domain = "http://localhost:3000"
//PUB.domain = 'http://test.dmagic.cn'
//PUB.domain="http://e6234kn.hn3.mofasuidao.cn"//魔法隧道地址
//PUB.domain = "http://120.76.160.41:3000"
PUB.urlUpload = `https://up-z2.qiniup.com`//七牛云上传地址（域名）
PUB.urlGetQiniuToken = `${PUB.domain}/api_third_part/get_qiniu_token?scope=dmagic`
let _systemId = "sys_api";
PUB._systemId = _systemId;
PUB.systemName = "前端学习系统";
PUB.userId = localStorage.api_loginUserName;


PUB.listCFCommon = {
  url: {
    list: `/info/getCommonList`, //列表接口
    add: "/info/commonAdd", //新增接口
    modify: "/info/commonModify", //修改接口
    detail: "/info/commonDetail",
    delete: "/info/commonDelete" //删除接口
  },

}



import "@/assets/js/config_column.js"
import "@/assets/js/config_form.js"




//函数：{补充熟悉度ajax配置（动态数据字典）函数}
window.setFamiliarityAjaxCF = function (listCF) {

  util.setObjDefault(listCF, { dynamicDict: [] });
  let dict = {
    ajax: {
      param: { _systemId, _dataType: "familiarity",  findJson: { userId: PUB.userId }, },
      url: "/info/getCommonList",
    },
   
    populateColumn: "familiarityDoc",
    idColumn: "_id",
    idColumn2: "dataId"
  }
  listCF.dynamicDict.push(dict)

}


//#region DYDICT:公共数据字典对象管理
window.DYDICT = {}//公共数据字典对象

DYDICT.html_api_category = {
  ajax: {
    param: { _systemId, _dataType: "html_api_category" },
    url: "/info/getCommonList",
  },
  populateColumn: "categoryDoc",
  idColumn: "category",
  idColumn2: "_id"
};

//html-api的熟悉度数据字典****
// DYDICT.html_api_familiarity = {
//   ajax: {
//     param: { _systemId, _dataType: "familiarity", userId: "xxx" },
//     url: "/info/getCommonList",
//   },
//   populateColumn: "familiarityDoc",
//   idColumn: "_id",
//   idColumn2: "dataId"
// };



DYDICT.aaa = 1111;
DYDICT.aaa = 1111;
DYDICT.aaa = 1111;

//#endregion










