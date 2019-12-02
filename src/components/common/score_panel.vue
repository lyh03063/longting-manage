<template>
  <span>
    总分：
    <span class="C_f30 FWB">{{data.score}}</span>
    &nbsp;&nbsp;
    总条数：{{data.allCount}} &nbsp;&nbsp;
    <span class="C_999">
      <span class="item" @click="filterData()">未学({{data.countNull}})</span>
      <span class="item" @click="filterData(1)">陌生({{data.count1}})</span>
      <span class="item" @click="filterData(2)">了解({{data.count2}})</span>
      <span class="item" @click="filterData(3)">熟悉({{data.count3}})</span>
      <span class="item" @click="filterData(4)">精通({{data.count4}})</span>
    </span>
  </span>
</template>

<script>
export default {
  //用于列表模糊查询的组件
  props: {
    param: {}
  },
  data() {
    return {
      data: {}
    };
  },
  // watch: {
  //   "param.findJson": {
  //     handler(newVal, oldVal) {
  //       alert("param.findJson");
  //       this.ajaxGetScore(); //调用：{ajax获取分数函数}
  //     },
  //     // immediate: true,
  //     deep: true
  //   }
  // },

  methods: {
    //函数：{按熟悉度过滤数据函数}
    filterData(familiarity) {
      let arrLookup = [
        {
          //联合目标数据表
          $lookup: {
            from: "sheet232",
            localField: "_id",
            foreignField: "_idRel",
            as: "relDoc"
          }
        },
        {
          $match: {
            "relDoc._data.familiarity": familiarity,
            "relDoc._data.userId": localStorage.api_loginUserName
          }
        } //
      ];

      //层级太多太麻烦，这里需要使用vuex!!!!!

      //设置列表的联合查询参数值
      this.$store.commit("setListArrLookup", {
        listIndex: "list_html_api",
        arrLookup: arrLookup
      });
    },
    //函数：{ajax获取分数函数}
    async ajaxGetScore() {
      let { _systemId, _dataType, findJson } = this.param;
      let { data } = await axios({
        //请求接口
        method: "post",
        url: `${PUB.domain}/info/getFamiliarityScore`,
        data: { _systemId, _dataType, findJson }
      });

      this.data = data;
    }
  },
  async created() {
    // this.ajaxGetScore(); //调用：{ajax获取分数函数}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  border: 1px #ddd solid;
  border-radius: 5px;
  padding: 5px;
  display: inline-block;
  margin-right: 5px;
}
</style>
