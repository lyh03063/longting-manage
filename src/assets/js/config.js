// import lodash from 'lodash'//导入lodash方法库
import  "@/assets/js/config_base.js";//注意位置要提前


import "@/assets/js/config_detail.js"//基础字段
import "@/assets/js/config_column.js"//列字段
import "@/assets/js/config_form.js"//表单字段





import  "@/assets/js/config/list_admin.js";
import  "@/assets/js/config/list_role.js";


import  "@/assets/js/config/list_html_api.js";
import  "@/assets/js/config/list_html_api_category.js";
import  "@/assets/js/config/list_css_api.js";
import  "@/assets/js/config/list_css_api_category.js";
import  "@/assets/js/config/list_familiarity.js";

import  "@/assets/js/config/list_article.js";
import  "@/assets/js/config/list_article_category.js";

import  "@/assets/js/config/list_note.js";
import  "@/assets/js/config/list_note_category.js";


import  "@/assets/js/config/list_group.js";
import  "@/assets/js/config/list_all.js";
import  "@/assets/js/config/list_relation.js";
import  "@/assets/js/config/detail_group.js";

import  "@/assets/js/config/list_exercises.js";

import  "@/assets/js/config/list_data_type.js";
import  "@/assets/js/config/list_url.js";
import  "@/assets/js/config/list_front_demo.js";
import  "@/assets/js/config/list_js_api.js";
import  "@/assets/js/config/list_js_api_category.js";
import  "@/assets/js/config/list_vedio.js";

//#region PUB.objDictArr/PUB.dict公共字典对象
PUB.objDictArr = {
  taskType: [
    { value: 1, label: "新需求" },
    { value: 2, label: "bug" },
    { value: 3, label: "其他" }
  ],
  difficulty: [
    { value: 1, label: "简单" },
    { value: 2, label: "一般" },
    { value: 3, label: "困难" },
    { value: 4, label: "很难" }
  ],
  prior: [
    { value: 1, label: "很高" },
    { value: 2, label: "高" },
    { value: 3, label: "中" },
    { value: 4, label: "低" }
  ],
  complete: [
    { value: 0, label: "0%" },
    { value: 0.1, label: "10%" },
    { value: 0.2, label: "20%" },
    { value: 0.3, label: "30%" },
    { value: 0.4, label: "40%" },
    { value: 0.5, label: "50%" },
    { value: 0.6, label: "60%" },
    { value: 0.7, label: "70%" },
    { value: 0.8, label: "80%" },
    { value: 0.9, label: "90%" },
    { value: 1, label: "100%" },
  ],
  complete2: [
    { value: 1, label: "未开始" },//complete==0
    { value: 2, label: "进行中" },//complete>0&&complete>1
    { value: 3, label: "已完成" },//complete>0&&complete>1
  ],
}
//{"P7": Im,"P5":{ $gte: DataStart,$lte: DataEnd } }
PUB.dict = {};//公共数据字典对象，里面会有多个子数据字典对象
//for of循环遍历对象，for of不能直接处理对象，本质上是同个Object.keys拼装一个新数组进行辅助
console.log("Object.keys结果", Object.keys(PUB.objDictArr));
for (var key of Object.keys(PUB.objDictArr)) {
  console.log(key + ": " + PUB.objDictArr[key]);
  PUB.dict[key] = {}
  let arrOpt = PUB.objDictArr[key];
  arrOpt.forEach(itemEach => {//循环：{000数组}
    PUB.dict[key][itemEach.value] = itemEach
  })
}
console.log("PUB.dict#####", PUB.dict);
/**
    * @name 获取数据字典值函数
    * @param dictName字典名，value值
    */
PUB.formatterDict = function (dictName, value) {
  return lodash.get(PUB.dict, `${dictName}.${value}.label`);
}
//#endregion
// PUB.listCF = {}
//页面对应的集合列表类型




export default {}