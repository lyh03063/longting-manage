<template>
  <div class style="padding:10px">
    <h1 class="title TAC">{{doc.title}}</h1>

    <div class="C_999 TAR" style="padding:10px">数据类型：{{doc._dataType}}</div>


    <el-tabs tab-position="left">
      <el-tab-pane label="详情">
        <div class v-html="doc.detail" ></div>
      </el-tab-pane>
      <el-tab-pane label="demo列表" v-if="doc.demoLinkList">
        <div class >
          <ul>
            <li v-for="docLink in doc.demoLinkList" :key="docLink._id">
              <a target="_blank" :href="docLink.link">{{docLink.title}}</a>
            </li>
          </ul>
        </div>
      </el-tab-pane>
      <el-tab-pane label="相关笔记" v-if="doc.noteList">
        <div class >
          <ul>
            <li v-for="docNote in doc.noteList" :key="docNote._id">
              <a target="_blank" :href="`#/detail_data?dataId=${docNote._id}`">{{docNote.title}}</a>
            </li>
          </ul>
        </div>
      </el-tab-pane>
    </el-tabs>
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
