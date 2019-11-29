<template>
  <div
    @mouseenter.stop="showDialogFamiliarity()"
    @click.stop
    @mouseleave.stop="focusId=null"
    class="PSR DPIP"
  >
    <span
      :style="{color:dictFColor[valueNeed.familiarity]}"
    >{{dictFamiliarity[valueNeed.familiarity]||"未学"}}</span>
    <span class="iconfont iconarrow-down" v-if="focusId!=valueNeed.dataId" style="color:#ddd">
      <!--编辑按钮-->
    </span>
    <div class="PSA T0 L0 BC_fff pop-box" v-if="focusId===valueNeed.dataId">
      <i
        :class="{'familiarity-option':true,'focus':valueNeed.familiarity==1}"
        @click="changeFamiliarity(1)"
      >陌生</i>
      <i
        :class="{'familiarity-option':true,'focus':valueNeed.familiarity==2}"
        @click="changeFamiliarity(2)"
      >了解</i>
      <i
        :class="{'familiarity-option':true,'focus':valueNeed.familiarity==3}"
        @click="changeFamiliarity(3)"
      >熟悉</i>
      <i
        :class="{'familiarity-option':true,'focus':valueNeed.familiarity==4}"
        @click="changeFamiliarity(4)"
      >精通</i>
    </div>
  </div>
</template>

<script>
export default {
  //用于列表模糊查询的组件
  props: {
    value: [Object],
    data: [Object]
  },
  data() {
    return {
      valueNeed: null,

      //当前需要聚焦的数据id
      focusId: null,
      //熟悉度的数据字典
      dictFamiliarity: {
        1: "陌生",
        2: "了解",
        3: "熟悉",
        4: "精通"
      },
      //熟悉度的文字颜色数据字典
      dictFColor: {
        1: "#F56C6C",
        2: "#E6A23C",
        3: "rgb(30, 183, 155)",
        4: "#67C23A"
      }
    };
  },

  watch: {
    value: {
      handler(newVal, oldVal) {
        this.valueNeed = this.value;
        if (!this.valueNeed) {
          this.valueNeed = {};
        }
      },
      immediate: true,
      deep: true
    },
    valueNeed: {
      handler(newVal, oldVal) {
        this.$emit("input", newVal);
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    //显示熟悉度操作界面
    showDialogFamiliarity() {
      this.focusId = this.valueNeed.dataId; //将focusId设置成当前点击的数据Id
    },
    //切换当前数据的熟悉度函数
    async changeFamiliarity(value) {
      let studyTime = moment().format("YYYY-MM-DD HH:mm"); //获取当前学习时间

      alert(this.valueNeed._id);
      //Q1:数据id存在，修改
      if (this.valueNeed._id) {
        await axios({
          //请求接口
          method: "post",
          url: `${PUB.domain}/info/commonModify`,
          data: {
            _id: this.valueNeed._id,
            _dataType: "familiarity",
            _systemId: PUB._systemId,
            _data: { familiarity: value }
          }
        });
        this.valueNeed.familiarity = value;
        //Q2:数据id不存在，新增
      } else {
        let { data } = await axios({
          //请求接口
          method: "post",
          url: `${PUB.domain}/info/commonAdd`,
          data: {
            _dataType: "familiarity",
            _systemId: PUB._systemId,
            _data: {
              userId: PUB.userId,
              dataId: this.data._id,
              dataType: "html_api",
              familiarity: value
            }
          }
        });
        let docAdd = lodash.get(data, `addData._data`);
        docAdd._id = lodash.get(data, `addData._id`);//补充_id
        this.valueNeed = docAdd; //改变valueNeed
      }
    }
  },
  created() {
    


  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/****************************熟悉度切换-START****************************/

.pop-box {
  left: 50px;
  width: 215px;
  border: 1px #ddd solid;
  box-shadow: 2px 2px 5px #ccc;
  border-radius: 5px;
  z-index: 4;
  padding: 5px 10px 5px 5px;
}

.familiarity-option {
  display: inline-block;
  border: 1px #ddd solid;
  border-radius: 5px;
  line-height: 1;
  padding: 5px 8px;
  background-color: #f0f0f0;
  margin: 0 0 0 0;
  cursor: pointer;
  color: #999;
  font-style: normal;
  text-align: center;
}

.familiarity-option:hover {
  border: 1px #f60 solid;
}

.familiarity-option.focus {
  border: 1px #3a0 solid;
}

/****************************熟悉度切换-END****************************/
</style>
