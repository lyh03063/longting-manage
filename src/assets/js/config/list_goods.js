let _dataType = "goods",
    _systemId = PUB._systemId;

PUB.listCF.list_goods = {
    idKey: "_id", //键名
    pageSize: 20,
    listIndex: "list_goods", //vuex对应的字段~
    focusMenu: true, //进行菜单聚焦
    breadcrumb: [
        { value: "首页", path: "#/listHome" },
        { value: "商品/服务" }
    ],
    ...PUB.listCFCommon2, //展开公共配置

    singleBtns: {
        addon: [
            ...util.cfList.sBtns.arrAllBtns,

            {
                uiType: "link",
                text: "查看前台展示",
                target: "_blank",
                urlFormatter: function(row) {
                    return `http://www.szltkt.cn/goods/${row._id}`;
                },
            },
        ]
    },


    //objParamAddon列表接口的附加参数
    objParamAddon: {
        _systemId,
        _dataType
    },
    //公共的附加参数，针对所有接口
    paramAddonPublic: {
        _systemId,
        _dataType
    },

    //-------列配置数组-------
    columns: [COLUMNS.title_fixed, COLUMNS._id, COLUMNS.desc, COLUMNS.priceMarket, COLUMNS.priceSell, COLUMNS.priceSellSection, COLUMNS.isPublish, COLUMNS.countOrder],
    //-------筛选表单字段数组-------
    searchFormItems: [F_ITEMS.title_search],
    //-------详情字段数组-------
    detailItems: [D_ITEMS.title, D_ITEMS.desc, D_ITEMS.trueName, D_ITEMS.priceMarket, D_ITEMS.priceSell, D_ITEMS.priceSellSection, D_ITEMS.isPublish, D_ITEMS.countOrder],
    //-------新增、修改表单字段数组-------
    formItems: [
        F_ITEMS.title,
        F_ITEMS.desc,
        F_ITEMS.album,
        F_ITEMS.trueName,
        F_ITEMS.detail,
        F_ITEMS.priceMarket, F_ITEMS.priceSell, COLUMNS.priceSellSection, F_ITEMS.isPublish,
        F_ITEMS.listSpecPrice,
    ]
}