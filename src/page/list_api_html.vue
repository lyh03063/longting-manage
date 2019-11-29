<template>
  <div class="table_visible">
    <dm_list_data :cf="cfList">
      <template v-slot:slot_column_familiarity="{row}">
        <div class="" >
          <familiarity_select v-model="row.familiarityDoc" :data="row"  ></familiarity_select>
        </div>
      
      </template>
    </dm_list_data>
  </div>
</template>
<script>

import familiarity_select from "@/components/common/familiarity_select.vue";
export default {
  components: {familiarity_select},
  data() {
    return {
      cfList: util.deepCopy(PUB.listCF.list_html_api)
    };
  },
  created() {
    //补充熟悉度ajax配置（动态数据字典）
    window.setFamiliarityAjaxCF(this.cfList)

  }
};
</script>


<style >

/* 暴力操作，取消单元格里的溢出隐藏 */
.table_visible  .cell {
    overflow:visible;
   
}
</style>
