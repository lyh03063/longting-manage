<template>
  <div class style="padding:10px">
    <dm_debug_list>
      <dm_debug_item v-model="groupId" text="groupId" />
    </dm_debug_list>

    <dm_list_data ref="listData" :cf="cfList" v-if="ready"></dm_list_data>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    doc: {},
    groupId: {}
  },
  data() {
    return {
      ready: false,
      cfList: util.deepCopy(PUB.listCF.detail_group_url)
    };
  },

  computed: {
    //用于监听变化
    arrLookup: function() {
      return this.$store.state.arrLookup[this.cfList.listIndex];
    }
  },

  methods: {},

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
          sort: 1,
          title: "$targetDoc.title",
          // dataType: "$targetDoc.dataType",
          link: "$targetDoc.link"
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
