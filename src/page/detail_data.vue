<template>
  <div class style="padding:10px">
    <h1 class="title TAC">{{doc.title}}</h1>
    <div class="C_999 TAR" style="padding:10px">
      数据类型：{{doc._dataType}} 关键词：{{doc.keyword}}
      <el-button plain @click="showDialogEdit" size="mini">编辑</el-button>
    </div>
    <el-tabs tab-position="left">
      <el-tab-pane label="详情">
        <div class v-html="doc._detail"></div>
      </el-tab-pane>

      <el-tab-pane
        v-if="noteListByKeyword.length!==0"
        :label="`关联笔记 (${noteListByKeyword.length})`"
      >
        <div class>
          <ul class="list-link">
            <li v-for="docNote in noteListByKeyword" :key="docNote._id">
              <a target="_blank" :href="`#/detail_data?dataId=${docNote._id}`">{{docNote.title}}</a>
            </li>
          </ul>
        </div>
      </el-tab-pane>
      <el-tab-pane
        v-if="htmlAPIListByKeyword.length!==0"
        :label="`关联Html-API (${htmlAPIListByKeyword.length})`"
      >
        <div class>
          <ul class="list-link">
            <li v-for="docApi in htmlAPIListByKeyword" :key="docApi._id">
              <a
                target="_blank"
                :href="`https://www.runoob.com/tags/tag-${docApi.title}.html`"
              >{{docApi.title}}：{{docApi.desc}}</a>
            </li>
          </ul>
        </div>
      </el-tab-pane>
      <el-tab-pane
        v-if="jsAPIListByKeyword.length!==0"
        :label="`关联Js-API (${jsAPIListByKeyword.length})`"
      >
        <div class>
          <ul class="list-link">
            <li v-for="docApi in jsAPIListByKeyword" :key="docApi._id">
              <a
                target="_blank"
                :href="`${docApi.link}`"
              >{{docApi.title}}：{{docApi.desc}}</a>
            </li>
          </ul>
        </div>
      </el-tab-pane>
      <el-tab-pane
        v-if="frontDemoListByKeyword.length!==0"
        :label="`关联前端Demo (${frontDemoListByKeyword.length})`"
      >
        <div class>
          <ul class="list-link">
            <li v-for="docFrontDemo in frontDemoListByKeyword" :key="docFrontDemo._id">
              <a target="_blank" :href="`${docFrontDemo.link}`">{{docFrontDemo.title}}</a>
            </li>
          </ul>
        </div>
      </el-tab-pane>
    </el-tabs>
    <!--编辑数据弹窗-->
    <el-dialog
      custom-class="n-el-dialog"
      width="95%"
      title="编辑数据弹窗"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
      :append-to-body="true"
      v-bind:visible.sync="isShowDialogEdit"
      v-if="isShowDialogEdit"
    >
      <dm_dynamic_form
        :cf="cfFormEdit"
        v-model="formDataEdit"
        @submit="modifyData"
        @cancel="isShowDialogEdit = false"
      ></dm_dynamic_form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      dataId: null,
      isShowDialogEdit: false, //是否显示编辑数据弹窗
      //编辑数据表单数据
      formDataEdit: {},
      cfFormEdit: {
        labelWidth: "150px",
        idKey: "_id",
        paramAddonInit: {
          _systemId: "sys_api",
          _dataType: "note"
        },
        col_span: 24,
        urlInit: "/info/commonDetail",
        formItems: PUB.listCF.list_note.formItems,
        btns: [
          {
            text: "修改",
            event: "submit",
            type: "primary",
            validate: true
          },
          {
            text: "取消",
            event: "cancel"
          }
        ]
      }, //编辑数据表单配置
      doc: {},
      noteListByKeyword: [{}], //关键词匹配的笔记列表
      htmlAPIListByKeyword: [{}], //关键词匹配的Html-API列表
      jsAPIListByKeyword: [{}], //关键词匹配的Js-API列表
      frontDemoListByKeyword: [{}], //关键词匹配的前端demo列表
      paramByKeyword: null //根据关键词请求关联数据的ajax固定参数
    };
  },

  methods: {
    //函数：{显示编辑数据弹窗函数}
    showDialogEdit() {
      this.formDataEdit._id = this.dataId; //编辑数据表单数据补充数据id
      this.isShowDialogEdit = true;
    },
    //函数：{提交编辑数据函数}
    async modifyData() {
      let urlModify = PUB.listCF.list_note.url.modify;
      let ajaxParam;
      ajaxParam = {
        _id: this.dataId,
        _data: this.formDataEdit
      };
      Object.assign(ajaxParam, this.cfFormEdit.paramAddonInit); //合并公共参数
      let response = await axios({
        //请求接口
        method: "post",
        url: PUB.domain + urlModify,
        data: ajaxParam //传递参数
      });
      this.$message.success("修改成功");
      this.isShowDialogEdit = false;
      this.init(); //函数：{初始化函数}
    },
    //函数：{ajax获取关联笔记列表}
    async ajaxGetNoteList() {
      //如果关键词数组存在
      let { data } = await axios({
        //请求接口
        method: "post",
        url: `${PUB.domain}/info/getListBykeyword`,
        data: {
          ...this.paramByKeyword,
          _dataType: "note"
        }
      });
      this.noteListByKeyword = data.list;
    },

    //函数：{ajax获取关联Html-API列表}
    async ajaxGetHtmlApiList() {
      //如果关键词数组存在
      let { data } = await axios({
        //请求接口
        method: "post",
        url: `${PUB.domain}/info/getListBykeyword`,
        data: {
          ...this.paramByKeyword,
          _dataType: "html_api"
        }
      });
      this.htmlAPIListByKeyword = data.list;
    },

    //函数：{ajax获取关联Js-API列表}
    async ajaxGetJsApiList() {
      //如果关键词数组存在
      let { data } = await axios({
        //请求接口
        method: "post",
        url: `${PUB.domain}/info/getListBykeyword`,
        data: {
          ...this.paramByKeyword,
          _dataType: "js_api"
        }
      });
      this.jsAPIListByKeyword = data.list;
    },
    //函数：{ajax获取关联前端demo列表}
    async ajaxGetFrontDemoList() {
      //如果关键词数组存在
      let { data } = await axios({
        //请求接口
        method: "post",
        url: `${PUB.domain}/info/getListBykeyword`,
        data: {
          ...this.paramByKeyword,
          _dataType: "front_demo"
        }
      });
      this.frontDemoListByKeyword = data.list;
    },
    //函数：{初始化函数}

    async init() {
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
      let keyword = this.doc.keyword;

      //根据关键词请求关联数据的ajax固定参数
      this.paramByKeyword = {
        _systemId: PUB._systemId,
        _id: this.dataId,
        selectJson: {
          _id: 1,
          title: 1,
          desc: 1,
          keyword: 1,
          link: 1
        }
      };

      if (keyword) {
        this.ajaxGetNoteList(); //调用：{ajax获取关联笔记列表}
        this.ajaxGetHtmlApiList(); //调用：{ajax获取关联Html-API列表}
        this.ajaxGetFrontDemoList(); //调用：{ajax获取关联前端demo列表}
        this.ajaxGetJsApiList(); //调用：{ajax获取关联Js-API列表}
      }
    }
  },
  async created() {
    console.log(" this.$route.query.groupId:", this.$route.query.groupId);
    this.dataId = this.$route.query.dataId;
    this.init(); //函数：{初始化函数}
  }
};
</script>


<style >
</style>
