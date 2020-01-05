<template>
  <div class style="padding:10px">
    <h1 class="title TAC MB10">{{title}}</h1>

    <dm_debug_list>
      <dm_debug_item v-model="doc" text="doc" />
      <dm_debug_item v-model="familiarityDoc" text="familiarityDoc" />
    </dm_debug_list>

    <div class="familiarity_box MB10">
      {{dataTypeLabel}}-熟悉度：
      <familiarity_select
        class="MT6"
        v-model="familiarityDoc"
        :data="doc"
        :dataType="doc._dataType"
        v-if="doc._dataType"
      ></familiarity_select>
      <div class="C_999 DPIB FR MT6">
        关键词：{{doc.keyword}}
        <el-button plain @click="showDialogEdit" size="mini">编辑</el-button>
      </div>
    </div>

    <el-tabs tab-position="left">
      <el-tab-pane :label="`${dataTypeLabel}详情`">
        <div class v-html="doc._detail"></div>

        <div class v-if="doc._dataType=='vedio'">
          <video width="760" height="440" controls :src="srcVedio"></video>
        </div>

        <template class v-if="doc.link&&isShowIframe">
          <div class>
            以下内容通过嵌入其他网页引用：
            <a target="_blank" :href="doc.link">在新页面打开</a>
          </div>
          <iframe :src="doc.link" class="link_iframe" seamless></iframe>
        </template>
      </el-tab-pane>

      <el-tab-pane
        v-if="noteListByKeyword.length!==0"
        :label="`关联笔记 (${noteListByKeyword.length})`"
      >
        <ul class="list-link">
          <li v-for="docNote in noteListByKeyword" :key="docNote._id">
            <a target="_blank" :href="`#/detail_data?dataId=${docNote._id}`">{{docNote.title}}</a>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane
        v-if="htmlAPIListByKeyword.length!==0"
        :label="`关联Html-API (${htmlAPIListByKeyword.length})`"
      >
        <ul class="list-link">
          <li v-for="docApi in htmlAPIListByKeyword" :key="docApi._id">
            <!-- :href="`${docApi.link}`" -->
            <a
              target="_blank"
              :href="`#/detail_data?dataId=${docApi._id}`"
            >{{docApi.title}}：{{docApi.desc}}</a>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane
        v-if="cssAPIListByKeyword.length!==0"
        :label="`关联Css-API (${cssAPIListByKeyword.length})`"
      >
        <ul class="list-link">
          <li v-for="docApi in cssAPIListByKeyword" :key="docApi._id">
            <a
              target="_blank"
              :href="`#/detail_data?dataId=${docApi._id}`"
            >{{docApi.title}}：{{docApi.desc}}</a>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane
        v-if="jsAPIListByKeyword.length!==0"
        :label="`关联Js-API (${jsAPIListByKeyword.length})`"
      >
        <ul class="list-link">
          <li v-for="docApi in jsAPIListByKeyword" :key="docApi._id">
            <a
              target="_blank"
              :href="`#/detail_data?dataId=${docApi._id}`"
            >{{docApi.title}}：{{docApi.desc}}</a>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane
        v-if="frontDemoListByKeyword.length!==0"
        :label="`关联前端Demo (${frontDemoListByKeyword.length})`"
      >
        <ul class="list-link">
          <li v-for="docApi in frontDemoListByKeyword" :key="docApi._id">
            <a target="_blank" :href="`#/detail_data?dataId=${docApi._id}`">{{docApi.title}}</a>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane
        v-if="vedioListByKeyword.length!==0"
        :label="`关联视频 (${vedioListByKeyword.length})`"
      >
        <ul class="list-link">
          <li v-for="docApi in vedioListByKeyword" :key="docApi._id">
            <a target="_blank" :href="`#/detail_data?dataId=${docApi._id}`">{{docApi.title}}</a>
          </li>
        </ul>
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
  components: {
    familiarity_select: () =>
      import("@/components/common/familiarity_select.vue")
  },
  data() {
    return {
      familiarityDoc: {},
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
      dataTypeLabel: "", //数据类型标签
      noteListByKeyword: [{}], //关键词匹配的笔记列表
      htmlAPIListByKeyword: [{}], //关键词匹配的Html-API列表
      cssAPIListByKeyword: [{}], //关键词匹配的Css-API列表
      jsAPIListByKeyword: [{}], //关键词匹配的Js-API列表
      frontDemoListByKeyword: [{}], //关键词匹配的前端demo列表
      vedioListByKeyword: [{}], //关键词匹配的视频列表
      paramByKeyword: null //根据关键词请求关联数据的ajax固定参数
    };
  },
  computed: {
    title() {
      let { title, desc } = this.doc;
      if (desc) {
        title += `：${desc}`;
      }
      return title;
    },
    srcVedio() {
      let src = lodash.get(this.doc, `vedio[0].url`);

      return src;
    },
    isShowIframe() {
      let arrTypeNoIframe = ["vedio"];
      let flag = true;
      if (arrTypeNoIframe.includes(this.doc._dataType)) {
        flag = false;
      }
      console.log("flag:", flag);
      return flag;
    }
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
      let param = { ...this.paramByKeyword, _dataType: "note" };
      this.noteListByKeyword = await FN.ajaxlistBykeyword({ param }); //ajax获取关联列表
    },

    //函数：{ajax获取关联Html-API列表}
    async ajaxGetHtmlApiList() {
      let param = { ...this.paramByKeyword, _dataType: "html_api" };
      this.htmlAPIListByKeyword = await FN.ajaxlistBykeyword({ param }); //ajax获取关联列表
    },
    //函数：{ajax获取关联Css-API列表}
    async ajaxGetCssApiList() {
      let param = { ...this.paramByKeyword, _dataType: "css_api" };
      this.cssAPIListByKeyword = await FN.ajaxlistBykeyword({ param }); //ajax获取关联列表
    },
    //函数：{ajax获取关联Js-API列表}
    async ajaxGetJsApiList() {
      let param = { ...this.paramByKeyword, _dataType: "js_api" };
      this.jsAPIListByKeyword = await FN.ajaxlistBykeyword({ param }); //ajax获取关联列表
    },
    //函数：{ajax获取关联前端demo列表}
    async ajaxGetFrontDemoList() {
      let param = { ...this.paramByKeyword, _dataType: "front_demo" };
      this.frontDemoListByKeyword = await FN.ajaxlistBykeyword({ param }); //ajax获取关联列表
    },
    //函数：{ajax获取关联视频列表}
    async ajaxGetVedioList() {
      let param = { ...this.paramByKeyword, _dataType: "vedio" };
      this.vedioListByKeyword = await FN.ajaxlistBykeyword({ param }); //ajax获取关联列表
    },

    //函数：{ajax获取当前数据的熟悉度}
    async ajaxGetFamiliarity() {
      let { data } = await axios({
        //请求接口
        method: "post",
        url: `${PUB.domain}/info/commonDetail`,
        data: {
          _systemId: PUB._systemId,
          _dataType: "familiarity",
          findJson: {
            _idRel: this.dataId,
            dataType: this.doc._dataType,
            userId: localStorage[PUB.keyLoginUser]
          } //获取列表的数据总量
        } //传递参数
      });
      this.familiarityDoc = data.doc;
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

      this.ajaxGetFamiliarity(); //调用：{ajax获取当前数据的熟悉度}

      let { title, keyword, _dataType } = this.doc;
      // let keyword = this.doc.keyword;

      this.dataTypeLabel = lodash.get(DYDICT.dataType, `${_dataType}.label`);
      document.title = `${title}-${this.dataTypeLabel}`; //修改浏览器标题栏文字

      /*****************根据数据类型修改编辑按钮的表单配置-START*****************/
      this.cfFormEdit.paramAddonInit._dataType = _dataType;//设置类型参数
      let formItems = lodash.get(PUB.listCF, `list_${_dataType}.formItems`);//获取类型对应的表单项
      this.cfFormEdit.formItems = formItems;//设置对应的表单项
      /*****************根据数据类型修改编辑按钮的表单配置-END*****************/

      //根据关键词请求关联数据的ajax固定参数
      this.paramByKeyword = {
        _systemId: PUB._systemId,
        _id: this.dataId,
        selectJson: {
          _id: 1,
          title: 1,
          desc: 1,
          keyword: 1,
          link: 1,
          vedio: 1
        }
      };

      if (keyword) {
        this.ajaxGetNoteList(); //调用：{ajax获取关联笔记列表}
        this.ajaxGetHtmlApiList(); //调用：{ajax获取关联Html-API列表}
        this.ajaxGetCssApiList(); //调用：{ajax获取关联Css-API列表}
        this.ajaxGetFrontDemoList(); //调用：{ajax获取关联前端demo列表}
        this.ajaxGetJsApiList(); //调用：{ajax获取关联Js-API列表}
        this.ajaxGetVedioList(); //调用：{ajax获取关联视频列表}
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


<style  scoped>
.link_iframe {
  width: 100%;
  height: 600px;
}

.familiarity_box {
  background: #f0f0f0;
  /* border: 1px #ddd solid; */
  border-radius: 5px;
  padding: 0 10px;
  height: 40px;
}
</style>
