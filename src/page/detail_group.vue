<template>
  <div class style="padding:10px">
    <h1 class="title">{{groupDoc.title||"标题"}}</h1>

    <dm_debug_list>
      <dm_debug_item v-model="groupId" text="groupId" />
      <dm_debug_item v-model="componentName" text="对应的列表组件名" />
    </dm_debug_list>
    <!--动态组件-->
    <component :is="componentName" class :groupId="groupId" v-if="ready"></component>
  </div>
</template>

<script>


export default {
  components: { 
     detail_group_note: () => import("@/page/detail_group_note"),
      detail_group_group: () => import("@/page/detail_group_group"),
     detail_group_url: () => import("@/page/detail_group_url"),
    // detail_group_note,detail_group_group 
    },
  data() {
    return {
      componentName: null, //动态组件名称
      groupDoc: {},
      groupId: null,
      ready: false
    };
  },

  methods: {
    //函数：{获取分组详情函数}
    async getGroupDoc() {
      let { data } = await axios({
        //请求接口
        method: "post",
        url: `${PUB.domain}/info/commonDetail`,
        data: {
          _id: this.groupId,
          _systemId: PUB._systemId
        } //传递参数
      });
      this.groupDoc = data.doc;
      this.componentName = `detail_group_${this.groupDoc.dataType}`;
      document.title=this.groupDoc.title;//修改浏览器标题栏文字
      this.ready = true;
    }
  },
  async created() {
    console.log(" this.$route.query.groupId:", this.$route.query.groupId);
    this.groupId = this.$route.query.groupId;

    this.getGroupDoc(); //调用：{获取分组详情函数}
  }
};
</script>


<style scoped>
.title {
  font-size: 18px;
  text-align: center;
  line-height: 1;
  padding: 0 0 10px 0;
}
</style>
