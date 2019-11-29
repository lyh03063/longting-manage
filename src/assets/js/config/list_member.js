
export default {
  // powerPath: "systemManage.list_member",//权限路径
    listIndex: "list_member", //vuex对应的字段
    focusMenu:true,//进行菜单聚焦
    twoTitle: "会员中心",
    threeTitle: "球员列表",
    flag:true,
    dynamicDict: [
      {
        page: "tangball_franchisee",
        populateColumn: "franchisee",
        idColumn: "franchiseeId",
        idColumn2: "P1"
      },
      {
        page: "tangball_venue",
        populateColumn: "venue",
        idColumn: "venueId",
        idColumn2: "P1"
      },
    ],
    url: {
      list: "/crossList?page=tangball_member", //列表接口
      add: "/crossAdd?page=tangball_member", //新增接口
      modify: "/crossModify?page=tangball_member", //修改接口
      detail: "/crossDetail?page=tangball_member", //详情接口
      delete: "/crossDelete?page=tangball_member" //删除接口
    },
    //-------列配置数组-------
    columns: [
      COLUMNS.Id,
COLUMNS.wxNickName,
COLUMNS.member_name,
COLUMNS.openid,
COLUMNS.sex,
COLUMNS.phone,
COLUMNS.franchiseeId,
COLUMNS.venueId,
COLUMNS.entries,
COLUMNS.countAchievement,
COLUMNS.ballAge,
    ],
    //-------筛选表单字段数组-------
    searchFormItems: [
      {
        label: "球员姓名",
        prop: "name",
        type: "input_find_vague"
      },
      {
        label: "手机号",
        prop: "phone",
       
      },
      {
        label: "微信openid",
        prop: "openid",
       
      },
    ],
    //-------详情字段数组-------
    detailItems: [
      D_ITEMS.Id,
D_ITEMS.member_name,
D_ITEMS.sex,
D_ITEMS.openid,
D_ITEMS.phone,
D_ITEMS.franchiseeId,
D_ITEMS.venueId,
D_ITEMS.idCard,
D_ITEMS.entries,
D_ITEMS.career,
D_ITEMS.ballAge,
D_ITEMS.remark, 
    ],
    //-------新增、修改表单字段数组-------
    formItems: [
     {
        label: "球员姓名",
        prop: "name",
        width: 100
      },
     
      {
        label: "手机号",
        prop: "phone",
        width: 100
      },
     
      {
        label: "所属加盟商",
        prop: "franchiseeId",
        type: "select",
        ajax:{
          url: "/crossList?page=tangball_franchisee",
          keyLabel: "name",
          keyValue: "P1"
        },
      },
      {
        label: "所属球场",
        prop: "venueId",
        type: "select",
        ajax:{
          url: "/crossList?page=tangball_venue",
          keyLabel: "name",
          keyValue: "P1"
        },
      },
      {
        label: "性别",
        prop: "sex",
        type: "select",
        default:1,
        options: [{ value: 1, label: "男" }, { value: 2, label: "女" }]
      },
      {
        label: "身份证号",
        prop: "idCard",
        width: 100
      },
      {
        label: "备注",
        prop: "remark",
        width: 150
      } ,
      {
        label: "职业",
        prop: "career",
        type: "input"
      },
      {
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
      }, 
    ]
  }
