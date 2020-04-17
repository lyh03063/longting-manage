let _dataType = "order",
    _systemId = PUB._systemId;

PUB.listCF.list_order = {
    idKey: "_id", //键名
    pageSize: 20,
    listIndex: "list_order", //vuex对应的字段~
    focusMenu: true, //进行菜单聚焦
    breadcrumb: [
        { value: "首页", path: "#/listHome" },
        { value: "订单" }
    ],
    ...PUB.listCFCommon2, //展开公共配置

    singleBtns: {
        addon: [
            ...util.cfList.sBtns.arrAllBtns,
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
    //动态数据字典
    dynamicDict: [
        DYDICT.order_user
    ],
    //-------详情字段数组-------
    detailItems: ["orderId", "_id", "openid", "timeOrder", "priceOrder", "listGoods", "payStatus", "addressObj", "remark"],
    //-------列配置数组-------
    columns: ["orderId", "_id", "openid", "orderNickName","receiverName", "phone", "timeOrder", "priceOrder", "listGoods", "payStatus_slot"],
    //-------筛选表单字段数组-------
    searchFormItems: ["orderId"],
    //-------新增、修改表单字段数组-------
    formItems: ["orderId", "openid", "timeOrder", "priceOrder", "listGoods", "payStatus", "addressObj", "remark"],


}
util.reformCFListItem(PUB.listCF.list_order)