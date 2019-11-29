import list_member_for_select from "@/assets/js/config/list_member_for_select.js"
let _systemId = "sys_api";
//#region F_ITEMS:表单字段管理
import "@/assets/js/config_detail.js"
window.F_ITEMS = {};
F_ITEMS.Id = {
  label: "数据id",
  prop: "P1",
  type: "input"
};
F_ITEMS.payStatus = {
  label: "支付状态",
  prop: "payStatus",
  type: "select",
  options: [
    { label: "已支付", value: 2 },
    { label: "未支付", value: 1 }
  ]
};
F_ITEMS.auditStatus = {
  label: "审核状态",
  prop: "auditStatus",
  type: "select",
  options: [
    { label: "未审核", value: 1 },
    { label: "审核不通过", value: 2 },
    { label: "审核通过", value: 3 }
  ]
};
F_ITEMS.publicationStatus = {
  label: "发布状态",
  prop: "publicationStatus",
  type: "select",
  options: [{ label: "是", value: 1 }, { label: "否", value: 2 }]
};
F_ITEMS.album = {
  label: "相册",
  prop: "album",
  type: "upload",
  col_span: 24, //控制显示一行多列
  tips: "图片尺寸比例最好保持在1:0.8，建议尺寸：宽500px，高400px"
};

/****************************赛事报名-START****************************/
F_ITEMS.phone = {
  label: "手机号",
  prop: "phone",
  type: "input"
};
F_ITEMS.sex = {
  label: "性别",
  prop: "sex",
  type: "select",
  options: [{ label: "男", value: 1 }, { label: "女", value: 2 }]
};
F_ITEMS.age = {
  label: "年龄",
  prop: "age",
  type: "input"
};
F_ITEMS.career = {
  label: "职业",
  prop: "career",
  type: "input"
};
F_ITEMS.ballAge = {
  label: "球龄",
  prop: "ballAge",
  type: "select",
  options: [
    { label: "一年以下", value: 1 },
    { label: "一到三年", value: 2 },
    { label: "三到五年", value: 3 },
    { label: "五到十年", value: 4 },
    { label: "十年以上", value: 5 }
  ]
};
F_ITEMS.idCard = {
  label: "身份证号",
  prop: "idCard"
};

F_ITEMS.aaaa = 11111;
F_ITEMS.aaaa = 11111;
F_ITEMS.aaaa = 11111;
F_ITEMS.aaaa = 11111;
F_ITEMS.aaaa = 11111;
/****************************赛事报名-END****************************/



/****************************通用数据-START****************************/
F_ITEMS.title = { ...D_ITEMS.title };
F_ITEMS.title_search = { ...D_ITEMS.title, type: "input_find_vague" };
F_ITEMS.desc = { ...D_ITEMS.desc, type: "textarea" };
F_ITEMS.detail = { ...D_ITEMS.detail, type: "editorTM" };
/****************************通用数据-END****************************/

/****************************分类-START****************************/


F_ITEMS.category_name = { ...D_ITEMS.category_name, type: "input" };
F_ITEMS.category_remark = { ...D_ITEMS.category_remark, type: "textarea" };

/****************************分类-END****************************/

F_ITEMS.category = { ...D_ITEMS.category, type: "input" };

F_ITEMS.html_api_category = {
  ...D_ITEMS.category,
  type: "select",
  ajax: {
    param:  {_systemId ,_dataType:"html_api_category"},
    url: "/info/getCommonList",
    keyLabel: "title",
    keyValue: "_id"
  }
};



F_ITEMS.familiarity = {...D_ITEMS.familiarity, type: "input"};
F_ITEMS.dataType = {...D_ITEMS.dataType, type: "input"};
F_ITEMS.dataId = {...D_ITEMS.dataId,type: "input"};
F_ITEMS.userId = {...D_ITEMS.userId, type: "input"};








/****************************管理员-START****************************/
F_ITEMS.userName = { ...D_ITEMS.userName, type: "input" };
F_ITEMS.passWord = { ...D_ITEMS.passWord, type: "passWord" };
F_ITEMS.nickName = { ...D_ITEMS.nickName, type: "input" };
F_ITEMS.role = { ...D_ITEMS.role, type: "jsonEditor" };
/****************************管理员-END****************************/



/****************************角色-START****************************/

let styleMenuPowerItem = `margin-bottom:10px;padding:0 5px`;
let styleMenuGPowerItem = `margin-bottom:0;border:none;padding:0`;
//函数定义：{获取菜单权限表单配置函数}
function getFormMenuGPower({ menuName = "XXX" }) {


  return {
    col_span: 4,
    labelWidth: "10px",
    formItems: [
      {
        label: "",
        prop: "menuName",
        default: menuName,
        col_span: 4,
        type: "text"
      },
      {
        label: "",
        prop: "add",
        col_span: 3,
        type: "checkbox",
        default: false,
        options: [{ value: "1", label: "添加" }]
      },
      {
        label: "",
        prop: "modify",
        col_span: 3,
        type: "checkbox",
        default: false,
        options: [{ value: "1", label: "修改" }]
      },
      {
        label: "",
        prop: "search",
        col_span: 3,
        type: "checkbox",
        default: false,
        options: [{ value: "1", label: "查询" }]
      },
      {
        label: "",
        prop: "delete",
        col_span: 3,
        type: "checkbox",
        default: false,
        options: [{ value: "1", label: "删除" }]
      }
    ]
  };
}



COLUMNS.roleName = { ...D_ITEMS.roleName, type: "input" };
COLUMNS.rolePower = {
  ...D_ITEMS.rolePower,
  default: {},
  cfForm: {
    labelWidth: "150px",
    formItems: [
      {
        label: "资讯中心",
        prop: "newsCenter",
        style: styleMenuGPowerItem,
        default: {},
        cfForm: {
          col_span: 12,
          formItems: [
            {
              // label: "资讯列表",
              prop: "list_article",
              style: styleMenuPowerItem,
              cfForm: getFormMenuGPower({ menuName: "资讯列表" })
            },
            {
              // label: "资讯分类",
              prop: "list_article_category",
              style: styleMenuPowerItem,
              cfForm: getFormMenuGPower({ menuName: "资讯分类" })
            },

          ]
        }
      },

      {
        label: "系统管理",
        prop: "systemManage",
        style: styleMenuGPowerItem,
        default: {},
        cfForm: {
          col_span: 12,
          formItems: [
            {
              prop: "list_admin",
              style: styleMenuPowerItem,
              cfForm: getFormMenuGPower({ menuName: "管理员" })
            },
            {
              prop: "list_role",
              style: styleMenuPowerItem,
              cfForm: getFormMenuGPower({ menuName: "角色" })
            },
            {

              prop: "list_area",
              style: styleMenuPowerItem,
              cfForm: getFormMenuGPower({ menuName: "地区管理" })
            },
          ]
        }
      }
    ]
  }
};

/****************************角色-END****************************/

F_ITEMS.aaaa = 11111;

//#endregion
