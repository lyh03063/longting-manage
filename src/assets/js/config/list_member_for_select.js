
export default {

    pageSize: 10,
    focusMenu: false, //进行菜单聚焦
    isShowBreadcrumb: false, //面包屑
    isShowToolBar: false, //批量操作栏
    isShowOperateColumn: false, //单项操作列
    isRefreshAfterCUD: false, //是否在增删改操作后自动更新列表
    isMultipleSelect: false, //不支持多选
    url: {
      list: "/crossList?page=tangball_member" //列表接口
    },


   
    //-------列配置数组-------
    columns: [
      {
        label: "会员号",
        prop: "P1",
        width: 80
      },
      {
        label: "球员姓名",
        prop: "name",
        width: 100
      },
      {
        label: "微信openid",
        prop: "openid",
        width: 130
      },
       {
        label: "性别",
        prop: "sex",
        width: 65,
        formatter:function(data) {
          if (data.sex==1) {
            return '男'
          }else{
            return '女'
          }
        }
      },
      {
        label: "手机号",
        prop: "phone",
        width: 130
      },
      
      {
        label: "职业",
        prop: "career",
        width: 70
      },
      {
        label: "球龄",
        prop: "ballAge",
        // width: 100,
        formatter: function(rowData) {
          if (rowData.ballAge == 1) {
            return "一年以下";
          } else if (rowData.ballAge == 2) {
            return "一到三年";
          } else if (rowData.ballAge == 3) {
            return "三到五年";
          } else if (rowData.ballAge == 4) {
            return "五到十年";
          }else if (rowData.ballAge == 5) {
            return "十年以上";
          }else{
            return "暂无";
          }
        }
      }
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
   
  }
