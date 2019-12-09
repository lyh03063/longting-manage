

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





COLUMNS.title_fixed = { ...D_ITEMS.title, width: 320, fixed: true };
COLUMNS.title_fixed_w150 = { ...COLUMNS.title_fixed, width: 150 };

COLUMNS.desc = { ...D_ITEMS.desc, width: 160, };
COLUMNS.html_display = { ...D_ITEMS.html_display, width: 70, };
COLUMNS.importance = {
  ...D_ITEMS.importance, width: 70,
  formatter: function (rowData) {
    return lodash.get(DYDICT.importance, `${rowData.importance}.label`);
  }
};



//#region html_api
COLUMNS.html_display = { ...D_ITEMS.html_display, width: 70, };
COLUMNS.difficulty = { ...D_ITEMS.difficulty, width: 70, };
COLUMNS.english = { ...D_ITEMS.english, width: 70, };
COLUMNS.html_version = { ...D_ITEMS.html_version, width: 70, };
COLUMNS.selfClose = { ...D_ITEMS.selfClose, width: 70, };
COLUMNS.cateIdOld = { ...D_ITEMS.cateIdOld, width: 70, };
//#endregion



//  COLUMNS.detail = {...D_ITEMS.detail, width: 120,};


COLUMNS.userName = { ...D_ITEMS.userName, width: 150, };
COLUMNS.passWord = { ...D_ITEMS.passWord, width: 150, };
COLUMNS.nickName = { ...D_ITEMS.nickName, width: 120, };
COLUMNS.role = { ...D_ITEMS.role, width: 120, };

/****************************角色-START****************************/

COLUMNS.roleName = { ...D_ITEMS.roleName, width: 120, };
COLUMNS.rolePower = { ...D_ITEMS.rolePower, width: 120, };

/****************************角色-END****************************/

/****************************分类-START****************************/

COLUMNS.category_name = { ...D_ITEMS.category_name, width: 120, };
COLUMNS.category_remark = { ...D_ITEMS.category_remark, width: 180, };

/****************************分类-END****************************/


COLUMNS.familiarity_select = {
  ...D_ITEMS.familiarity, width: 120,
  slot: "slot_column_familiarity",
  cfColumn:{"class-name":"table_cell_visible"}//补充特殊单元格类名，进行特殊控制！
};

COLUMNS.familiarity = {
  ...D_ITEMS.familiarity, width: 100,


};


COLUMNS.dataType = { ...D_ITEMS.dataType, width: 80, };
COLUMNS.dataId = { ...D_ITEMS.dataId, width: 210, };
COLUMNS.userId = { ...D_ITEMS.userId, width: 120, };


COLUMNS._id = { ...D_ITEMS._id, width: 120, };


//#region 分组
COLUMNS.group_dataType = { ...D_ITEMS.group_dataType, width: 120, };

//#endregion

//#region 关系
COLUMNS._idRel = { ...D_ITEMS._idRel, width: 220, };
COLUMNS._idRel2 = { ...D_ITEMS._idRel2, width: 220, };
COLUMNS.sort = { ...D_ITEMS.sort, width: 70, };
//#endregion




//单个的分类
COLUMNS.category = {
  ...D_ITEMS.category,
  width: 120,
  formatter: function (rowData) {
    let title = lodash.get(rowData, "categoryDoc.title");
    return title;
  }
};

//支持多个的分类
COLUMNS.category_multiple = {
  ...D_ITEMS.category,
  width: 120,
  formatter: function (rowData) {
    if (!(rowData.categoryDoc&&rowData.categoryDoc.length))return ""
    let arrCate = rowData.categoryDoc.map(doc => {
      return doc.title
    })
    return arrCate.join();
  }
};



COLUMNS.studyTime = {
  ...D_ITEMS.studyTime,
  width: 140,

};


//#endregion

