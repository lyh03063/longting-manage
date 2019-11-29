
//#region D_ITEMS:详情字段管理
window.D_ITEMS = {}//公共数据字典对象

D_ITEMS.Id = {
  label: "Id",
  prop: "P1"
};

D_ITEMS.sex = {
  label: "性别",
  prop: "sex",
  formatter: function (data) {
    if (data.sex == 2) {
      return '女'
    } else if (data.sex == 1) {
      return '男'
    } else {
      return ''
    }
  }
};
D_ITEMS.openid = {
  label: "微信号",
  prop: "openid",
};
D_ITEMS.phone = {
  label: "手机号",
  prop: "phone",
};
D_ITEMS.idCard = {
  label: "身份证号",
  prop: "idCard",
};

D_ITEMS.career = {
  label: "职业",
  prop: "career",
};
D_ITEMS.remark = {
  label: "备注",
  prop: "remark",
};



D_ITEMS.age = {
  label: "年龄",
  prop: "age",
};

D_ITEMS.payStatus = {
  label: "支付状态",
  prop: "payStatus",

  formatter: function (rowData) {
    if (rowData.payStatus == 2) {
      return "已支付";
    } else {
      return "未支付";
    }
  }
};
D_ITEMS.auditStatus = {
  label: "审核状态",
  prop: "auditStatus",

  formatter: function (rowData) {
    if (rowData.auditStatus == 1) {
      return "未审核";
    } else if (rowData.auditStatus == 2) {
      return "审核不通过";
    } else if (rowData.auditStatus == 3) {
      return "审核通过";
    } else {
      return "";
    }
  }
};





/****************************通用数据-START****************************/
D_ITEMS.title = {
  label: "标题",
  prop: "title"
};
D_ITEMS.desc = {
  label: "说明",
  prop: "desc"
};
D_ITEMS.detail = {
  label: "详情",
  prop: "detail",

};
/****************************通用数据-END****************************/


D_ITEMS.userName = {
  label: "用户名",
  prop: "userName"
};
D_ITEMS.passWord = {
  label: "密码",
  prop: "passWord"
};
D_ITEMS.nickName = {
  label: "昵称",
  prop: "nickName"
};
D_ITEMS.role = {
  label: "所属角色",
  prop: "role"
};



/****************************角色-START****************************/
D_ITEMS.roleName = {
  label: "角色名",
  prop: "name",

};
D_ITEMS.rolePower = {
  label: "权限",
  prop: "power",

};
/****************************角色-END****************************/


/****************************分类-START****************************/
D_ITEMS.category_name = {
  label: "分类名",
  prop: "name",

};
D_ITEMS.category_remark = {
  label: "分类说明",
  prop: "remark",

};
/****************************分类-END****************************/

D_ITEMS.category = {
  label: "所属分类",
  prop: "category",
};
//#region 熟悉度相关函数
D_ITEMS.familiarity = {
  label: "熟悉度",
  prop: "familiarity",
};

D_ITEMS.dataType = {
  label: "数据类型",
  prop: "dataType",
};

D_ITEMS.dataId = {
  label: "数据Id",
  prop: "dataId",
};

D_ITEMS.userId = {
  label: "用户Id",
  prop: "userId",
};

D_ITEMS._id = {
  label: "uuid",
  prop: "_id",
};



//#endregion

D_ITEMS.aaaa = 1111;
D_ITEMS.aaaa = 1111;
D_ITEMS.aaaa = 1111;
D_ITEMS.aaaa = 1111;
D_ITEMS.aaaa = 1111;
D_ITEMS.aaaa = 1111;
D_ITEMS.aaaa = 1111;
D_ITEMS.aaaa = 1111;
D_ITEMS.aaaa = 1111;







D_ITEMS.item_prop = {
  label: "prop",
  prop: "prop",

};
D_ITEMS.item_label = {
  label: "label",
  prop: "label",
  width: 160,
};
D_ITEMS.item_type = {
  label: "type",
  prop: "type",
  width: 160,
};





D_ITEMS.aaaa = 1111;
D_ITEMS.aaaa = 1111;
D_ITEMS.aaaa = 1111;
D_ITEMS.aaaa = 1111;




//#endregion

