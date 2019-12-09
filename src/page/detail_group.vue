<template>
  <div class="" style="padding:10px">
    <h1 class>专题详情页</h1>

    <dm_debug_list>
      <dm_debug_item v-model="groupId" text="groupId" />
    </dm_debug_list>

    <dm_list_data ref="listData" :cf="cfList" v-if="ready" @after-search="afterSearch">
      <template v-slot:slot_column_familiarity="{row}">
        <div class>
          <familiarity_select
            v-model="row.familiarityDoc"
            :data="row"
            data-type="note"
            idKey="_idRel2"
          ></familiarity_select>
        </div>
      </template>
      <template v-slot:slot_in_toolbar="{data}">
        <score_panel
          ref="scorePanel"
          v-if="data"
          :param="data.objParam"
          idKey="_idRel2"
          :listIndex="cfList.listIndex"
          data-type="note"
          :arrLookup="cfList.objParamAddon.arrLookup"
        >
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
      groupId: null,
      // 计分板的ajax参数
      scoreParam: {
        _systemId: "sys_api",
        _dataType: "note",
        findJson: null,
        userId: localStorage.api_loginUserName
      },
      ready: false,
      cfList: util.deepCopy(PUB.listCF.detail_group)
    };
  },

  computed: {
    //用于监听变化
    arrLookup: function() {
      return this.$store.state.arrLookup[this.cfList.listIndex];
    }
  },
  watch: {
    arrLookup: {
      async handler(newVal, oldVal) {
        console.log("arrLookup changed######@@@@@@");
        //更新列表的联合查询参数-这句会有问题！！影响到原来的表单查询

        let arrLookupAdd = [
          {
            $lookup: {
              from: "sheet232",
              localField: "_idRel2", //这里要使用_idRel2
              foreignField: "_idRel",
              as: "relDoc"
            }
          },
          {
            $unwind: "$relDoc"
          },
          {
            $match: {
              "relDoc._data.familiarity": 3,
              "relDoc._data.userId": "lyh"
            }
          }
        ];

        this.$refs.listData.objParam.arrLookup = [
          ...this.cfList.objParamAddon.arrLookup,
          ...newVal
        ];
        await this.$nextTick(); //延迟到视图更新
        //列表更新
        this.$refs.listData.getDataList();
      },
      deep: true
    }
  },
  methods: {
    async afterSearch(list) {
      console.log("list:", list);

      let arrId = list.map(doc => doc._idRel2);

      console.log("arrId:", arrId);

      //设置id数组
      // lodash.set(this.scoreParam, `findJson._id.$in`, arrId);

      this.$refs.scorePanel.ajaxGetScore(); //调用：{ajax获取分数函数}
    }
  },
  async created() {
    console.log(" this.$route.query.groupId:", this.$route.query.groupId);
    this.groupId = this.$route.query.groupId;

    //专题id

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
        $project: { _id: 1, _idRel: 1, _idRel2: 1, targetDoc: "$relDoc2._data" }
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
          title: "$targetDoc.title",
          importance: "$targetDoc.importance",
          category: "$targetDoc.category"
        }
      }
    ];

    this.ready = true;

    //补充熟悉度ajax配置（动态数据字典）,注意要传_idRel2
    window.setFamiliarityAjaxCF(this.cfList, "_idRel2");
  }
};
</script>



