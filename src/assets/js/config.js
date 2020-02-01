import "@/assets/js/config_base.js";//注意位置要提前
// import(`@/assets/js/config_base.js`)这种没用，因为是异步
import "@/assets/js/config_detail.js"//基础字段
import "@/assets/js/config_column.js"//列字段
import "@/assets/js/config_form.js"//表单字段
// import "@/assets/js/config/detail_group.js";
//这些导入不被其他模块依赖，所以可以使用import函数
PUB.arrListName.forEach(itemEach=>{//循环：{列表模块名数组}
  import(`@/assets/js/config/list_${itemEach}.js`);
})

/
PUB.arrDetailGroupMoudles.forEach(itemEach=>{//循环：{分组数据列表模块名数组}
  import(`@/assets/js/config/detail_group/detail_group_${itemEach}.js`);
})


export default {}