<template>
  <div class="table_visible">
    <dm_list_data ref="listData" :cf="cfList" @after-search="afterSearch">
      <template v-slot:slot_column_familiarity="{row}">
        <div class>
          <familiarity_select v-model="row.relDoc" :data="row"></familiarity_select>
        </div>
      </template>
      <template v-slot:slot_in_toolbar="{data}">
        <score_panel ref="scorePanel" v-if="data&&data.objParam" :param="data.objParam">
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
      cfList: util.deepCopy(PUB.listCF.list_html_api)
    };
  },
  computed: {
    arrLookup: function() {
      return this.$store.state.arrLookup["list_html_api"];
    }
  },
  watch: {
    arrLookup: {
      async handler(newVal, oldVal) {
        console.log("arrLookup changed######");
        //更新列表的联合查询参数
        this.$refs.listData.cf.objParamAddon.arrLookup = newVal;
        await this.$nextTick(); //延迟到视图更新
        //列表更新
        this.$refs.listData.getDataList();
      },
      // immediate: true,
      deep: true
    }
  },
  methods: {
    afterSearch() {
      this.$refs.scorePanel.ajaxGetScore(); //调用：{ajax获取分数函数}
    }
  },
  created() {
    //补充熟悉度ajax配置（动态数据字典）
    // window.setFamiliarityAjaxCF(this.cfList);
  }
};
</script>


<style >
/* 暴力操作，取消单元格里的溢出隐藏 */
.table_visible .cell {
  overflow: visible;
}
</style>
