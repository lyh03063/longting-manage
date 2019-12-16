<template>
  <div class style="padding:10px">
    <h1 class="title TAC">{{doc.title}}</h1>

    <div class="C_999 TAR" style="padding:10px">数据类型：{{doc._dataType}} 关键词：{{doc.keyword}}</div>

    <el-tabs tab-position="left">
      <el-tab-pane label="详情">
        <div class v-html="doc._detail"></div>
      </el-tab-pane>
      <el-tab-pane label="demo列表" v-if="doc.demoLinkList">
        <div class>
          <ul>
            <li v-for="docLink in doc.demoLinkList" :key="docLink._id">
              <a target="_blank" :href="docLink.link">{{docLink.title}}</a>
            </li>
          </ul>
        </div>
      </el-tab-pane>
      <!-- <el-tab-pane label="相关笔记" v-if="doc.noteList">
        <div class>
          <ul>
            <li v-for="docNote in doc.noteList" :key="docNote._id">
              <a target="_blank" :href="`#/detail_data?dataId=${docNote._id}`">{{docNote.title}}</a>
            </li>
          </ul>
        </div>
      </el-tab-pane>-->
      <el-tab-pane label="关联笔记" v-if="noteListByKeyword&&noteListByKeyword.length">
        <div class>
          <ul class="list-link">
            <li v-for="docNote in noteListByKeyword" :key="docNote._id">
              <a target="_blank" :href="`#/detail_data?dataId=${docNote._id}`">{{docNote.title}}</a>
            </li>
          </ul>
        </div>
      </el-tab-pane>
      <el-tab-pane label="关联Html-API" v-if="htmlAPIListByKeyword&&htmlAPIListByKeyword.length">
        <div class>
          <ul class="list-link">
            <li v-for="docNote in htmlAPIListByKeyword" :key="docNote._id">
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
      doc: {},
      noteListByKeyword: null, //关键词匹配的笔记
      htmlAPIListByKeyword: null, //关键词匹配的HtmlAPI
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

    let keyword = data.doc.keyword;

    if (keyword) {
      //如果关键词数组存在
      let { data } = await axios({
        //请求接口
        method: "post",
        url: `${PUB.domain}/info/getListBykeyword`,
        data: {
          _systemId: PUB._systemId,
          _dataType: "note",
          _id: this.dataId,
          selectJson: {
            _id: 1,
            title: 1,
            keyword: 1
          }
        } //传递参数
      });
      this.noteListByKeyword = data.list;
      {
        //如果关键词数组存在
        let { data } = await axios({
          //请求接口
          method: "post",
          url: `${PUB.domain}/info/getListBykeyword`,
          data: {
            _systemId: PUB._systemId,
            _dataType: "html_api",
            _id: this.dataId,
            selectJson: {
              _id: 1,
              title: 1,
              keyword: 1
            }
          } //传递参数
        });
        this.htmlAPIListByKeyword = data.list;
      }
    }
  }
};
</script>


<style >
</style>
