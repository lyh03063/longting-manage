
import "@/assets/js/config_detail.js"
//#region COLUMNS:列字段管理


window.COLUMNS = {}

COLUMNS.Id = {
  label: "Id",
  prop: "P1",
  width: 50
};



COLUMNS.sex = Object.assign({}, D_ITEMS.sex, { width: 50, })

COLUMNS.phone = {
  label: "手机号",
  prop: "phone",
  width: 110
};
COLUMNS.orderId = {
  label: "订单号",
  prop: "orderId",
  width: 160,
 
};

COLUMNS.aaaa = 11111;


COLUMNS.aaaa = 11111;
COLUMNS.aaaa = 11111;
COLUMNS.aaaa = 11111;
COLUMNS.aaaa = 11111;
COLUMNS.aaaa = 11111;
COLUMNS.aaaa = 11111;
COLUMNS.aaaa = 11111;
 /****************************赛事报名-END****************************/





 COLUMNS.title_fixed = {...D_ITEMS.title, width: 120,fixed: true};
 COLUMNS.desc = {...D_ITEMS.desc, width: 160,};
//  COLUMNS.detail = {...D_ITEMS.detail, width: 120,};


COLUMNS.userName = {...D_ITEMS.userName, width: 150,};
COLUMNS.passWord = {...D_ITEMS.passWord, width: 150,};
COLUMNS.nickName = {...D_ITEMS.nickName, width: 120,};
COLUMNS.role = {...D_ITEMS.role, width: 120,};

 /****************************角色-START****************************/

 COLUMNS.roleName = {...D_ITEMS.roleName, width: 120,};
 COLUMNS.rolePower = {...D_ITEMS.rolePower, width: 120,};

 /****************************角色-END****************************/

 /****************************分类-START****************************/

 COLUMNS.category_name = {...D_ITEMS.category_name, width: 120,};
 COLUMNS.category_remark = {...D_ITEMS.category_remark, width: 180,};

 /****************************分类-END****************************/


 COLUMNS.familiarity_select = {...D_ITEMS.familiarity, width: 300,
  slot:"slot_column_familiarity",
  showOverflowTooltip:false,//溢出不隐藏，但没啥用
};

COLUMNS.familiarity = {...D_ITEMS.familiarity, width: 100,

 
};


 COLUMNS.dataType = {...D_ITEMS.dataType, width: 80,};
 COLUMNS.dataId = {...D_ITEMS.dataId, width: 210,};
 COLUMNS.userId = {...D_ITEMS.userId, width: 120,};


 COLUMNS._id = {...D_ITEMS._id, width: 120,};






 COLUMNS.category = {
  ...D_ITEMS.category,
  width: 120,
  formatter: function (rowData) {
    let title = lodash.get(rowData, "categoryDoc.title");
    return title;
  }
};

//#endregion

