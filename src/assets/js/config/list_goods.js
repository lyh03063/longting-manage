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
                urlFormatter: function (row) {
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



    //-------详情字段数组-------
    detailItems: ["title", "desc", "deliveryDesc", "priceMarket", "priceSell", "priceSellSection", "isPublish", "countOrder"],
    //-------列配置数组-------
    columns: ["title_fixed", "_id", "desc", "priceMarket", "priceSell", "priceSellSection", "isPublish", "countOrder"],
    //-------筛选表单字段数组-------
    searchFormItems: ["title_search"],
    //-------新增、修改表单字段数组-------
    formItems: ["title", "desc", "album", "deliveryDesc", "detail", "priceMarket", "priceSell", "priceSellSection", "isPublish", "listSpecPrice"],


}
util.reformCFListItem(PUB.listCF.list_goods)