<template>
  <div class="table_visible" style="padding:10px">
    <h1 class>专题详情页</h1>

    <dm_debug_list>
      <dm_debug_item v-model="groupId" text="groupId" />
    </dm_debug_list>

    <dm_list_data ref="listData" :cf="cfList" v-if="ready" @after-search="afterSearch">
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
        <score_panel ref="scorePanel" v-if="data" :param="scoreParam" :listIndex="cfList.listIndex">
          <!-- 计分板组件 -->
        </score_panel>
      </template>
    </dm_list_data>
  </div>
</template>

<script>
import score_panel from "@/components/common/score_panel.vue";
import familiarity_select from "@/components/common/familiarity_select.vue";
export default {
  components: { familiarity_select, score_panel },
  data() {
    return {
      groupId: "5dea1f8d1e03240e07122777",
      // 计分板的ajax参数
      scoreParam: {
        _systemId: "sys_api",
        _dataType: "note",
        findJson: null,
        userId: localStorage.api_loginUserName
      },
      ready: false,
      cfList: util.deepCopy(PUB.listCF.detail_group)
    };
  },
  methods: {
    async afterSearch(list) {
      console.log("list:", list);

      let arrId = list.map(doc => doc._idRel2)

console.log("arrId:", arrId);



      //设置id数组
      lodash.set(this.scoreParam, `findJson._id.$in`, arrId);

      this.$refs.scorePanel.ajaxGetScore(); //调用：{ajax获取分数函数}
    }
  },
  async created() {
    //专题id

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
        $project: { _id: 1, _idRel: 1, _idRel2: 1, targetDoc: "$relDoc2._data" }
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
          title: "$targetDoc.title",
          importance: "$targetDoc.importance",
          category: "$targetDoc.category"
        }
      }
    ];

    this.ready = true;

    //补充熟悉度ajax配置（动态数据字典）,注意要传_idRel2
    window.setFamiliarityAjaxCF(this.cfList, "_idRel2");
  }
};
</script>


<style >
/* 暴力操作，取消单元格里的溢出隐藏 */
.table_visible .cell {
  overflow: visible;
}
</style>
