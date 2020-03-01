//#region 基本配置
window.PUB = window.PUB || {}
    //PUB.domain = "http://localhost:3000"
PUB.domain = "https://www.dmagic.cn"
    //PUB.domain = 'http://test.dmagic.cn'


//#region 路由配置
PUB.arrRouteListName = [
    "modify_password",
    "list_article_category",
    "list_article",
    "list_admin",
    "list_role",
    "list_html_api",
    "list_css_api",
    "list_goods",
    "list_note",
    "list_all",
    "listHome",
    "list_common", //通用列表
]

//#endregion

//#region 列表模块名数组配置 
PUB.arrListName = [
        "project_case", "order", "goods", "user",
    ]
    //#endregion

//#region 菜单列表

PUB.menuList = [{
        //菜单
        index: "listHome",
        route: "/listHome",
        icon: "el-icon-house",
        title: "首页"
    },
    {
        index: "apiCenter",
        icon: "el-icon-document",
        title: "基础数据",
        menuItem: [{
                index: "list_project_case",
                route: "/list_common?type=project_case",
                title: "工程案例"
            },
            {
                index: "list_goods",
                route: "/list_goods",
                title: "龙庭商品/服务"
            },
            {
                index: "list_order",
                route: "/list_common?type=order",
                title: "订单"
            },
            {
                index: "list_user",
                route: "/list_common?type=user",
                title: "用户"
            },
            {
                index: "list_url",
                route: "/list_common?type=url",
                title: "网址"
            },
            {
                index: "list_note",
                route: "/list_common?type=note",
                title: "笔记"
            }
        ]
    },
    {
        index: "newsCenter",
        icon: "el-icon-document",
        title: "其他数据",
        menuItem: [{
            index: "list_group",
            route: "/list_common?type=group",
            title: "分组"
        }]
    },

    {
        index: "systemManage",
        icon: "el-icon-setting",
        title: "系统管理",
        menuItem: [{
                index: "list_data_type",
                route: "/list_common?type=data_type",
                title: "数据类型"
            },
            {
                index: "list_all",
                route: "/list_common?type=all",
                title: "所有数据"
            },
            {
                index: "list_admin",
                route: "/list_common?type=admin",
                title: "管理员"
            },
            { index: "list_role", route: "/list_role", title: "角色" }
        ]
    }
];
//#endregion






//附加的一级路由
PUB.arrRouteAddon = [{
            path: '/detail_group',
            component: () =>
                import ("@/page/detail_group")
        },
        {
            path: '/detail_data',
            component: () =>
                import ("@/page/detail_data")
        },
        {
            path: '/detail_group_g_card',
            component: () =>
                import ("@/page/detail_group_g_card")
        },
    ]
    //#endregion


PUB.arrListName.forEach(itemEach => { //循环：{列表模块名数组}
    import (`@/assets/js/config/list_${itemEach}.js`);
})


// PUB.arrDetailGroupMoudles.forEach(itemEach=>{//循环：{分组数据列表模块名数组}
//   import(`@/assets/js/config/detail_group/detail_group_${itemEach}.js`);
// })






//#region FN函数库


window.FN = window.FN || {}
    //函数：{获取规格链id函数}
FN.getIdSpecChian = function(arrSpecSelected) {
    let arrId = arrSpecSelected.map(doc => lodash.get(doc, `objSOp.__id`));
    return arrId.sort().join("__");

}

//函数：{获取规格链名称函数}
FN.getNameSpecChian = function(arrSpecSelected) {
    let arrId = arrSpecSelected.map(doc => lodash.get(doc, `objSOp.name`));
    return arrId.join(" + ");

}



//函数：{标记不符合条件的组合结果项的函数}
FN.handelCombResult = function({ listSpecs, arrResult }) {
    /****************************标记不符合条件的项-START****************************/
    //循环：{规格数组}
    listSpecs.forEach((itemEach, index) => {
        if (!itemEach.objSpecTerm) return;
        let indexTerm; //条件规格所在的位置
        let valTerm; //条件值
        for (var prop in itemEach.objSpecTerm) {
            indexTerm = listSpecs.findIndex(doc => doc.name == prop);
            valTerm = itemEach.objSpecTerm[prop];

        }
        //循环：{组合结果数组}
        arrResult.forEach(itemEach => {
            console.log("itemEach[indexTerm].name:", itemEach[indexTerm].name);
            let flag = itemEach[indexTerm].name != valTerm;
            console.log("flag:", flag);
            if (flag) {
                itemEach[index] = { name: "——" };
            }
        });
    });
    return arrResult
        /****************************标记不符合条件的项-END****************************/
}



//函数：{规格价格列表去重函数}
FN.uniqListSpecPrice = function(listSpecPrice) {
        let listSpecPriceNew = [];
        //循环：{规格价格列表}
        listSpecPrice.forEach(itemEach => {
            let obj = listSpecPriceNew.find(doc => doc.id == itemEach.id);
            //如果{000}000
            if (!obj) {
                listSpecPriceNew.push(itemEach);
            }
        });
        return listSpecPriceNew
    }
    //#endregion







//变量：{规格列表}
let listSpecs = [{
            __id: "jixing",
            name: "机型",
            options: [{
                "__id": "jixing_1",
                "name": "风管机",
                "imgSrc": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=938396482,3800816148&fm=26&gp=0.jpg"
            }, {
                "__id": "jixing_2",
                "name": "挂机",
                "imgSrc": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3038639374,564763994&fm=26&gp=0.jpg"
            }]
        },
        {
            __id: "pishu",
            name: "匹数",
            options: [{
                    __id: "pishu_1",
                    name: "1~3匹",
                    imgSrc: ""
                },
                {
                    __id: "pishu_2",
                    name: "3匹以上",
                    imgSrc: ""
                }
            ]
        }
    ]
    //变量：{表单数据}
let formData = {
        listSpecs: listSpecs,
        listSpecPrice: [{ "spec0": "风管机", "spec1": "1~3匹", "id": "jixing_1__pishu_1", "price1": 0, "stock": 1 }, { "spec0": "风管机", "spec1": "3匹以上", "id": "jixing_1__pishu_2", "price": 2, "stock": 2 }, { "spec0": "挂机", "spec1": "1~3匹", "id": "jixing_2__pishu_1", "price": 3, "stock": 3 }, { "spec0": "挂机", "spec1": "3匹以上", "id": "jixing_2__pishu_2", "price": 4, "stock": 4 }],
        dictSpecPrice: {
            jixing_1__pishu_1: { price: 1, stock: 1 },
            jixing_1__pishu_2: { price: 2, stock: 2 },
            jixing_2__pishu_1: { price: 3, stock: 3 },
            jixing_2__pishu_2: { price: 4, stock: 4 }
        },
    }
    //#region MIX.goods_specs:后台的商品规格选择混入配置
    {
        let T;
        MIX.goods_specs = {
            data() {
                return {
                    //规格价格表的固定列
                    columnsFixed: [{
                            label: "价格",
                            prop: "price",
                            slot: "slot_column_price",
                            width: 180
                        },
                        {
                            label: "库存",
                            prop: "stock",
                            slot: "slot_column_stock",
                            // width: 180
                        }
                    ],
                    cfListSpecPrice: {
                        isShowBreadcrumb: false, //面包屑
                        isShowSearchForm: false, //查询表单
                        isShowToolBar: false, //批量操作栏
                        isShowOperateColumn: false, //单项操作列
                        isShowPageLink: false, //分页链接
                        isShowCheckedBox: false, //选择框
                        listIndex: "list_static_demo", //vuex对应的字段~
                        focusMenu: true, //进行菜单聚焦
                        //操作列配置
                        //-------列配置数组-------
                        columns: [{
                                label: "机型",
                                prop: "spec1",
                                width: 120
                            },
                            {
                                label: "匹数",
                                prop: "spec2",
                                width: 120
                            },
                            {
                                label: "价格",
                                prop: "price",
                                slot: "slot_column_price",
                                width: 180
                            }
                        ]
                    },
                    formData: formData,
                    cfForm: {
                        labelWidth: "150px",
                        formItems: [F_ITEMS.prop1, F_ITEMS.listSpecs, F_ITEMS.listSpecPrice],
                        btns: [
                            { text: "提交", event: "submit", type: "primary", validate: true },
                            { text: "取消", event: "cancel" }
                        ]
                    }
                };
            },
            watch: {
                "formData.listSpecs": {
                    handler(newVal, oldVal) {
                        console.log("listSpecs changed");
                    },
                    immediate: true,
                    deep: true
                }
            },
            methods: {
                //函数：{设置缓存规格/价格表数据字典的函数}
                setCacheSpecPrice() {
                    formData.listSpecPrice.forEach(itemEach => {
                        let { id, price, stock } = itemEach;
                        if (!id) return;
                        formData.dictSpecPrice[id] = { price, stock };
                    });
                },
                //函数：{获取缓存规格/价格表数据字典的函数}
                getCacheSpecPrice(formData) {

                    formData.listSpecPrice.forEach(itemEach => {
                        let { id } = itemEach;
                        if (!id) return;
                        let doc = lodash.get(formData.dictSpecPrice, `${id}`);
                        if (!doc) return;
                        Object.assign(itemEach, doc); //合并对象
                    });
                },
                //函数：{更新规格/价格表的函数}
                updateSpecPeice(formData) {
                    if (!formData) return
                    console.log("formData:", formData);
                    console.log("T.formData:", T.formData);
                    alert("updateSpecPeice");
                    T.setCacheSpecPrice(); //调用：{设置缓存规格/价格表数据字典的函数}
                    let { listSpecs } = formData;
                    let arrParam = listSpecs.map(doc => doc.options);
                    let arrResult = util.combination(arrParam); //调用：{返回多个数组的排列组合结果数组函数}
                    formData.listSpecPrice = arrResult.map(arr => {
                        let obj = {};
                        let arrId = [];
                        arr.forEach((item, i) => {
                            arrId.push(item.__id);
                            obj[`spec${i}`] = item.name;
                            //循环：{000数组}
                        });
                        obj.id = arrId.sort().join("__"); //先排序，确保拼接好的id的稳定性！！！
                        return obj;
                    });
                    T.getCacheSpecPrice(formData); //调用：{获取缓存规格/价格表数据字典的函数}
                    let arrColumns = listSpecs.map((doc, i) => {
                        return {
                            label: doc.name,
                            prop: `spec${i}`,
                            width: 120
                        };
                    });
                    arrColumns.push(...T.columnsFixed);
                    T.cfListSpecPrice.columns = arrColumns;
                },
                //函数：{获取选项名称数组的函数}
                getSpecItem(doc) {
                    let { options = [] } = doc;
                    return options.map(item => item.name);
                },
            },
            created() {
                T = this;
            },
            async mounted() {
                //如果{规格/价格表}存在
                if (T.formData.listSpecPrice) {
                    T.updateSpecPeice(); //调用：{更新规格/价格表的函数}
                }
            }
        }
    }
    //#endregion

//#region MIX.goods_specs_front:前端的商品规格选择混入配置
{
    let T;
    MIX.goods_specs_front = {
        data() {
            return {
                imgSrcSpec: "",
                priceSpec: null,
                //存储已选规格项的数组
                arrSpecSelected: null,
                //数据字典-规格价格表
                dictSpecPrice: {},
                formData: formData,
            };
        },
        methods: {
            //函数：{初始化购物车图标函数}
            initIconCart: function() {
                //调用：{从LocalStorage获取一个对象的函数}
                let objGoodsCart = util.getLocalStorageObj("objGoodsCart");
                objGoodsCart = objGoodsCart || { listGoods: [] };
                T.countCartGoods = objGoodsCart.listGoods.length;
            },
            //函数：{加入购物车函数}
            addCart: function() {
                if (T.isCompleteSelected()) {
                    let objGoods = T.getObjGoods(); //调用：{获取当前商品对象函数}
                    T.goodsAddCart(objGoods); //调用：{商品加入到购物车函数}
                    T.initIconCart(); //调用：{初始化购物车图标函数}

                    T.$message.success('加入购物车成功');

                } else {
                    //Q2:选择规格不完整
                    T.$message.error('请选择完整规格');
                }
            },
            //函数：{一组商品加入到购物车函数}-多种情况
            goodsAddCart: function(objGoods) {
                //调用：{从LocalStorage获取一个对象的函数}
                let objGoodsCart = util.getLocalStorageObj("objGoodsCart");
                objGoodsCart = objGoodsCart || { listGoods: [] };

                let isExist; //变量：{同种商品是否存在}

                objGoodsCart.listGoods.forEach(goodsEach => {
                    let { _id, arrSpec = [] } = goodsEach;
                    //变量：{遍历到商品的规格链id}
                    let idSpecChainEach = FN.getIdSpecChian(arrSpec); //调用：{获取规格链id函数}
                    //变量：{当前商品的规格链id}
                    let idSpecChainCurr = FN.getIdSpecChian(objGoods.arrSpec); //调用：{获取规格链id函数}
                    let flag = _id == objGoods._id && idSpecChainCurr == idSpecChainEach;
                    //Q1:同“商品id”和“规格Id链”的商品已存在
                    if (flag) {
                        isExist = true;
                        goodsEach.count += objGoods.count; //购买数量叠加
                        goodsEach.priceTotal += objGoods.priceTotal; //总价叠加
                    }
                });

                if (!isExist) {
                    //Q1:{同种商品是否存在}为真
                    objGoodsCart.listGoods.unshift(objGoods); //加入一组商品
                }

                //调用：{设置一个对象到LocalStorage}
                util.setLocalStorageObj("objGoodsCart", objGoodsCart);
            },
            //函数：{获取当前商品对象函数}
            getObjGoods: function() {
                let { _id, title } = T.docGoods;
                let objGoods = {
                    _id,
                    idSpecChain: FN.getIdSpecChian(T.arrSpecSelected), //调用：{获取规格链id函数}
                    nameSpecChain: FN.getNameSpecChian(T.arrSpecSelected), //调用：{获取规格链名称函数}
                    title,
                    imgSrc: T.imgSrcSpec,
                    count: T.countBuy,
                    priceSell: T.priceSpec,
                    priceTotal: T.priceSpec * T.countBuy,
                    arrSpec: T.arrSpecSelected
                };
                return objGoods;
            },
            //函数：{点击购买函数}
            buy() {
                if (T.isCompleteSelected()) {
                    //Q1:选择规格完整
                    T.getObjGoods() //调用：{获取当前商品对象函数}
                } else {
                    //Q2:选择规格不完整

                    T.$message.error('请选择完整规格');
                }
            },
            //函数：{判断规格是否选择完整的函数}
            isCompleteSelected() {
                let flag = T.arrSpecSelected.every(doc => !!doc.objSOp)
                    //当T.arrSpecSelected的objSOp都存在时，代表已选择完
                return flag
            },
            //函数：{规格项变动函数}
            changeItem(itemEach, specEach) {
                let { __id: idSpec } = specEach;
                //变量：{匹配的已选项}
                let itemTarget = T.arrSpecSelected.find(doc => doc.__id == idSpec)
                itemTarget.objSOp = itemEach;
                T.updateImg(itemEach); //调用：{规格变动后更新商品图片的函数}
                T.updatePrice(); //函数：{规格变动后更新商品价格函数}
            },
            //函数：{规格变动后更新商品价格函数}
            updatePrice() {
                if (T.isCompleteSelected()) {
                    //Q1:选择规格完整


                    let idSpecChain = FN.getIdSpecChian(T.arrSpecSelected); //调用：{获取规格链id函数}
                    let price = lodash.get(T.dictSpecPrice, `${idSpecChain}.price`);
                    T.priceSpec = price;
                    if (util.isNullUndefined(price)) { //如果{000}000
                        T.priceSpec = T.docGoods.priceSell;
                    }
                } else {
                    //Q2:否则
                    let arrPrice = T.formData.listSpecPrice.map(doc => {
                        let { price } = doc;
                        if (util.isNullUndefined(price)) { //如果未设置价格
                            price = T.docGoods.priceSell || 0
                        }
                        return price
                    });
                    let minPrice = Math.min(...arrPrice);
                    let maxPrice = Math.max(...arrPrice);
                    T.priceSpec = `${minPrice} ~ ${maxPrice}`;
                    if (minPrice == maxPrice) {
                        //如果价格都相等
                        T.priceSpec = minPrice;
                    }
                }
            },
            //函数：{规格变动后更新商品图片的函数}
            updateImg(itemEach) {
                let { imgSrc } = itemEach;
                if (imgSrc) {
                    //如果imgSrc存在
                    T.imgSrcSpec = imgSrc;
                }
            },
            //函数：{规格项变动函数}
            focusItem(indexSpec, idItem) {
                //变量：{当前规格组的已选的规格项id}
                let IdSelected = lodash.get(T.arrSpecSelected, `[${indexSpec}].objSOp.__id`);
                if (IdSelected == idItem) {
                    return "primary";
                }
            }
        },
        created() {
            T = this;
        },
        mounted() {
            T.dictSpecPrice = lodash.keyBy(T.formData.listSpecPrice, "id");
            T.updatePrice(); //函数：{规格变动后更新商品价格函数}
            T.imgSrcSpec = T.docGoods.imgSrc
        }
    }
}
//#endregion


//#region MIX.goods_cart:商品购物车混入配置
{
    let T;
    MIX.goods_cart = {
        data() {
            return {

            };
        },
        methods: {
            //函数：{000函数}
            aaa: function(xxx) {
                return xxx

            },
            //函数：{000函数}
            aaa: function(xxx) {
                return xxx

            },
            //函数：{000函数}
            aaa: function(xxx) {
                return xxx

            },
            //函数：{000函数}
            aaa: function(xxx) {
                return xxx

            },
        },
        created() {
            T = this;
        },
        mounted() {

        }
    }
}
//#endregion





//#region 临时的基础字段


DYDICT.order_user = {
    ajax: {
        param: { _systemId: _systemId, _dataType: "user" },
        url: "/info/getCommonList"
    },
    populateColumn: "userDoc",
    idColumn: "openid",
    idColumn2: "openid"
};



D_ITEMS.trueName = {
    label: "真实姓名",
    prop: "trueName",

};
COLUMNS.trueName = {...D_ITEMS.trueName, width: 70, };
F_ITEMS.trueName = {...D_ITEMS.trueName };


D_ITEMS.deliveryDesc = {
    label: "配送说明",
    prop: "deliveryDesc",

};
COLUMNS.deliveryDesc = {...D_ITEMS.deliveryDesc, width: 70, };
F_ITEMS.deliveryDesc = {...D_ITEMS.deliveryDesc, type: "textarea" };



D_ITEMS.orderNickName = {
    label: "下单人",
    prop: "orderNickName",

};
COLUMNS.orderNickName = {...D_ITEMS.orderNickName,
    width: 70,
    formatter: function(row) {

        return lodash.get(row, `userDoc.nickName`);
    }
};



//#endregion


//#region 分组下的商品列表页
{
    let _dataType = "relation";


    PUB.listCF.detail_group_goods = {
        isShowBreadcrumb: false, //面包屑
        isShowSearchForm: false, //查询表单-
        idKey: "_id", //键名
        pageSize: 20,
        listIndex: "detail_group_goods", //vuex对应的字段~
        focusMenu: true, //进行菜单聚焦

        // ...PUB.listCFCommon,//展开公共配置
        ...PUB.listCFCommon3, //展开公共配置
        singleBtns: PUB.singleBtns_copy_detail_sort,
        batchBtns: {
            addon: [
                { uiType: "slot", slot: "slot_btn_select" },
                util.cfList.bBtns.add,
                util.cfList.bBtns.delete,

            ],
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

        //-------列配置数组-------
        columns: [COLUMNS.title_fixed, COLUMNS._id, COLUMNS.desc, COLUMNS.link, COLUMNS.sort],

        //-------筛选表单字段数组-------
        searchFormItems: [],
        //-------详情字段数组-------
        detailItems: [D_ITEMS.title, D_ITEMS.desc, D_ITEMS.countData, D_ITEMS._id, D_ITEMS._idRel, D_ITEMS._idRel2, D_ITEMS.sort],
        //-------新增、修改表单字段数组-------
        formItems: [F_ITEMS._idRel, F_ITEMS._idRel2, F_ITEMS.sort, ]

    }

}
//#endregion



//#region 分组下的案例列表页
{
    let _dataType = "relation";


    PUB.listCF.detail_group_project_case = {
        isShowBreadcrumb: false, //面包屑
        isShowSearchForm: false, //查询表单-
        idKey: "_id", //键名
        pageSize: 20,
        listIndex: "detail_group_project_case", //vuex对应的字段~
        focusMenu: true, //进行菜单聚焦

        // ...PUB.listCFCommon,//展开公共配置
        ...PUB.listCFCommon3, //展开公共配置
        singleBtns: PUB.singleBtns_copy_detail_sort,
        batchBtns: {
            addon: [
                { uiType: "slot", slot: "slot_btn_select" },
                util.cfList.bBtns.add,
                util.cfList.bBtns.delete,

            ],
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

        //-------列配置数组-------
        columns: [COLUMNS.title_fixed, COLUMNS._id, COLUMNS.desc, COLUMNS.link, COLUMNS.sort],

        //-------筛选表单字段数组-------
        searchFormItems: [],
        //-------详情字段数组-------
        detailItems: [D_ITEMS.title, D_ITEMS.desc, D_ITEMS.countData, D_ITEMS._id, D_ITEMS._idRel, D_ITEMS._idRel2, D_ITEMS.sort],
        //-------新增、修改表单字段数组-------
        formItems: [F_ITEMS._idRel, F_ITEMS._idRel2, F_ITEMS.sort, ]

    }

}
//#endregion





export default {}