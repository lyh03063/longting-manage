// import "@/assets/js/config_base.js"

let _dataType = "relation",
    _systemId = PUB._systemId;

PUB.listCF.detail_group = {
    isShowBreadcrumb: false,//面包屑

    idKey: "_id", //键名
    pageSize: 20,
    listIndex: "detail_group", //vuex对应的字段~
    focusMenu: true, //进行菜单聚焦
    twoTitle: "分组下的数据", //面包屑2级菜单
    ...PUB.listCFCommon,//展开公共配置
    //批量操作按钮的配置
    batchBtns: {

        addon: [
            util.cfList.bBtns.add,
            util.cfList.bBtns.delete,
            { uiType: "slot", slot: "slot_in_toolbar" }
        ],
    },
    //列表单项操作按钮的配置
    singleBtns: {
        addon: [
            util.cfList.sBtns.detail,
            util.cfList.sBtns.modify,
            util.cfList.sBtns.delete,
            {
                uiType: "link",
                text: "查看详情",
                target: "_blank",
                //地址格式函数
                urlFormatter: function (row) {
                    return `#/detail_data?dataId=${row._idRel2}`;
                },
            }
        ]
    },
    sortJsonDefault: {
        "sort": -1
    },
    findJsonDefault: {

    },
    objParamAddon: {
        findJson: {},

        _systemId,
        _dataType
    },
    //公共的附加参数，针对所有接口
    paramAddonPublic: {
        _systemId,
        _dataType
    },
    //dynamicDict动态数据字典配置
    dynamicDict: [
        DYDICT.note_category
    ],
    //-------列配置数组-------
    columns: [
        // COLUMNS._idRel2,
        COLUMNS.sort, COLUMNS.title_fixed,
        COLUMNS.desc, COLUMNS.category_multiple,
        COLUMNS.familiarity_select, COLUMNS.importance
    ],
    //-------筛选表单字段数组-------
    searchFormItems: [],
    //-------详情字段数组-------
    detailItems: [D_ITEMS.title, D_ITEMS.detail, D_ITEMS.desc, D_ITEMS.category, D_ITEMS.importance, D_ITEMS._id, D_ITEMS._idRel, D_ITEMS._idRel2, D_ITEMS.sort],
    //-------新增、修改表单字段数组-------
    formItems: [F_ITEMS._idRel, F_ITEMS._idRel2, F_ITEMS.sort,]






}
