<template>
  <div class="" style="padding:10px">
    <h1 class="title TAC">{{doc.title}}</h1>
    <div class="C_999" style="padding:10px">数据类型：{{doc._dataType}}</div>
    <div class v-html="doc.detail" style="padding:10px"></div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      dataId: null,
      doc: {}
    };
  },

  methods: {},
  async created() {
    console.log(" this.$route.query.groupId:", this.$route.query.groupId);
    this.dataId = this.$route.query.dataId;

    let { data } = await axios({
      //请求接口
      method: "post",
      url: `${PUB.domain}/info/commonDetail`,
      data: {
        _id: this.dataId,
        _systemId: PUB._systemId
      } //传递参数
    });
    this.doc = data.doc;
  }
};
</script>


<style >

</style>
