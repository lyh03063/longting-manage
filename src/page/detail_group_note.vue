<template>
  <div class style="padding:10px">
    <dm_debug_list>
      <dm_debug_item v-model="groupId" text="groupId" />
    </dm_debug_list>

    <dm_list_data
      ref="listData"
      :cf="cfList"
      v-if="ready"
      @after-search="afterSearch"
  
    >
      <template v-slot:slot_column_familiarity="{row}">
        <div class>
          <familiarity_select
            v-model="row.familiarityDoc"
            :data="row"
            data-type="note"
            idKey="_idRel2"
          ></familiarity_select>
        </div>
      </template>
      <template v-slot:slot_in_toolbar="{data}">
        <score_panel
          ref="scorePanel"
          v-if="data"
          :param="data.objParam"
          idKey="_idRel2"
          :listIndex="cfList.listIndex"
          data-type="note"
          :arrLookup="cfList.objParamAddon.arrLookup"
        >
          <!-- 计分板组件 -->
        </score_panel>
      </template>
    </dm_list_data>
  </div>
</template>

<script>

export default {
   components: {
    familiarity_select: () =>
      import("@/components/common/familiarity_select.vue"),
    score_panel: () => import("@/components/common/score_panel.vue")
  },
  props: {
    groupDoc: {},
    groupId: {}
  },
  data() {
    return {
      // 计分板的ajax参数
      scoreParam: {
        _systemId: "sys_api",
        _dataType: "note",
        findJson: null,
        userId: localStorage.api_loginUserName
      },
      ready: false,
      cfList: util.deepCopy(PUB.listCF.detail_group_note)
    };
  },

  computed: {
    //用于监听变化
    arrLookup: function() {
      return this.$store.state.arrLookup[this.cfList.listIndex];
    }
  },
  watch: {
    arrLookup: {
      async handler(newVal, oldVal) {
        console.log("arrLookup changed######@@@@@@");
        //更新列表的联合查询参数-这句会有问题！！影响到原来的表单查询

        this.$refs.listData.objParam.arrLookup = [
          ...this.cfList.objParamAddon.arrLookup,
          ...newVal
        ];
        await this.$nextTick(); //延迟到视图更新
        //列表更新
        this.$refs.listData.getDataList();
      },
      deep: true
    }
  },
  methods: {
    async afterSearch(list) {
      console.log("list:", list);
      let arrId = list.map(doc => doc._idRel2);
      console.log("arrId:", arrId);
      //设置id数组
      // lodash.set(this.scoreParam, `findJson._id.$in`, arrId);
      this.$refs.scorePanel.ajaxGetScore(); //调用：{ajax获取分数函数}

      this.updateGroupCountData()//调用：{更新当前分组的数据量的函数}
    },
    //函数：{更新当前分组的数据的函数}
    async updateGroupCountData() {
      let urlModify = PUB.listCF.list_group.url.modify;
      let ajaxParam = {
        _id: this.groupId,
        _data: {countData:this.$refs.listData.allCount}//获取列表的数据总量
      };
      Object.assign(ajaxParam, PUB.listCF.list_group.paramAddonPublic); //合并公共参数
      let response = await axios({
        //请求接口
        method: "post",
        url: PUB.domain + urlModify,
        data: ajaxParam //传递参数
      });
    }
  },



  async created() {
    this.cfList.findJsonDefault = {
      _idRel: this.groupId
    };

    //补充联合查询参数，很复杂！！！！
    this.cfList.objParamAddon.arrLookup = [
      {
        //联合目标数据表
        $lookup: {
          from: "sheet232",
          localField: "_idRel2",
          foreignField: "_id",
          as: "relDoc2"
        }
      },
      //使用$project重新组装，此时targetDoc是数组形式
      {
        $project: {
          _id: 1,
          _idRel: 1,
          _idRel2: 1,
          sort: "$_data.sort", //序号获取
          targetDoc: "$relDoc2._data"
        }
      },
      //将targetDoc展开
      {
        $unwind: "$targetDoc"
      },
      //使用$project重新组装
      {
        $project: {
          _id: 1,
          _idRel: 1,
          _idRel2: 1,
          sort: 1, //序号获取
          title: "$targetDoc.title",
          importance: "$targetDoc.importance",
          category: "$targetDoc.category",
          difficulty: "$targetDoc.difficulty"
        }
      }
    ];

    this.ready = true;

    //补充熟悉度ajax配置（动态数据字典）,注意要传_idRel2
    window.setFamiliarityAjaxCF(this.cfList, "_idRel2");
  }
};
</script>


<style scoped>
</style>
